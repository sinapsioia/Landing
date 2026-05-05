// i18n + currency — ES / EN / DE with COP / USD / EUR

const I18N = {
  es: {
    // Nav
    'nav.products': 'Productos',
    'nav.verticals': 'Verticales',
    'nav.cases': 'Casos',
    'nav.demo': 'Demo',
    'nav.pricing': 'Precios',
    'nav.faq': 'FAQ',
    'nav.cta': 'WhatsApp',

    // Hero
    'hero.eyebrow': 'Agentes de IA · Activos 24/7',
    'hero.title.1': 'Tu negocio',
    'hero.title.2': 'vendiendo',
    'hero.title.3': 'mientras',
    'hero.title.4': 'duermes.',
    'hero.sub': 'Agentes de IA que <b>agendan citas, cierran ventas y atienden clientes</b> por WhatsApp — para barberías, grooming, tiendas de mascotas, música y más.',
    'hero.cta.primary': 'Activar por WhatsApp',
    'hero.cta.secondary': 'Ver demo en vivo',
    'hero.stats.1': 'conversaciones/día',
    'hero.stats.2': 'tasa de respuesta',
    'hero.stats.3': 'horas ahorradas/mes',

    // Section headers
    'products.eyebrow': '6 productos · paga solo lo que usas',
    'products.title.1': 'Cada agente automatiza una',
    'products.title.2': 'parte distinta',
    'products.title.3': 'de tu negocio.',
    'products.sub': 'Combínalos como Lego. Empieza con uno, escala cuando estés listo.',

    'verticals.eyebrow': 'Multi-vertical',
    'verticals.title.1': 'Da igual qué vendas.',
    'verticals.title.2': 'La IA habla tu idioma.',
    'verticals.sub': 'Entrenamos cada agente con el contexto, tono y casos típicos de tu industria.',

    'cases.eyebrow': 'Casos reales · clientes activos',
    'cases.title.1': 'Negocios que ya',
    'cases.title.2': 'automatizaron con IA',
    'cases.title.3': '.',
    'cases.sub': 'No hablamos de hipótesis. Estos clientes están corriendo Sinapsio en producción hoy.',

    'demo.eyebrow': 'Demo en vivo',
    'demo.title.1': 'Mira cómo responde la IA',
    'demo.title.2': 'en tiempo real.',
    'demo.sub': 'Cambia el escenario y observa cómo el agente cierra ventas, agenda y recuerda — todo por WhatsApp.',

    'roi.eyebrow': 'Calculadora de ROI',
    'roi.title.1': 'Tu negocio está',
    'roi.title.2': 'perdiendo plata',
    'roi.title.3': 'ahora mismo.',
    'roi.sub': 'Mueve los sliders con tus números reales. Te mostramos cuánto recuperarías con Sinapsio.',
    'roi.input.1': 'Citas / ventas al mes',
    'roi.input.2': 'Ticket promedio',
    'roi.input.3': '% no-shows / carritos perdidos hoy',
    'roi.output.title': 'Tu ganancia mensual con Sinapsio',
    'roi.output.lost': 'Pierdes hoy en no-shows / carritos',
    'roi.output.recovered': 'Recuperas con Recordatorios + Validaciones',
    'roi.output.new': 'Generas con Agente de Ventas',
    'roi.output.cost': 'Costo Sinapsio (1 agente)',
    'roi.output.return': 'retorno',
    'roi.output.invested': 'tu inversión',
    'roi.cta': 'Quiero estos resultados',

    'pricing.eyebrow': 'Precios modulares',
    'pricing.title.1': 'Paga solo por',
    'pricing.title.2': 'lo que automatices.',
    'pricing.sub': 'Sin contratos eternos. Sin sorpresas. Cancelas cuando quieras.',
    'pricing.includes': 'Incluye',
    'pricing.permonth': '/ mes por producto',
    'pricing.most': 'más popular',
    'pricing.cta': 'Probar 15 días gratis',
    'pricing.disclaimer': 'Todos los planes incluyen <b>15 días de prueba gratis</b> · Sin tarjeta · Cancelas en 1 clic',

    'tier.basic.tag': 'Automatización esencial',
    'tier.basic.name': 'Básicos',
    'tier.inter.tag': 'Para negocios en crecimiento',
    'tier.inter.name': 'Intermedios',
    'tier.advanced.tag': 'Máxima automatización',
    'tier.advanced.name': 'Avanzados',

    'rewards.eyebrow': 'Promos exclusivas',
    'rewards.title.1': 'Activa hoy.',
    'rewards.title.2': 'Paga menos.',
    'rewards.sub': 'Dos formas de obtener Sinapsio con descuento permanente.',
    'rewards.first.tag': 'Primera compra',
    'rewards.first.title': 'Tu 3er mes gratis',
    'rewards.first.desc': 'Activa cualquier plan hoy y los primeros 3 meses solo pagas 2. Sin letra chica.',
    'rewards.first.cta': 'Activar ahora',
    'rewards.referral.tag': 'Programa de referidos',
    'rewards.referral.title': '1 mes gratis por cada referido',
    'rewards.referral.desc': 'Refiere a un negocio. Cuando active su plan, ambos ganan 1 mes 100% gratis. Sin límite de referidos.',
    'rewards.referral.cta': 'Pedir mi código',
    'rewards.urgency': 'Promo válida hasta agotar 100 cupos del mes',

    'faq.eyebrow': 'Preguntas frecuentes',
    'faq.title.1': 'Todo lo que necesitas saber',
    'faq.title.2': 'antes de empezar.',

    'cta.eyebrow': 'Prueba gratis 15 días · sin tarjeta',
    'cta.title.1': 'Tu próximo cliente',
    'cta.title.2': 'está escribiéndote ahora.',
    'cta.title.3': '¿Quién le va a responder?',
    'cta.sub': 'Activa tu agente de IA en 24h. Sin contratos eternos. Sin tarjeta de crédito.',
    'cta.primary': 'Hablar por WhatsApp',
    'cta.secondary': 'Ver demo primero',
    'cta.foot.1': 'setup en 24h',
    'cta.foot.2': 'cancelas cuando quieras',
    'cta.foot.3': 'soporte humano real',
  },
  en: {
    'nav.products': 'Products',
    'nav.verticals': 'Verticals',
    'nav.cases': 'Cases',
    'nav.demo': 'Demo',
    'nav.pricing': 'Pricing',
    'nav.faq': 'FAQ',
    'nav.cta': 'WhatsApp',

    'hero.eyebrow': 'AI Agents · Live 24/7',
    'hero.title.1': 'Your business',
    'hero.title.2': 'selling',
    'hero.title.3': 'while you',
    'hero.title.4': 'sleep.',
    'hero.sub': 'AI agents that <b>book appointments, close sales and serve customers</b> over WhatsApp — for barbershops, grooming, pet shops, music studios and more.',
    'hero.cta.primary': 'Activate on WhatsApp',
    'hero.cta.secondary': 'Watch live demo',
    'hero.stats.1': 'conversations/day',
    'hero.stats.2': 'response rate',
    'hero.stats.3': 'hours saved/month',

    'products.eyebrow': '6 products · pay only for what you use',
    'products.title.1': 'Each agent automates a',
    'products.title.2': 'different part',
    'products.title.3': 'of your business.',
    'products.sub': 'Mix them like Lego. Start with one, scale when ready.',

    'verticals.eyebrow': 'Multi-vertical',
    'verticals.title.1': 'No matter what you sell.',
    'verticals.title.2': 'The AI speaks your language.',
    'verticals.sub': 'We train each agent with the context, tone and typical cases of your industry.',

    'cases.eyebrow': 'Real cases · live clients',
    'cases.title.1': 'Businesses that already',
    'cases.title.2': 'automated with AI',
    'cases.title.3': '.',
    'cases.sub': 'No hypotheticals. These clients are running Sinapsio in production today.',

    'demo.eyebrow': 'Live demo',
    'demo.title.1': 'See how the AI responds',
    'demo.title.2': 'in real time.',
    'demo.sub': 'Switch scenarios and watch the agent close sales, book and remind — all on WhatsApp.',

    'roi.eyebrow': 'ROI calculator',
    'roi.title.1': 'Your business is',
    'roi.title.2': 'losing money',
    'roi.title.3': 'right now.',
    'roi.sub': 'Move the sliders with your real numbers. We show how much you would recover with Sinapsio.',
    'roi.input.1': 'Appointments / sales per month',
    'roi.input.2': 'Average ticket',
    'roi.input.3': '% no-shows / lost carts today',
    'roi.output.title': 'Your monthly gain with Sinapsio',
    'roi.output.lost': 'You lose today in no-shows / carts',
    'roi.output.recovered': 'Recovered with Reminders + Validations',
    'roi.output.new': 'Generated by Sales Agent',
    'roi.output.cost': 'Sinapsio cost (1 agent)',
    'roi.output.return': 'return',
    'roi.output.invested': 'your investment',
    'roi.cta': 'I want these results',

    'pricing.eyebrow': 'Modular pricing',
    'pricing.title.1': 'Pay only for',
    'pricing.title.2': 'what you automate.',
    'pricing.sub': 'No long-term contracts. No surprises. Cancel anytime.',
    'pricing.includes': 'Includes',
    'pricing.permonth': '/ month per product',
    'pricing.most': 'most popular',
    'pricing.cta': 'Try 15 days free',
    'pricing.disclaimer': 'All plans include <b>15-day free trial</b> · No card · 1-click cancel',

    'tier.basic.tag': 'Essential automation',
    'tier.basic.name': 'Basic',
    'tier.inter.tag': 'For growing businesses',
    'tier.inter.name': 'Intermediate',
    'tier.advanced.tag': 'Maximum automation',
    'tier.advanced.name': 'Advanced',

    'rewards.eyebrow': 'Exclusive perks',
    'rewards.title.1': 'Activate today.',
    'rewards.title.2': 'Pay less.',
    'rewards.sub': 'Two ways to get Sinapsio with permanent discount.',
    'rewards.first.tag': 'First purchase',
    'rewards.first.title': 'Your 3rd month free',
    'rewards.first.desc': 'Activate any plan today and pay only 2 of the first 3 months. No fine print.',
    'rewards.first.cta': 'Activate now',
    'rewards.referral.tag': 'Referral program',
    'rewards.referral.title': '1 month free per referral',
    'rewards.referral.desc': 'Refer a business. When they activate, you both get 1 month 100% free. No referral limit.',
    'rewards.referral.cta': 'Get my code',
    'rewards.urgency': 'Valid until the 100 monthly slots run out',

    'faq.eyebrow': 'Frequently asked',
    'faq.title.1': 'Everything you need to know',
    'faq.title.2': 'before starting.',

    'cta.eyebrow': '15-day free trial · no card',
    'cta.title.1': 'Your next customer',
    'cta.title.2': 'is texting you right now.',
    'cta.title.3': 'Who is going to answer?',
    'cta.sub': 'Activate your AI agent in 24h. No long contracts. No credit card.',
    'cta.primary': 'Talk on WhatsApp',
    'cta.secondary': 'See demo first',
    'cta.foot.1': '24h setup',
    'cta.foot.2': 'cancel anytime',
    'cta.foot.3': 'real human support',
  },
  de: {
    'nav.products': 'Produkte',
    'nav.verticals': 'Branchen',
    'nav.cases': 'Cases',
    'nav.demo': 'Demo',
    'nav.pricing': 'Preise',
    'nav.faq': 'FAQ',
    'nav.cta': 'WhatsApp',

    'hero.eyebrow': 'KI-Agenten · 24/7 aktiv',
    'hero.title.1': 'Dein Geschäft',
    'hero.title.2': 'verkauft,',
    'hero.title.3': 'während du',
    'hero.title.4': 'schläfst.',
    'hero.sub': 'KI-Agenten, die <b>Termine buchen, Verkäufe abschließen und Kunden betreuen</b> per WhatsApp — für Barbershops, Grooming, Tierhandel, Musikgeschäfte und mehr.',
    'hero.cta.primary': 'Per WhatsApp aktivieren',
    'hero.cta.secondary': 'Live-Demo ansehen',
    'hero.stats.1': 'Gespräche/Tag',
    'hero.stats.2': 'Antwortrate',
    'hero.stats.3': 'Stunden gespart/Monat',

    'products.eyebrow': '6 Produkte · Du zahlst nur, was du nutzt',
    'products.title.1': 'Jeder Agent automatisiert',
    'products.title.2': 'einen anderen Bereich',
    'products.title.3': 'deines Geschäfts.',
    'products.sub': 'Kombiniere wie Lego. Start mit einem, skaliere später.',

    'verticals.eyebrow': 'Multi-Branchen',
    'verticals.title.1': 'Egal was du verkaufst.',
    'verticals.title.2': 'Die KI spricht deine Sprache.',
    'verticals.sub': 'Wir trainieren jeden Agenten mit dem Kontext, Ton und typischen Fällen deiner Branche.',

    'cases.eyebrow': 'Echte Cases · aktive Kunden',
    'cases.title.1': 'Unternehmen, die bereits',
    'cases.title.2': 'mit KI automatisiert haben',
    'cases.title.3': '.',
    'cases.sub': 'Keine Hypothesen. Diese Kunden nutzen Sinapsio heute in Produktion.',

    'demo.eyebrow': 'Live-Demo',
    'demo.title.1': 'Sieh, wie die KI antwortet',
    'demo.title.2': 'in Echtzeit.',
    'demo.sub': 'Wechsle das Szenario und beobachte, wie der Agent verkauft, bucht und erinnert — alles per WhatsApp.',

    'roi.eyebrow': 'ROI-Rechner',
    'roi.title.1': 'Dein Geschäft',
    'roi.title.2': 'verliert gerade Geld',
    'roi.title.3': '.',
    'roi.sub': 'Bewege die Slider mit deinen Zahlen. Wir zeigen, was du mit Sinapsio zurückgewinnen würdest.',
    'roi.input.1': 'Termine / Verkäufe pro Monat',
    'roi.input.2': 'Durchschnittlicher Ticket',
    'roi.input.3': '% No-Shows / verlorene Warenkörbe heute',
    'roi.output.title': 'Dein monatlicher Gewinn mit Sinapsio',
    'roi.output.lost': 'Verlust heute durch No-Shows / Warenkörbe',
    'roi.output.recovered': 'Zurückgewonnen mit Reminders + Validations',
    'roi.output.new': 'Generiert durch Sales-Agent',
    'roi.output.cost': 'Sinapsio-Kosten (1 Agent)',
    'roi.output.return': 'Rendite',
    'roi.output.invested': 'deine Investition',
    'roi.cta': 'Diese Ergebnisse will ich',

    'pricing.eyebrow': 'Modulare Preise',
    'pricing.title.1': 'Zahle nur für,',
    'pricing.title.2': 'was du automatisierst.',
    'pricing.sub': 'Keine langen Verträge. Keine Überraschungen. Jederzeit kündbar.',
    'pricing.includes': 'Beinhaltet',
    'pricing.permonth': '/ Monat pro Produkt',
    'pricing.most': 'beliebt',
    'pricing.cta': '15 Tage gratis testen',
    'pricing.disclaimer': 'Alle Pläne inkl. <b>15 Tage gratis</b> · Keine Karte · 1-Klick kündigen',

    'tier.basic.tag': 'Essenzielle Automatisierung',
    'tier.basic.name': 'Basis',
    'tier.inter.tag': 'Für wachsende Unternehmen',
    'tier.inter.name': 'Pro',
    'tier.advanced.tag': 'Maximale Automatisierung',
    'tier.advanced.name': 'Enterprise',

    'rewards.eyebrow': 'Exklusive Vorteile',
    'rewards.title.1': 'Heute aktivieren.',
    'rewards.title.2': 'Weniger zahlen.',
    'rewards.sub': 'Zwei Wege, Sinapsio mit dauerhaftem Rabatt zu bekommen.',
    'rewards.first.tag': 'Erstkauf',
    'rewards.first.title': '3. Monat geschenkt',
    'rewards.first.desc': 'Aktiviere heute einen Plan und zahle nur 2 der ersten 3 Monate. Kein Kleingedrucktes.',
    'rewards.first.cta': 'Jetzt aktivieren',
    'rewards.referral.tag': 'Empfehlungsprogramm',
    'rewards.referral.title': '1 Monat gratis pro Empfehlung',
    'rewards.referral.desc': 'Empfehle ein Geschäft. Wenn es aktiviert, bekommt ihr beide 1 Monat 100% gratis. Unbegrenzt.',
    'rewards.referral.cta': 'Code holen',
    'rewards.urgency': 'Gültig bis 100 monatliche Plätze vergeben sind',

    'faq.eyebrow': 'Häufig gestellte Fragen',
    'faq.title.1': 'Alles was du wissen musst',
    'faq.title.2': 'bevor du startest.',

    'cta.eyebrow': '15 Tage gratis · keine Karte',
    'cta.title.1': 'Dein nächster Kunde',
    'cta.title.2': 'schreibt dir gerade.',
    'cta.title.3': 'Wer wird antworten?',
    'cta.sub': 'Aktiviere deinen KI-Agenten in 24h. Keine Verträge. Keine Kreditkarte.',
    'cta.primary': 'Auf WhatsApp schreiben',
    'cta.secondary': 'Erst Demo ansehen',
    'cta.foot.1': '24h Setup',
    'cta.foot.2': 'jederzeit kündbar',
    'cta.foot.3': 'echter Human-Support',
  },
};

const LANGS = [
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'de', label: 'DE', name: 'Deutsch' },
];

const CURRENCIES = {
  COP: { code: 'COP', symbol: '$', name: 'COP', factor: 1, locale: 'es-CO' },
  USD: { code: 'USD', symbol: '$', name: 'USD', factor: 1/4000, locale: 'en-US' },
  EUR: { code: 'EUR', symbol: '€', name: 'EUR', factor: 1/4400, locale: 'de-DE' },
};

const I18nContext = React.createContext({ lang: 'es', t: (k) => k, currency: 'COP', fmt: (n) => n });

function I18nProvider({ children }) {
  const [lang, setLang] = React.useState(() => localStorage.getItem('sinapsio-lang') || 'es');
  const [currency, setCurrency] = React.useState(() => localStorage.getItem('sinapsio-currency') || 'COP');

  React.useEffect(() => { localStorage.setItem('sinapsio-lang', lang); document.documentElement.lang = lang; }, [lang]);
  React.useEffect(() => { localStorage.setItem('sinapsio-currency', currency); }, [currency]);

  const t = React.useCallback((key, fallback) => {
    const dict = I18N[lang] || I18N.es;
    return dict[key] !== undefined ? dict[key] : (fallback !== undefined ? fallback : (I18N.es[key] || key));
  }, [lang]);

  const fmt = React.useCallback((n) => {
    const c = CURRENCIES[currency];
    const v = Math.round(n * c.factor);
    if (currency === 'COP') return '$' + v.toLocaleString('es-CO');
    if (currency === 'USD') return '$' + v.toLocaleString('en-US');
    return v.toLocaleString('de-DE') + ' €';
  }, [currency]);

  const value = { lang, setLang, currency, setCurrency, t, fmt };
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

function useI18n() { return React.useContext(I18nContext); }

// Helper for HTML strings
function THTML({ k }) {
  const { t } = useI18n();
  return <span dangerouslySetInnerHTML={{ __html: t(k) }}/>;
}

Object.assign(window, { I18N, LANGS, CURRENCIES, I18nContext, I18nProvider, useI18n, THTML });
