import type { Locale } from "./config";

export type Dict = typeof en;

const en = {
  meta: {
    title:
      "WagerAds · Performance media for iGaming operators. LATAM-first, global-ready.",
    description:
      "End-to-end acquisition for the iGaming industry. Creative, tracking, and paid media under one roof.",
  },
  nav: {
    work: "Work",
    approach: "Approach",
    channels: "Channels",
    about: "About",
    cta: "Get in touch",
    language: "Language",
  },
  hero: {
    tag: "Performance media for iGaming",
    headlinePlain: "We buy media for operators",
    headlineItalic: "who move real volume.",
    sub: "End-to-end acquisition for the iGaming industry. Creative, tracking, and paid media under one roof.",
    ctaPrimary: "Get in touch →",
    ctaSecondary: "See results ↓",
    stat1Label: "Managed in paid media",
    stat2Label: "Deposits generated for operators",
    stat3Label: "Markets activated worldwide",
  },
  services: {
    eyebrow: "Our stack",
    headingPlain: "Creative, tracking, and paid media",
    headingItalic: "are one problem, not three.",
    sub: "We run the full stack so nothing falls between the cracks.",
    items: [
      {
        title: "Creative.",
        body: "Ad creatives engineered for iGaming conversion. Static, video, UGC, playables. We ship 50+ variations per campaign because the best creative wins, not the best targeting.",
      },
      {
        title: "Tracking.",
        body: "Server-side tracking with a proprietary container layer. Meta CAPI, TikTok Events API, Kwai Events, custom postbacks. We own your attribution, not the platforms.",
      },
      {
        title: "Traffic.",
        body: "Paid media execution across every major channel. Policy-savvy for regulated markets, account-resilient for gray and unregulated ones.",
      },
      {
        title: "Direct.",
        body: "Email, SMS, and WhatsApp blasts for acquisition and post-signup impact. Cold lists into depositors. Fresh sign-ups into whales. Pure reach.",
      },
    ],
  },
  channels: {
    eyebrow: "Channels",
    headingPlain: "One stack,",
    headingItalic: "every channel.",
    sub: "Every channel wired into one attribution layer. No silos, no double counting, no leakage.",
    items: [
      { name: "Google Ads", sub: "Search, YouTube, PMax" },
      { name: "Meta Ads", sub: "Facebook, Instagram" },
      { name: "TikTok Ads", sub: "In-feed, Spark, Brand" },
      { name: "Kwai Ads", sub: "LATAM native spend" },
      { name: "Native", sub: "Taboola, Outbrain, MGID" },
      { name: "Programmatic", sub: "The Trade Desk, DV360" },
      { name: "Email / SMS", sub: "Blasts: acquisition + lifecycle" },
      { name: "WhatsApp", sub: "Direct, opted-in reach" },
    ],
  },
  tracking: {
    eyebrow: "Tracking",
    headingPlain: "We own your attribution,",
    headingItalic: "not the platforms.",
    sub: "Server-side by default. Every event fires twice, reconciled in our own attribution layer. No data leaks, no black boxes.",
  },
  reach: {
    eyebrow: "Reach",
    headingPlain: "LATAM-first.",
    headingItalic: "Global-ready.",
    sub: "10+ markets activated. 5+ in expansion. One operations layer across the continent.",
    stats: {
      active: "Active markets",
      expansion: "In expansion",
      layer: "Operations layer",
    },
  },
  edge: {
    eyebrow: "Why WagerAds",
    heading: "Why operators pick WagerAds.",
    items: [
      {
        title: "End-to-end, not piecemeal.",
        body: "Creative, tracking, traffic, and direct response under one roof. No agency juggling. No finger-pointing between teams. One P&L.",
      },
      {
        title: "Multi-market fluency.",
        body: "We run regulated, gray-market, and unregulated campaigns. We know where each plays, and how not to burn accounts in the process.",
      },
      {
        title: "Performance is the contract.",
        body: "We're judged on FTDs, ROAS, and LTV. Not impressions. Not CTR. Not vanity metrics. If you don't win, we don't win.",
      },
      {
        title: "LATAM DNA, global reach.",
        body: "We live in LATAM and know the payment rails, the regulator moves, the player behavior, and the compliance lines in Brazil, Mexico, Colombia, Peru, Chile, and Argentina. We run campaigns worldwide from the same playbook.",
      },
    ],
  },
  results: {
    eyebrow: "Results",
    headingItalic: "What it looks like.",
    stats: {
      managed: "Managed",
      deposits: "Deposits",
      markets: "Markets",
      uplift: "Avg ROAS uplift, first 90 days",
    },
    cases: [
      {
        tag: "Regulated Operator · Brazil",
        headline: "140K FTDs at 20x+ ROAS.",
        body: "100K MAUs retained over the period. Multi-channel acquisition.",
      },
      {
        tag: "Regulated Operator · Central America",
        headline: "$1M+ in monthly deposits.",
        body: "$200 average deposit ticket per player.",
      },
      {
        tag: "Gray-market Operator · LATAM",
        headline: "0 to $2M in monthly deposits in 90 days.",
        body: "Cold launch across paid and direct channels.",
      },
    ],
  },
  process: {
    eyebrow: "How we work",
    headingPlain: "A playbook,",
    headingItalic: "not a pitch.",
    steps: [
      {
        title: "Audit.",
        body: "Free 60-minute strategic audit of your paid media, tracking, and creative. You leave with a written diagnosis, whether you hire us or not.",
      },
      {
        title: "Strategy.",
        body: "14-day strategic plan. Channel mix, creative briefs, tracking architecture, 90-day targets. Board-ready.",
      },
      {
        title: "Execution.",
        body: "We launch, optimize, and scale. Weekly reporting. Daily Slack or WhatsApp access to the ops team. No black boxes.",
      },
      {
        title: "Scale.",
        body: "Once the base is profitable, we open new channels, new markets, and new creatives. Always pushing CAC down and LTV up.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Let's talk",
    headlinePlain: "Stop hiring agencies.",
    headlineItalic: "Hire media buyers.",
    sub: "If you're an iGaming operator spending $500k+/month on paid media (or about to), we should talk.",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
  },
  form: {
    name: "Name",
    company: "Company",
    email: "Work email",
    whatsapp: "WhatsApp / Telegram",
    spend: "Monthly paid media spend",
    spendTiers: ["< $100k", "$100k – $500k", "$500k – $1M", "$1M+"],
    markets: "Markets",
    marketsList: [
      "Brazil",
      "Mexico",
      "Colombia",
      "Peru",
      "Chile",
      "Argentina",
      "Other LATAM",
      "Global",
    ],
    message: "Brief message",
    messagePlaceholder: "What are you trying to scale, and what's in your way?",
    submit: "Get in touch →",
    submitting: "Sending…",
    successEyebrow: "Received",
    successHeadline: "We'll be in touch within 24 hours.",
    successBody:
      "If you need a faster reply, ping us on WhatsApp. Link is in the footer.",
    errorMessage:
      "Something went wrong. Try again or email us at hello@wagerads.com.",
  },
  footer: {
    taglineLine1: "Performance media for the iGaming industry.",
    taglineLine2: "LATAM-first. Global-ready.",
    navigate: "Navigate",
    contact: "Contact",
    follow: "Follow",
    bookCall: "Get in touch",
    privacy: "Privacy",
    terms: "Terms",
    copyright:
      "© 2026 WagerAds. All rights reserved. WagerAds is part of NT Capital Group.",
  },
};

const pt: typeof en = {
  meta: {
    title:
      "WagerAds · Mídia de performance para operadores de iGaming. LATAM-first, global-ready.",
    description:
      "Aquisição end-to-end para a indústria de iGaming. Criativo, tracking e mídia paga sob o mesmo teto.",
  },
  nav: {
    work: "Cases",
    approach: "Abordagem",
    channels: "Canais",
    about: "Sobre",
    cta: "Solicitar contato",
    language: "Idioma",
  },
  hero: {
    tag: "Mídia de performance para iGaming",
    headlinePlain: "Compramos mídia para operadores",
    headlineItalic: "que movimentam volume de verdade.",
    sub: "Aquisição end-to-end para a indústria de iGaming. Criativo, tracking e mídia paga sob o mesmo teto.",
    ctaPrimary: "Solicitar contato →",
    ctaSecondary: "Ver resultados ↓",
    stat1Label: "Gerenciados em mídia paga",
    stat2Label: "Depósitos gerados para operadores",
    stat3Label: "Mercados ativados no mundo",
  },
  services: {
    eyebrow: "Nossa stack",
    headingPlain: "Criativo, tracking e mídia paga",
    headingItalic: "são um problema só, não três.",
    sub: "Rodamos a stack inteira para nada cair no vão entre as equipes.",
    items: [
      {
        title: "Criativo.",
        body: "Anúncios desenhados para conversão em iGaming. Estático, vídeo, UGC, playables. Entregamos mais de 50 variações por campanha porque quem ganha é o melhor criativo, não o melhor targeting.",
      },
      {
        title: "Tracking.",
        body: "Rastreio server-side com camada de container própria. Meta CAPI, TikTok Events API, Kwai Events e postbacks customizados. A atribuição é sua, não das plataformas.",
      },
      {
        title: "Tráfego.",
        body: "Execução de mídia paga em todos os grandes canais. Com conhecimento de políticas para mercados regulados e resiliência de contas para cinza e não regulados.",
      },
      {
        title: "Direto.",
        body: "Disparos de e-mail, SMS e WhatsApp para aquisição e impacto pós-cadastro. Listas frias viram depositantes. Cadastros novos viram whales. Alcance puro.",
      },
    ],
  },
  channels: {
    eyebrow: "Canais",
    headingPlain: "Uma só stack,",
    headingItalic: "todos os canais.",
    sub: "Todos os canais ligados a uma só camada de atribuição. Sem silos, sem contagem dupla, sem vazamento.",
    items: [
      { name: "Google Ads", sub: "Search, YouTube, PMax" },
      { name: "Meta Ads", sub: "Facebook, Instagram" },
      { name: "TikTok Ads", sub: "In-feed, Spark, Brand" },
      { name: "Kwai Ads", sub: "Mídia nativa na LATAM" },
      { name: "Native", sub: "Taboola, Outbrain, MGID" },
      { name: "Programmatic", sub: "The Trade Desk, DV360" },
      { name: "E-mail / SMS", sub: "Disparos: aquisição + ciclo de vida" },
      { name: "WhatsApp", sub: "Alcance direto e opt-in" },
    ],
  },
  tracking: {
    eyebrow: "Tracking",
    headingPlain: "A atribuição é sua,",
    headingItalic: "não das plataformas.",
    sub: "Server-side por padrão. Cada evento dispara duas vezes e é reconciliado na nossa própria camada de atribuição. Sem vazamento de dados, sem caixa preta.",
  },
  reach: {
    eyebrow: "Alcance",
    headingPlain: "LATAM-first.",
    headingItalic: "Global-ready.",
    sub: "Mais de 10 mercados ativos. Mais de 5 em expansão. Uma só camada de operação no continente.",
    stats: {
      active: "Mercados ativos",
      expansion: "Em expansão",
      layer: "Camada de operação",
    },
  },
  edge: {
    eyebrow: "Por que WagerAds",
    heading: "Por que operadores escolhem a WagerAds.",
    items: [
      {
        title: "Ponta a ponta, não em pedaços.",
        body: "Criativo, tracking, tráfego e disparos diretos sob o mesmo teto. Sem malabarismo entre agências. Sem empurrar a culpa. Um único P&L.",
      },
      {
        title: "Fluência em múltiplos mercados.",
        body: "Operamos campanhas reguladas, de mercado cinza e não reguladas. Sabemos onde cada uma vive, e como não queimar contas no processo.",
      },
      {
        title: "Performance é o contrato.",
        body: "Somos medidos por FTDs, ROAS e LTV. Não por impressões. Não por CTR. Não por métrica de vaidade. Se você não ganha, a gente não ganha.",
      },
      {
        title: "DNA LATAM, alcance global.",
        body: "Vivemos na LATAM e conhecemos os meios de pagamento, os movimentos do regulador, o comportamento do jogador e as linhas de compliance em Brasil, México, Colômbia, Peru, Chile e Argentina. Rodamos campanhas no mundo todo com o mesmo playbook.",
      },
    ],
  },
  results: {
    eyebrow: "Resultados",
    headingItalic: "Como isso aparece na prática.",
    stats: {
      managed: "Gerenciados",
      deposits: "Depósitos",
      markets: "Mercados",
      uplift: "Uplift médio de ROAS, primeiros 90 dias",
    },
    cases: [
      {
        tag: "Operador Regulado · Brasil",
        headline: "140K FTDs com mais de 20x de ROAS.",
        body: "100K MAUs retidos no período. Aquisição em diversos canais.",
      },
      {
        tag: "Operador Regulado · América Central",
        headline: "Mais de US$ 1M em depósitos mensais.",
        body: "Ticket médio de depósito de US$ 200 por jogador.",
      },
      {
        tag: "Operador Grey · LATAM",
        headline: "De zero a US$ 2 milhões em depósitos mensais em 90 dias.",
        body: "Lançamento frio em canais pagos e diretos.",
      },
    ],
  },
  process: {
    eyebrow: "Como trabalhamos",
    headingPlain: "Playbook,",
    headingItalic: "não pitch.",
    steps: [
      {
        title: "Auditoria.",
        body: "Auditoria estratégica gratuita de 60 minutos sobre sua mídia paga, tracking e criativo. Você sai com um diagnóstico por escrito, contrate ou não.",
      },
      {
        title: "Estratégia.",
        body: "Plano estratégico de 14 dias. Mix de canais, briefings de criativo, arquitetura de tracking e metas de 90 dias. Pronto para levar ao board.",
      },
      {
        title: "Execução.",
        body: "Lançamos, otimizamos e escalamos. Reporting semanal. Acesso diário via Slack ou WhatsApp ao time de operação. Sem caixa preta.",
      },
      {
        title: "Escala.",
        body: "Com a base no lucro, abrimos novos canais, novos mercados e novos criativos. Sempre empurrando CAC para baixo e LTV para cima.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Vamos conversar",
    headlinePlain: "Pare de contratar agências.",
    headlineItalic: "Contrate media buyers.",
    sub: "Se você é operador de iGaming gastando US$ 500 mil ou mais por mês em mídia paga (ou prestes a estar), a gente precisa conversar.",
    emailLabel: "E-mail",
    whatsappLabel: "WhatsApp",
  },
  form: {
    name: "Nome",
    company: "Empresa",
    email: "E-mail corporativo",
    whatsapp: "WhatsApp / Telegram",
    spend: "Investimento mensal em mídia paga",
    spendTiers: ["< US$ 100k", "US$ 100k a 500k", "US$ 500k a 1M", "US$ 1M+"],
    markets: "Mercados",
    marketsList: [
      "Brasil",
      "México",
      "Colômbia",
      "Peru",
      "Chile",
      "Argentina",
      "Outros LATAM",
      "Global",
    ],
    message: "Mensagem",
    messagePlaceholder: "O que você quer escalar e o que está no caminho?",
    submit: "Solicitar contato →",
    submitting: "Enviando…",
    successEyebrow: "Recebido",
    successHeadline: "Retornamos em até 24 horas.",
    successBody:
      "Se precisar de resposta mais rápida, chame no WhatsApp. O link está no rodapé.",
    errorMessage:
      "Algo deu errado. Tente de novo ou mande e-mail para hello@wagerads.com.",
  },
  footer: {
    taglineLine1: "Mídia de performance para a indústria de iGaming.",
    taglineLine2: "LATAM-first. Global-ready.",
    navigate: "Navegar",
    contact: "Contato",
    follow: "Seguir",
    bookCall: "Solicitar contato",
    privacy: "Privacidade",
    terms: "Termos",
    copyright:
      "© 2026 WagerAds. Todos os direitos reservados. A WagerAds faz parte do NT Capital Group.",
  },
};

const es: typeof en = {
  meta: {
    title:
      "WagerAds · Medios de performance para operadores de iGaming. LATAM-first, global-ready.",
    description:
      "Adquisición end-to-end para la industria del iGaming. Creativo, tracking y medios pagos bajo el mismo techo.",
  },
  nav: {
    work: "Casos",
    approach: "Enfoque",
    channels: "Canales",
    about: "Nosotros",
    cta: "Solicitar contacto",
    language: "Idioma",
  },
  hero: {
    tag: "Medios de performance para iGaming",
    headlinePlain: "Compramos medios para operadores",
    headlineItalic: "que mueven volumen de verdad.",
    sub: "Adquisición end-to-end para la industria del iGaming. Creativo, tracking y medios pagos bajo el mismo techo.",
    ctaPrimary: "Solicitar contacto →",
    ctaSecondary: "Ver resultados ↓",
    stat1Label: "Gestionados en medios pagos",
    stat2Label: "Depósitos generados para operadores",
    stat3Label: "Mercados activados en el mundo",
  },
  services: {
    eyebrow: "Nuestra stack",
    headingPlain: "Creativo, tracking y medios pagos",
    headingItalic: "son un solo problema, no tres.",
    sub: "Corremos el stack completo para que nada se pierda entre equipos.",
    items: [
      {
        title: "Creativo.",
        body: "Anuncios diseñados para conversión en iGaming. Estático, video, UGC, playables. Entregamos más de 50 variaciones por campaña porque gana el mejor creativo, no el mejor targeting.",
      },
      {
        title: "Tracking.",
        body: "Tracking server-side con una capa de contenedor propia. Meta CAPI, TikTok Events API, Kwai Events y postbacks personalizados. La atribución es tuya, no de las plataformas.",
      },
      {
        title: "Tráfico.",
        body: "Ejecución de medios pagos en todos los canales principales. Conocemos las políticas de los mercados regulados y cuidamos las cuentas en los de mercado gris y no regulados.",
      },
      {
        title: "Directo.",
        body: "Envíos de email, SMS y WhatsApp para adquisición e impacto post-registro. Listas frías en depositantes. Nuevos registros en whales. Alcance puro.",
      },
    ],
  },
  channels: {
    eyebrow: "Canales",
    headingPlain: "Un solo stack,",
    headingItalic: "todos los canales.",
    sub: "Todos los canales conectados a una sola capa de atribución. Sin silos, sin doble conteo, sin fugas.",
    items: [
      { name: "Google Ads", sub: "Search, YouTube, PMax" },
      { name: "Meta Ads", sub: "Facebook, Instagram" },
      { name: "TikTok Ads", sub: "In-feed, Spark, Brand" },
      { name: "Kwai Ads", sub: "Medios nativos en LATAM" },
      { name: "Native", sub: "Taboola, Outbrain, MGID" },
      { name: "Programmatic", sub: "The Trade Desk, DV360" },
      { name: "Email / SMS", sub: "Envíos: adquisición + ciclo de vida" },
      { name: "WhatsApp", sub: "Alcance directo y opt-in" },
    ],
  },
  tracking: {
    eyebrow: "Tracking",
    headingPlain: "La atribución es tuya,",
    headingItalic: "no de las plataformas.",
    sub: "Server-side por defecto. Cada evento dispara dos veces y se reconcilia en nuestra propia capa de atribución. Sin fugas de datos, sin caja negra.",
  },
  reach: {
    eyebrow: "Alcance",
    headingPlain: "LATAM-first.",
    headingItalic: "Global-ready.",
    sub: "Más de 10 mercados activos. Más de 5 en expansión. Una sola capa de operación en el continente.",
    stats: {
      active: "Mercados activos",
      expansion: "En expansión",
      layer: "Capa de operación",
    },
  },
  edge: {
    eyebrow: "Por qué WagerAds",
    heading: "Por qué los operadores eligen WagerAds.",
    items: [
      {
        title: "De punta a punta, no por pedazos.",
        body: "Creativo, tracking, tráfico y envíos directos bajo el mismo techo. Sin malabarismos entre agencias. Sin echarse la culpa. Un solo P&L.",
      },
      {
        title: "Fluidez en múltiples mercados.",
        body: "Corremos campañas reguladas, de mercado gris y no reguladas. Sabemos dónde funciona cada una, y cómo no quemar cuentas en el proceso.",
      },
      {
        title: "La performance es el contrato.",
        body: "Nos miden por FTDs, ROAS y LTV. No por impresiones. No por CTR. No por métricas de vanidad. Si tú no ganas, nosotros tampoco.",
      },
      {
        title: "ADN LATAM, alcance global.",
        body: "Vivimos en LATAM y conocemos los medios de pago, los movimientos del regulador, el comportamiento del jugador y las líneas de compliance en Brasil, México, Colombia, Perú, Chile y Argentina. Corremos campañas en el mundo con el mismo playbook.",
      },
    ],
  },
  results: {
    eyebrow: "Resultados",
    headingItalic: "Cómo se ve en la práctica.",
    stats: {
      managed: "Gestionados",
      deposits: "Depósitos",
      markets: "Mercados",
      uplift: "Uplift promedio de ROAS, primeros 90 días",
    },
    cases: [
      {
        tag: "Operador Regulado · Brasil",
        headline: "140K FTDs con ROAS superior a 20x.",
        body: "100K MAUs retenidos en el período. Adquisición multicanal.",
      },
      {
        tag: "Operador Regulado · Centroamérica",
        headline: "Más de US$ 1M en depósitos mensuales.",
        body: "Ticket promedio de US$ 200 por jugador.",
      },
      {
        tag: "Operador Grey · LATAM",
        headline: "De cero a US$ 2 millones en depósitos mensuales en 90 días.",
        body: "Lanzamiento en frío en canales pagos y directos.",
      },
    ],
  },
  process: {
    eyebrow: "Cómo trabajamos",
    headingPlain: "Playbook,",
    headingItalic: "no pitch.",
    steps: [
      {
        title: "Auditoría.",
        body: "Auditoría estratégica gratuita de 60 minutos sobre tus medios pagos, tracking y creativo. Te vas con un diagnóstico por escrito, nos contrates o no.",
      },
      {
        title: "Estrategia.",
        body: "Plan estratégico de 14 días. Mix de canales, briefs creativos, arquitectura de tracking y metas a 90 días. Listo para presentar al board.",
      },
      {
        title: "Ejecución.",
        body: "Lanzamos, optimizamos y escalamos. Reporting semanal. Acceso diario por Slack o WhatsApp al equipo de operaciones. Sin caja negra.",
      },
      {
        title: "Escala.",
        body: "Con la base ya rentable, abrimos nuevos canales, nuevos mercados y nuevos creativos. Siempre empujando el CAC abajo y el LTV arriba.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Hablemos",
    headlinePlain: "Deja de contratar agencias.",
    headlineItalic: "Contrata media buyers.",
    sub: "Si eres un operador de iGaming que gasta US$ 500 mil o más al mes en medios pagos (o está a punto de hacerlo), tenemos que hablar.",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
  },
  form: {
    name: "Nombre",
    company: "Empresa",
    email: "Email corporativo",
    whatsapp: "WhatsApp / Telegram",
    spend: "Inversión mensual en medios pagos",
    spendTiers: ["< US$ 100k", "US$ 100k a 500k", "US$ 500k a 1M", "US$ 1M+"],
    markets: "Mercados",
    marketsList: [
      "Brasil",
      "México",
      "Colombia",
      "Perú",
      "Chile",
      "Argentina",
      "Otros LATAM",
      "Global",
    ],
    message: "Mensaje",
    messagePlaceholder: "¿Qué quieres escalar y qué se interpone en el camino?",
    submit: "Solicitar contacto →",
    submitting: "Enviando…",
    successEyebrow: "Recibido",
    successHeadline: "Te respondemos en menos de 24 horas.",
    successBody:
      "Si necesitas respuesta más rápida, escríbenos por WhatsApp. El link está en el pie.",
    errorMessage:
      "Algo salió mal. Intenta de nuevo o escribe a hello@wagerads.com.",
  },
  footer: {
    taglineLine1: "Medios de performance para la industria del iGaming.",
    taglineLine2: "LATAM-first. Global-ready.",
    navigate: "Navegar",
    contact: "Contacto",
    follow: "Seguir",
    bookCall: "Solicitar contacto",
    privacy: "Privacidad",
    terms: "Términos",
    copyright:
      "© 2026 WagerAds. Todos los derechos reservados. WagerAds forma parte de NT Capital Group.",
  },
};

const dictionaries: Record<Locale, Dict> = { en, pt, es };

export function getDictionary(locale: Locale): Dict {
  return dictionaries[locale];
}
