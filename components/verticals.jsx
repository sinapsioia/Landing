// VERTICALS — multi-vertical morph with professional icons

const VERTICALS = [
  { id: 'barberia', nameKey: { es:'Barberías', en:'Barbershops', de:'Barbershops' }, iconName: 'Scissors', accent: '#00f2ff',
    useKey: { es:'Agendamiento + recordatorios. Tu silla siempre llena, sin no-shows.',
              en:'Booking + reminders. Your chair always full, zero no-shows.',
              de:'Buchung + Reminder. Dein Stuhl immer voll, keine No-Shows.' },
    metric: '+35% citas', metricEN:'+35% bookings', metricDE:'+35% Termine',
    sample: { es:'"Agéndame para el martes a las 4pm con Carlos"',
              en:'"Book me for Tuesday at 4pm with Carlos"',
              de:'"Buche mich für Dienstag 16 Uhr bei Carlos"' } },
  { id: 'grooming', nameKey: { es:'Grooming · Pet shop', en:'Grooming · Pet shop', de:'Grooming · Pet shop' }, iconName: 'Paw', accent: '#7c3aed',
    useKey: { es:'Citas, vacunas, recordatorios de baño. Atención cariñosa 24/7.',
              en:'Appointments, vaccines, bath reminders. Caring 24/7 service.',
              de:'Termine, Impfungen, Bade-Reminder. Liebevoll 24/7.' },
    metric: '−87% no-shows', metricEN:'−87% no-shows', metricDE:'−87% No-Shows',
    sample: { es:'"Hola, Luna necesita corte. ¿Tienen cupo el sábado?"',
              en:'"Hi, Luna needs a trim. Any slots Saturday?"',
              de:'"Hallo, Luna braucht einen Schnitt. Samstag frei?"' } },
  { id: 'spa', nameKey: { es:'Spa · Estética', en:'Spa · Aesthetics', de:'Spa · Ästhetik' }, iconName: 'Spa', accent: '#ff006e',
    useKey: { es:'Cotización de servicios, paquetes y planes de cuotas integrados.',
              en:'Service quotes, packages and integrated installment plans.',
              de:'Service-Angebote, Pakete und integrierte Ratenpläne.' },
    metric: '+42% ventas', metricEN:'+42% sales', metricDE:'+42% Umsatz',
    sample: { es:'"Quiero el paquete de masajes. ¿Pagable a 3 cuotas?"',
              en:'"I want the massage package. Can I split in 3?"',
              de:'"Ich möchte das Massage-Paket. In 3 Raten zahlbar?"' } },
  { id: 'ventas', nameKey: { es:'Tiendas online', en:'Online stores', de:'Online-Shops' }, iconName: 'Bag', accent: '#00f2ff',
    useKey: { es:'Agente vendedor que cierra carritos abandonados y hace upsell.',
              en:'AI sales agent that closes abandoned carts and upsells.',
              de:'Verkaufs-Agent, der verlassene Warenkörbe schließt und Upsell macht.' },
    metric: '+40% conversión', metricEN:'+40% conversion', metricDE:'+40% Conversion',
    sample: { es:'"Sí, llévalo. ¿Tienes en talla M?"',
              en:'"Yes, I\'ll take it. Got it in M?"',
              de:'"Ja, ich nehm es. In Größe M da?"' } },
  { id: 'mascotas', nameKey: { es:'Tiendas de mascotas', en:'Pet stores', de:'Tierhandlungen' }, iconName: 'Bone', accent: '#7c3aed',
    useKey: { es:'Pedidos por WhatsApp, recurrencias automáticas, recomendaciones.',
              en:'WhatsApp orders, automatic recurrences, recommendations.',
              de:'WhatsApp-Bestellungen, automatische Wiederholungen, Empfehlungen.' },
    metric: '+58% recompra', metricEN:'+58% repurchase', metricDE:'+58% Wiederkauf',
    sample: { es:'"Mándame el alimento de siempre + un juguete"',
              en:'"Send the usual food + a toy"',
              de:'"Schick das übliche Futter + ein Spielzeug"' } },
  { id: 'musica', nameKey: { es:'Negocios de música', en:'Music shops', de:'Musikgeschäfte' }, iconName: 'Music', accent: '#ff006e',
    useKey: { es:'Reserva de salas, clases, instrumentos. Cotiza y agenda al instante.',
              en:'Room bookings, classes, instruments. Quote and book instantly.',
              de:'Raumbuchung, Kurse, Instrumente. Sofort kalkulieren und buchen.' },
    metric: '+62% reservas', metricEN:'+62% bookings', metricDE:'+62% Buchungen',
    sample: { es:'"¿Cuánto vale alquilar la sala 2 dos horas?"',
              en:'"How much to rent room 2 for two hours?"',
              de:'"Was kostet Raum 2 für zwei Stunden?"' } },
];

function pickLang(field, lang) {
  if (typeof field === 'string') return field;
  return field[lang] || field.es;
}

function VerticalCard({ v, isActive, onClick, lang }) {
  const I = Icon[v.iconName] || Icon.Sparkles;
  const metric = lang === 'en' ? v.metricEN : (lang === 'de' ? v.metricDE : v.metric);
  return (
    <button onClick={onClick}
      className={`group relative w-full text-left rounded-2xl p-5 transition-all duration-500 overflow-hidden
        ${isActive ? 'glass-strong scale-[1.02]' : 'glass hover:bg-white/[0.06]'}`}
      style={isActive ? { boxShadow: `0 0 0 1px ${v.accent}66, 0 16px 60px -20px ${v.accent}66`} : {}}>
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:`${v.accent}18`, boxShadow:`inset 0 0 0 1px ${v.accent}40`}}>
          <I className="w-5 h-5" color={v.accent}/>
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-display font-semibold text-white">{pickLang(v.nameKey, lang)}</div>
          <div className="text-xs font-mono mt-0.5 whitespace-nowrap" style={{color: isActive ? v.accent : 'rgba(255,255,255,0.4)'}}>{metric}</div>
        </div>
        <svg className={`w-4 h-4 transition-transform ${isActive ? 'rotate-90' : ''} text-white/40 flex-shrink-0`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7" strokeLinecap="round"/></svg>
      </div>
    </button>
  );
}

function Verticals() {
  const { t, lang } = useI18n();
  const [active, setActive] = React.useState(0);
  const ref = useReveal();

  React.useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % VERTICALS.length), 4500);
    return () => clearInterval(t);
  }, []);

  const v = VERTICALS[active];
  const I = Icon[v.iconName] || Icon.Sparkles;
  const metric = lang === 'en' ? v.metricEN : (lang === 'de' ? v.metricDE : v.metric);

  return (
    <section id="verticales" className="relative py-32 sm:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow={t('verticals.eyebrow')}
          title={<>{t('verticals.title.1')} <span className="gradient-text">{t('verticals.title.2')}</span></>}
          subtitle={t('verticals.sub')}
        />

        <div ref={ref} className="reveal grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 space-y-3">
            {VERTICALS.map((vv, i) => (
              <VerticalCard key={vv.id} v={vv} isActive={i === active} onClick={() => setActive(i)} lang={lang}/>
            ))}
          </div>

          <div className="lg:col-span-7 relative rounded-3xl glass-strong overflow-hidden min-h-[500px]">
            <div key={v.id} className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-between" style={{animation:'fadeIn 0.6s'}}>
              <div className="absolute -right-20 -top-10 opacity-[0.06] select-none pointer-events-none">
                <I className="w-[400px] h-[400px]" color={v.accent}/>
              </div>
              <div className="absolute inset-0 opacity-30 pointer-events-none" style={{background:`radial-gradient(600px circle at 80% 20%, ${v.accent}33, transparent 60%)`}}></div>

              <div className="relative">
                <div className="text-xs font-mono uppercase tracking-widest mb-4" style={{color: v.accent}}>vertical · {String(active+1).padStart(2,'0')} / {String(VERTICALS.length).padStart(2,'0')}</div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{background:`${v.accent}22`, boxShadow:`inset 0 0 0 1px ${v.accent}66, 0 0 40px -8px ${v.accent}`}}>
                    <I className="w-9 h-9" color={v.accent}/>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-display font-semibold text-white">{pickLang(v.nameKey, lang)}</h3>
                </div>
                <p className="text-lg text-white/70 max-w-md text-pretty leading-relaxed">{pickLang(v.useKey, lang)}</p>
              </div>

              <div className="relative space-y-4">
                <div className="max-w-md">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">{lang==='en'?'real customer types:':lang==='de'?'echter Kunde schreibt:':'cliente real escribe:'}</div>
                  <div className="rounded-2xl rounded-bl-sm px-4 py-3 bg-white/5 border border-white/10 text-white/90 text-sm">
                    {pickLang(v.sample, lang)}
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-xs text-white/50">
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{background:v.accent}}></span>
                    {lang==='en'?'Sinapsio replies in 1.8s':lang==='de'?'Sinapsio antwortet in 1.8s':'Sinapsio responde en 1.8s'}
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="text-3xl font-display font-semibold tabular whitespace-nowrap" style={{color: v.accent}}>{metric}</div>
                  <div className="text-sm text-white/50">{lang==='en'?'avg vertical result':lang==='de'?'\u00d8 Branchenresultat':'resultado promedio del vertical'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes fadeIn { from { opacity:0; transform: translateY(8px);} to {opacity:1; transform: translateY(0);} }`}</style>
    </section>
  );
}

window.Verticals = Verticals;
