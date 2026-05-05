// ROI calculator + Pricing modular

function ROI() {
  const [appts, setAppts] = React.useState(120);
  const [ticket, setTicket] = React.useState(45000);
  const [noshow, setNoshow] = React.useState(20);
  const ref = useReveal();

  const lostNow = Math.round(appts * (noshow/100) * ticket);
  const recoveredCitas = Math.round(lostNow * 0.87);
  const newCitas = Math.round(appts * 0.35 * ticket);
  const total = recoveredCitas + newCitas;
  const cost = 300000;
  const roi = Math.round((total / cost) * 100);

  function fmt(n) { return '$' + n.toLocaleString('es-CO'); }

  return (
    <section id="roi" className="relative py-32 sm:py-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Calculadora de ROI"
          title={<>Tu negocio está <span className="gradient-text">perdiendo plata</span> ahora mismo.</>}
          subtitle="Mueve los sliders con tus números reales. Te mostramos cuánto recuperarías con Sinapsio."
        />

        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="glass-strong rounded-3xl p-8 space-y-8">
            <SliderControl label="Citas / ventas al mes" value={appts} setValue={setAppts} min={10} max={1000} step={10} suffix="" />
            <SliderControl label="Ticket promedio (COP)" value={ticket} setValue={setTicket} min={10000} max={500000} step={5000} suffix="$" formatter={fmt}/>
            <SliderControl label="% no-shows / carritos perdidos hoy" value={noshow} setValue={setNoshow} min={0} max={50} step={1} suffix="%" />
          </div>

          {/* Output */}
          <div className="glass-strong rounded-3xl p-8 relative overflow-hidden" style={{boxShadow:'0 30px 80px -20px rgba(0,242,255,0.3)'}}>
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-cyan-500/20 blur-3xl"></div>
            <div className="relative space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-cyan-300">tu ganancia mensual con sinapsio</div>
              <div className="text-5xl sm:text-6xl font-display font-semibold tabular gradient-text leading-none">
                {fmt(total)}
              </div>
              <div className="space-y-3 pt-4 border-t border-white/10">
                <Row label="Pierdes hoy en no-shows / carritos" value={fmt(lostNow)} muted/>
                <Row label="Recuperas con Recordatorios + Validaciones" value={'+ ' + fmt(recoveredCitas)} pos/>
                <Row label="Generas con Agente de Ventas" value={'+ ' + fmt(newCitas)} pos/>
                <Row label="Costo Sinapsio (1 agente)" value={'− ' + fmt(cost)} neg/>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-baseline gap-3">
                <div className="text-xs font-mono uppercase tracking-widest text-white/50">retorno</div>
                <div className="text-3xl font-display font-semibold text-white tabular">{roi}<span className="text-cyan-300">×</span></div>
                <div className="text-sm text-white/50">tu inversión</div>
              </div>
              <a href={waLink('Hola, hice la calculadora de ROI y quiero activar Sinapsio')} target="_blank" rel="noopener" onClick={(e) => { e.preventDefault(); openLeadModal('roi'); }} className="btn-primary w-full inline-flex items-center justify-center gap-2 mt-2">
                Quiero estos resultados →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SliderControl({ label, value, setValue, min, max, step, suffix, formatter }) {
  const display = formatter ? formatter(value) : `${value}${suffix||''}`;
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <label className="text-sm text-white/70">{label}</label>
        <span className="text-2xl font-display font-semibold tabular text-white">{display}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="w-full accent-cyan-400 h-2 bg-white/10 rounded-full appearance-none cursor-pointer slider-cyan"/>
      <style>{`
        .slider-cyan::-webkit-slider-thumb { -webkit-appearance:none; width:20px; height:20px; border-radius:50%; background:linear-gradient(135deg,#00f2ff,#7c3aed); box-shadow:0 0 0 4px rgba(0,242,255,0.15), 0 0 16px rgba(0,242,255,0.5); cursor:pointer;}
        .slider-cyan::-moz-range-thumb { width:20px; height:20px; border:none; border-radius:50%; background:linear-gradient(135deg,#00f2ff,#7c3aed); box-shadow:0 0 0 4px rgba(0,242,255,0.15);}
      `}</style>
    </div>
  );
}

function Row({ label, value, muted, pos, neg }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className={muted ? 'text-white/40' : 'text-white/70'}>{label}</span>
      <span className={`font-mono tabular ${pos ? 'text-cyan-300' : neg ? 'text-pink-400' : 'text-white/50'}`}>{value}</span>
    </div>
  );
}

window.ROI = ROI;
