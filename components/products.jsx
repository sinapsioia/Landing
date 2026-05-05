// PRODUCTS — 6 IA products in bento grid

const PRODUCTS_DATA = [
  {
    id: 'recordatorios', iconName: 'Bell', name: 'Recordatorios',
    tier: 'Básico', tierColor: '#00f2ff',
    desc: 'Tu asistente nunca olvida una cita. Envía recordatorios automáticos por WhatsApp 24h y 2h antes.',
    metric: '−87%', metricLabel: 'no-shows',
    features: ['Reduce no-shows en 87%', 'Recupera hasta $1.2M/mes', 'Tono personalizado', 'Confirmación automática'],
    span: 'col-span-12 md:col-span-6 lg:col-span-4',
  },
  {
    id: 'agendamiento', iconName: 'Calendar', name: 'Agendamiento',
    tier: 'Intermedio', tierColor: '#7c3aed',
    desc: 'Tu agenda se llena sola. Los clientes agendan 24/7 sin que levantes el teléfono.',
    metric: '+35%', metricLabel: 'más citas',
    features: ['+35% más citas agendadas', 'Disponibilidad 24/7', 'Sincroniza Google Calendar', 'Reagenda cancelaciones'],
    span: 'col-span-12 md:col-span-6 lg:col-span-8',
    featured: true,
  },
  {
    id: 'ventas', iconName: 'Sales', name: 'Agente de Ventas',
    tier: 'Avanzado', tierColor: '#ff006e',
    desc: 'Tu mejor vendedor nunca descansa. Cierra ventas, hace upselling y recupera carritos abandonados.',
    metric: '+40%', metricLabel: 'conversión',
    features: ['+40% tasa de conversión', 'Upselling automático', '60% carritos recuperados', 'Seguimiento inteligente'],
    span: 'col-span-12 md:col-span-6 lg:col-span-8',
  },
  {
    id: 'pqr', iconName: 'Chat', name: 'PQR · Soporte',
    tier: 'Intermedio', tierColor: '#7c3aed',
    desc: 'Atiende quejas, preguntas y reclamos en segundos. Tu reputación siempre protegida.',
    metric: '<3s', metricLabel: 'respuesta',
    features: ['Responde en menos de 3s', '85% PQR sin humano', 'Escala casos complejos', 'Mejora tu rating en Google'],
    span: 'col-span-12 md:col-span-6 lg:col-span-4',
  },
  {
    id: 'validaciones', iconName: 'Verified', name: 'Validaciones de Pago',
    tier: 'Básico', tierColor: '#00f2ff',
    desc: 'Cobra a tiempo sin perseguir clientes. Validación automática de pagos y recordatorios de cuotas.',
    metric: '+95%', metricLabel: 'recuperación',
    features: ['Recupera 95% pagos pendientes', '−70% morosidad', 'Integra plataformas de pago', 'Reportes automáticos'],
    span: 'col-span-12 md:col-span-6 lg:col-span-6',
  },
  {
    id: 'cuotas', iconName: 'Chart', name: 'Plan de Cuotas',
    tier: 'Avanzado', tierColor: '#ff006e',
    desc: 'Sistema completo de financiación. Ofrece cuotas, cobra automático y gestiona morosos.',
    metric: '+120%', metricLabel: 'ticket',
    features: ['+120% ticket promedio', 'Aprobación automática', 'Cobro en fecha', 'Refinanciación inteligente'],
    span: 'col-span-12 md:col-span-6 lg:col-span-6',
  },
];

function ProductCard({ p, idx }) {
  const ref = useReveal();
  const cardRef = React.useRef(null);

  // Tilt on mouse move
  function onMove(e) {
    const el = cardRef.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1200px) rotateY(${x*4}deg) rotateX(${-y*4}deg)`;
    el.style.setProperty('--mx', `${(x+0.5)*100}%`);
    el.style.setProperty('--my', `${(y+0.5)*100}%`);
  }
  function onLeave() {
    if (cardRef.current) cardRef.current.style.transform = '';
  }

  return (
    <div ref={ref} className={`reveal ${p.span}`} style={{transitionDelay:`${idx*0.06}s`}}>
      <div ref={cardRef}
        onMouseMove={onMove} onMouseLeave={onLeave}
        className="group relative h-full glass-strong rounded-3xl p-7 sm:p-8 overflow-hidden hover-lift"
        style={{transition:'transform 0.4s cubic-bezier(0.22,1,0.36,1), border-color 0.3s'}}>
        {/* spotlight follow cursor */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{background:`radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), ${p.tierColor}22, transparent 60%)`}}></div>

        <div className="relative">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{background:`${p.tierColor}18`, boxShadow:`inset 0 0 0 1px ${p.tierColor}40, 0 0 24px -8px ${p.tierColor}80`}}>
                {(() => { const I = Icon[p.iconName] || Icon.Sparkles; return <I className="w-6 h-6" color={p.tierColor}/>; })()}
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest" style={{color: p.tierColor}}>{p.tier}</div>
                <h3 className="text-xl font-display font-semibold text-white">{p.name}</h3>
              </div>
            </div>
            {p.featured && (
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/80 px-2 py-1 rounded-full bg-white/10 border border-white/20 whitespace-nowrap">popular</span>
            )}
          </div>

          <p className="text-white/65 text-sm leading-relaxed mb-6 text-pretty">{p.desc}</p>

          <div className="flex flex-col gap-1 mb-6 pb-5 border-b border-white/10">
            <span className="block text-4xl font-display font-semibold tabular text-white leading-none" style={{textShadow:`0 0 24px ${p.tierColor}55`}}>{p.metric}</span>
            <span className="block text-xs text-white/50 font-mono uppercase tracking-widest">{p.metricLabel}</span>
          </div>

          <ul className="space-y-2.5">
            {p.features.map((f,i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-white/75">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke={p.tierColor} strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ProductsHeader() {
  const { t } = useI18n();
  return (
    <SectionHeader
      eyebrow={t('products.eyebrow')}
      title={<>{t('products.title.1')} <span className="gradient-text">{t('products.title.2')}</span> {t('products.title.3')}</>}
      subtitle={t('products.sub')}
    />
  );
}

function Products() {
  return (
    <section id="productos" className="relative py-32 sm:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ProductsHeader/>
        <div className="grid grid-cols-12 gap-5 sm:gap-6">
          {PRODUCTS_DATA.map((p,i) => <ProductCard key={p.id} p={p} idx={i}/>)}
        </div>
      </div>
    </section>
  );
}

window.Products = Products;
window.PRODUCTS_DATA = PRODUCTS_DATA;
