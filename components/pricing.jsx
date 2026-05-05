// PRICING — modular tiers

const TIERS = [
  {
    id: 'basico', name: 'Básicos', tagline: 'Automatización esencial',
    price: 150000, color: '#00f2ff',
    products: ['Recordatorios', 'Validaciones de Pago'],
    perks: ['1 número WhatsApp', 'Hasta 1.000 conversaciones/mes', 'Soporte email', 'Setup en 48h'],
  },
  {
    id: 'inter', name: 'Intermedios', tagline: 'Para negocios en crecimiento',
    price: 300000, color: '#7c3aed', featured: true,
    products: ['Agendamiento', 'PQR · Soporte', 'Todo lo de Básicos'],
    perks: ['1 número WhatsApp', 'Hasta 5.000 conversaciones/mes', 'Soporte WhatsApp prioritario', 'Setup en 24h', 'Dashboard de métricas'],
  },
  {
    id: 'avanz', name: 'Avanzados', tagline: 'Máxima automatización',
    price: 500000, color: '#ff006e',
    products: ['Agente de Ventas', 'Plan de Cuotas', 'Todo lo de Intermedios'],
    perks: ['Múltiples números', 'Conversaciones ilimitadas', 'Asesor dedicado', 'Setup mismo día', 'API + integraciones', 'Reportes a medida'],
  },
];

function Pricing() {
  return (
    <section id="precios" className="relative py-32 sm:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Precios modulares"
          title={<>Paga solo por <span className="gradient-text">lo que automatices.</span></>}
          subtitle="Sin contratos eternos. Sin sorpresas. Cancelas cuando quieras."
        />
        <div className="grid lg:grid-cols-3 gap-6">
          {TIERS.map((t,i) => <TierCard key={t.id} t={t} idx={i}/>)}
        </div>
        <div className="mt-12 text-center text-sm text-white/50">
          Todos los planes incluyen <span className="text-white">15 días de prueba gratis</span> · Sin tarjeta · Cancelas en 1 clic
        </div>
      </div>
    </section>
  );
}

function TierCard({ t, idx }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={{transitionDelay:`${idx*0.1}s`}}>
      <div className={`relative h-full rounded-3xl p-8 overflow-hidden hover-lift ${t.featured ? 'glass-strong' : 'glass'}`}
        style={t.featured ? { boxShadow: `0 0 0 1px ${t.color}55, 0 30px 80px -20px ${t.color}55`} : {}}>
        {t.featured && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest text-white" style={{background: `linear-gradient(135deg,${t.color},#00f2ff)`}}>más popular</div>
          </div>
        )}
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-30" style={{background:t.color}}></div>

        <div className="relative">
          <div className="text-xs font-mono uppercase tracking-widest mb-2" style={{color:t.color}}>{t.tagline}</div>
          <h3 className="text-3xl font-display font-semibold text-white mb-1">{t.name}</h3>
          <div className="flex items-baseline gap-2 mt-6">
            <span className="text-5xl font-display font-semibold tabular text-white">${t.price.toLocaleString('es-CO')}</span>
            <span className="text-white/50 text-sm">/ mes por producto</span>
          </div>

          <div className="mt-8 mb-6">
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3">incluye</div>
            <ul className="space-y-2.5">
              {t.products.map((p,i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-white">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke={t.color} strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round"/></svg>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 mb-8">
            <ul className="space-y-2">
              {t.perks.map((p,i) => (
                <li key={i} className="text-xs text-white/60">— {p}</li>
              ))}
            </ul>
          </div>

          <a href={waLink(`Hola, quiero el plan ${t.name}`)} target="_blank" rel="noopener" onClick={(e) => { e.preventDefault(); openLeadModal('pricing-' + t.id); }}
            className={t.featured ? 'btn-primary w-full inline-flex items-center justify-center gap-2' : 'btn-ghost w-full inline-flex items-center justify-center gap-2'}>
            Probar 15 días gratis →
          </a>
        </div>
      </div>
    </div>
  );
}

window.Pricing = Pricing;
