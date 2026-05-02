// WagerAds backoffice — vanilla JS kanban for managing leads.
// Auth: bearer token in sessionStorage. Token verified per-request by API.

const TOKEN_KEY = "wagerads.admin.token";
const STAGES = [
  { id: "new",        label: "New" },
  { id: "contacted",  label: "Contacted" },
  { id: "qualified",  label: "Qualified" },
  { id: "meeting",    label: "Meeting" },
  { id: "won",        label: "Won" },
  { id: "lost",       label: "Lost" },
];
const STAGE_IDS = STAGES.map((s) => s.id);

const SPEND_LABELS = {
  "100": "$100K — $500K",
  "500": "$500K — $1M",
  "1m":  "$1M — $3M",
  "3m":  "$3M+",
};

const root = document.getElementById("app");

let state = {
  token: sessionStorage.getItem(TOKEN_KEY) || "",
  leads: [],
  loading: false,
  error: "",
  modalLeadId: null,
};

// ---- helpers --------------------------------------------------------------

function escape(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function relTime(iso) {
  if (!iso) return "";
  const t = new Date(iso).getTime();
  if (Number.isNaN(t)) return "";
  const diff = Math.max(0, Date.now() - t);
  const m = Math.floor(diff / 60000);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 7) return `${d}d ago`;
  const w = Math.floor(d / 7);
  if (w < 5) return `${w}w ago`;
  return new Date(iso).toLocaleDateString();
}

function formatLocale(loc) {
  if (!loc) return "—";
  const map = { en: "EN", pt: "PT", es: "ES" };
  const k = String(loc).toLowerCase().split("-")[0];
  return map[k] || loc.toUpperCase();
}

function spendLabel(s) {
  return SPEND_LABELS[s] || (s ? String(s) : "—");
}

async function api(path, opts = {}) {
  const headers = { "Content-Type": "application/json", ...(opts.headers || {}) };
  if (state.token) headers.Authorization = `Bearer ${state.token}`;
  const res = await fetch(path, { ...opts, headers });
  if (res.status === 401) {
    state.token = "";
    sessionStorage.removeItem(TOKEN_KEY);
    render();
    throw new Error("Unauthorized");
  }
  let data = null;
  try { data = await res.json(); } catch { /* ignore */ }
  if (!res.ok) {
    const err = new Error(data?.error || `HTTP ${res.status}`);
    err.status = res.status;
    throw err;
  }
  return data;
}

// ---- screens --------------------------------------------------------------

function renderLogin(err = "") {
  root.innerHTML = `
    <div class="login-wrap">
      <form class="login-card" id="login-form">
        <h2>WagerAds Backoffice</h2>
        <p>Enter the admin token. It's stored in this tab only — closing the browser logs you out.</p>
        <label class="label" for="token">Admin token</label>
        <input id="token" type="password" autocomplete="off" autofocus required />
        <div class="err" id="login-err">${escape(err)}</div>
        <button type="submit">Continue →</button>
      </form>
    </div>`;
  document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = document.getElementById("token");
    const errEl = document.getElementById("login-err");
    errEl.textContent = "";
    const token = input.value.trim();
    if (!token) return;
    state.token = token;
    try {
      // Validate by trying to load leads.
      const data = await api("/api/leads");
      sessionStorage.setItem(TOKEN_KEY, token);
      state.leads = data.leads || [];
      state.error = "";
      render();
    } catch (e) {
      state.token = "";
      sessionStorage.removeItem(TOKEN_KEY);
      errEl.textContent = e.status === 401
        ? "Wrong token."
        : (e.message || "Couldn't reach the server.");
    }
  });
}

function renderBoard() {
  const counts = STAGES.map((s) => state.leads.filter((l) => l.status === s.id).length);
  const total = state.leads.length;

  const banner = state.error ? `<div class="banner err">${escape(state.error)}</div>` : "";

  const stats = STAGES.map((s, i) => `
    <div class="stat">
      <span class="n">${counts[i]}</span>
      <span class="l"><span class="dot dot-${s.id}"></span>${s.label}</span>
    </div>`).join("");

  const cols = STAGES.map((s) => {
    const items = state.leads
      .filter((l) => l.status === s.id)
      .map((l) => cardHtml(l))
      .join("") || `<div class="empty">No leads</div>`;
    return `
      <div class="col">
        <div class="col-head">
          <span class="name"><span class="dot dot-${s.id}"></span>${s.label}</span>
          <span class="count">${state.leads.filter((l) => l.status === s.id).length}</span>
        </div>
        <div class="col-body" data-stage="${s.id}">${items}</div>
      </div>`;
  }).join("");

  root.innerHTML = `
    <header class="topbar">
      <h1>WAGERADS · BACKOFFICE <span>${total} lead${total === 1 ? "" : "s"}</span></h1>
      <div class="actions">
        <button class="icon-btn" id="refresh">Refresh</button>
        <button class="icon-btn" id="logout">Logout</button>
      </div>
    </header>
    ${banner}
    <div class="stats">${stats}</div>
    <div class="board-wrap"><div class="board">${cols}</div></div>
    <div class="modal-bg" id="modal-bg"></div>`;

  bindBoard();
}

function cardHtml(lead) {
  const co = lead.company || "—";
  const person = [lead.name, lead.email].filter(Boolean).join(" · ");
  const markets = (lead.markets || []).slice(0, 3);
  const more = (lead.markets || []).length - markets.length;
  const pills = [
    lead.monthlySpend ? `<span class="pill spend">${escape(spendLabel(lead.monthlySpend))}</span>` : "",
    ...markets.map((m) => `<span class="pill">${escape(m)}</span>`),
    more > 0 ? `<span class="pill">+${more}</span>` : "",
    lead.locale ? `<span class="pill">${escape(formatLocale(lead.locale))}</span>` : "",
  ].filter(Boolean).join("");
  return `
    <article class="card" draggable="true" data-id="${escape(lead.id)}">
      <div class="co">${escape(co)}</div>
      ${person ? `<div class="person">${escape(person)}</div>` : ""}
      ${pills ? `<div class="meta">${pills}</div>` : ""}
      <span class="ago">${escape(relTime(lead.receivedAt))}</span>
    </article>`;
}

// ---- interactions ---------------------------------------------------------

function bindBoard() {
  document.getElementById("refresh").addEventListener("click", () => loadLeads(true));
  document.getElementById("logout").addEventListener("click", () => {
    state.token = "";
    sessionStorage.removeItem(TOKEN_KEY);
    state.leads = [];
    render();
  });

  let dragId = null;

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("dragstart", (e) => {
      dragId = card.dataset.id;
      card.classList.add("is-dragging");
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", dragId);
    });
    card.addEventListener("dragend", () => {
      card.classList.remove("is-dragging");
      document.querySelectorAll(".col-body.is-drop-target").forEach((c) => c.classList.remove("is-drop-target"));
    });
    card.addEventListener("click", (e) => {
      if (e.target.closest(".card") && !card.classList.contains("is-dragging")) {
        openModal(card.dataset.id);
      }
    });
  });

  document.querySelectorAll(".col-body").forEach((body) => {
    body.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      body.classList.add("is-drop-target");
    });
    body.addEventListener("dragleave", () => body.classList.remove("is-drop-target"));
    body.addEventListener("drop", async (e) => {
      e.preventDefault();
      body.classList.remove("is-drop-target");
      const id = dragId || e.dataTransfer.getData("text/plain");
      const stage = body.dataset.stage;
      if (!id || !stage) return;
      const lead = state.leads.find((l) => l.id === id);
      if (!lead || lead.status === stage) return;
      // optimistic
      const previous = lead.status;
      lead.status = stage;
      render();
      try {
        await api(`/api/leads/${encodeURIComponent(id)}`, {
          method: "PATCH",
          body: JSON.stringify({ status: stage }),
        });
      } catch (e) {
        lead.status = previous;
        state.error = `Couldn't move card: ${e.message}`;
        render();
        setTimeout(() => { state.error = ""; render(); }, 4000);
      }
    });
  });
}

// ---- modal ----------------------------------------------------------------

function openModal(id) {
  const lead = state.leads.find((l) => l.id === id);
  if (!lead) return;
  state.modalLeadId = id;

  const bg = document.getElementById("modal-bg");
  const stageOptions = STAGES.map((s) =>
    `<option value="${s.id}"${s.id === lead.status ? " selected" : ""}>${s.label}</option>`
  ).join("");

  const markets = (lead.markets || []).map((m) => `<span>${escape(m)}</span>`).join("");

  bg.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      <header>
        <div>
          <div class="co">${escape(lead.company || "—")}</div>
          <div class="label" style="margin-top:6px">Lead · ${escape(lead.id)}</div>
        </div>
        <button class="close" type="button" aria-label="Close">×</button>
      </header>
      <div class="body">
        <div class="l">Name</div><div class="v">${escape(lead.name || "—")}</div>
        <div class="l">Email</div><div class="v"><a href="mailto:${escape(lead.email)}">${escape(lead.email || "—")}</a></div>
        <div class="l">Spend</div><div class="v">${escape(spendLabel(lead.monthlySpend))}</div>
        <div class="l">Markets</div><div class="v"><div class="chips">${markets || '<span style="background:transparent;border:none;color:var(--stone)">—</span>'}</div></div>
        <div class="l">Message</div><div class="v" style="white-space:pre-wrap">${escape(lead.message || "—")}</div>
        <div class="l">Received</div><div class="v">${escape(new Date(lead.receivedAt).toLocaleString())} <span style="color:var(--stone)">· ${escape(relTime(lead.receivedAt))}</span></div>
        <div class="l">Locale</div><div class="v">${escape(formatLocale(lead.locale))}</div>
        <div class="l">Source</div><div class="v" style="word-break:break-all">${escape(lead.referer || lead.page || "—")}</div>
        <div class="l">Stage</div><div class="v"><select id="m-status">${stageOptions}</select></div>
        <div class="l">Notes</div><div class="v"><textarea id="m-notes" placeholder="Internal notes — visible to anyone with the admin token.">${escape(lead.notes || "")}</textarea></div>
      </div>
      <footer>
        <span class="status" id="m-status-msg"></span>
        <button type="button" id="m-cancel">Cancel</button>
        <button type="button" id="m-save" class="primary">Save</button>
      </footer>
    </div>`;
  bg.classList.add("is-open");

  bg.querySelector(".close").addEventListener("click", closeModal);
  bg.querySelector("#m-cancel").addEventListener("click", closeModal);
  bg.addEventListener("click", (e) => { if (e.target === bg) closeModal(); });
  bg.querySelector("#m-save").addEventListener("click", saveModal);
  document.addEventListener("keydown", onEsc);
}

function closeModal() {
  const bg = document.getElementById("modal-bg");
  if (!bg) return;
  bg.classList.remove("is-open");
  bg.innerHTML = "";
  state.modalLeadId = null;
  document.removeEventListener("keydown", onEsc);
}
function onEsc(e) { if (e.key === "Escape") closeModal(); }

async function saveModal() {
  const id = state.modalLeadId;
  if (!id) return;
  const lead = state.leads.find((l) => l.id === id);
  if (!lead) return;

  const status = document.getElementById("m-status").value;
  const notes = document.getElementById("m-notes").value;
  const msg = document.getElementById("m-status-msg");
  const saveBtn = document.getElementById("m-save");

  if (!STAGE_IDS.includes(status)) {
    msg.textContent = "Invalid stage";
    msg.className = "status err";
    return;
  }

  saveBtn.disabled = true;
  msg.textContent = "Saving…";
  msg.className = "status";

  try {
    const data = await api(`/api/leads/${encodeURIComponent(id)}`, {
      method: "PATCH",
      body: JSON.stringify({ status, notes }),
    });
    Object.assign(lead, data.lead);
    msg.textContent = "Saved";
    msg.className = "status ok";
    setTimeout(() => { closeModal(); render(); }, 600);
  } catch (e) {
    msg.textContent = e.message || "Save failed";
    msg.className = "status err";
    saveBtn.disabled = false;
  }
}

// ---- data flow ------------------------------------------------------------

async function loadLeads(quiet = false) {
  if (state.loading) return;
  state.loading = true;
  if (!quiet) {
    root.innerHTML = `<div class="skeleton">Loading leads…</div>`;
  }
  try {
    const data = await api("/api/leads");
    state.leads = data.leads || [];
    state.error = "";
  } catch (e) {
    if (e.message !== "Unauthorized") {
      state.error = `Couldn't load leads: ${e.message}`;
    }
  } finally {
    state.loading = false;
    render();
  }
}

function render() {
  if (!state.token) {
    renderLogin();
    return;
  }
  if (state.loading && state.leads.length === 0) {
    root.innerHTML = `<div class="skeleton">Loading leads…</div>`;
    return;
  }
  renderBoard();
}

// Boot
if (state.token) {
  loadLeads();
} else {
  renderLogin();
}

// Auto-refresh every 60s while signed in.
setInterval(() => {
  if (state.token && !state.modalLeadId) loadLeads(true);
}, 60000);
