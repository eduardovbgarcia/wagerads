import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Channels } from "@/components/Channels";
import { Edge } from "@/components/Edge";
import { Tracking } from "@/components/Tracking";
import { Reach } from "@/components/Reach";
import { Results } from "@/components/Results";
import { Process } from "@/components/Process";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default function Home({ params }: { params: { locale: string } }) {
  if (!locales.includes(params.locale as Locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  return (
    <main className="min-h-screen bg-navy-900 text-cream">
      <Nav dict={dict.nav} locale={locale} />
      <Hero dict={dict.hero} />
      <Services dict={dict.services} />
      <Channels dict={dict.channels} />
      <Edge dict={dict.edge} />
      <Tracking dict={dict.tracking} />
      <Reach dict={dict.reach} />
      <Results dict={dict.results} />
      <Process dict={dict.process} />
      <FinalCTA dict={dict.finalCta} form={dict.form} />
      <Footer dict={dict.footer} nav={dict.nav} />
    </main>
  );
}
