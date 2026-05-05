// CASES — 4 real client cases with industry-specific animations
// Rocko & Macka (grooming), Totem (luxury pet), Copacol (ferreterías + dashboard), Turntable (music studios)

const CASES_DATA = [
  {
    id: 'rocko',
    brand: 'Rocko & Macka',
    logo: 'assets/rocko-macka-logo.png',
    vertical: 'Grooming · Pet Shop',
    accent: '#00f2ff',
    product: 'Agente WhatsApp + Agendamiento',
    summary: 'Pasaron de perder citas por no contestar a tener una agenda llena 24/7 — incluso sábados a medianoche.',
    quote: 'Dejé de perder clientes por no responder rápido. Ahora la IA agenda mientras yo estoy cortando pelo.',
    metrics: [
      { v: '+47%', l: 'citas/mes' },
      { v: '−92%', l: 'no-shows' },
      { v: '24/7', l: 'atención' },
    ],
    visual: 'calendar', // animation type
  },
  {
    id: 'totem',
    brand: 'Totem · Luxury Pet',
    logo: 'assets/totem-logo.png',
    vertical: 'Tienda de mascotas premium',
    accent: '#7c3aed',
    product: 'Agente vendedor end-to-end',
    summary: 'Sinapsio recibe el lead, asesora, recomienda producto y cierra la venta — sin intervención humana.',
    quote: 'Es como tener un vendedor estrella que nunca duerme. Cierra ventas mientras nosotros dormimos.',
    metrics: [
      { v: '+58%', l: 'conversión' },
      { v: '24/7', l: 'cierre de ventas' },
      { v: '3.2×', l: 'ticket promedio' },
    ],
    visual: 'cart',
  },
  {
    id: 'copacol',
    brand: 'COPACOL',
    logo: 'assets/copacol-logo.png',
    vertical: 'Distribuidor de ferreterías',
    accent: '#00f2ff',
    product: 'Bot de Cartera + Dashboard de métricas',
    summary: 'Bot de WhatsApp que contacta automáticamente a clientes morosos + dashboard ejecutivo de cartera en tiempo real.',
    quote: 'Recuperamos cartera vencida sin contratar más cobradores. El dashboard nos muestra todo lo que antes era invisible.',
    metrics: [
      { v: '−68%', l: 'cartera vencida' },
      { v: '+3.4×', l: 'recuperación/mes' },
      { v: 'Real-time', l: 'dashboard' },
    ],
    visual: 'dashboard',
  },
  {
    id: 'turntable',
    brand: 'Turntable',
    logo: 'assets/turntable-logo.png',
    vertical: 'Salas de estudio musical',
    accent: '#ff006e',
    product: 'Bot de reservas + Agenda de salas',
    summary: 'DJs reservan salas por WhatsApp en segundos. La IA chequea disponibilidad, cobra y envía confirmación.',
    quote: 'Antes nos tocaba responder cada DM. Ahora los DJs reservan solos, pagan y llegan listos a mezclar.',
    metrics: [
      { v: '+78%', l: 'ocupación' },
      { v: '24/7', l: 'reservas' },
      { v: '−95%', l: 'tiempo gestión' },
    ],
    visual: 'turntable',
  },
];

// ─── Industry-specific visual animations ───

function CalendarVisual({ accent }) {
  const [filled, setFilled] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setFilled(f => (f + 1) % 22), 350);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="grid grid-cols-7 gap-1.5 p-4">
      {Array.from({length: 21}).map((_, i) => {
        const isFilled = i < filled;
        return (
          <div key={i} className={`aspect-square rounded-md flex items-center justify-center text-[10px] font-mono transition-all duration-500
            ${isFilled ? 'text-white' : 'text-white/30 bg-white/5'}`}
            style={isFilled ? { background: `linear-gradient(135deg, ${accent}40, ${accent}20)`, boxShadow: `0 0 12px ${accent}55`, border: `1px solid ${accent}80` } : {}}>
            {i + 1}
          </div>
        );
      })}
    </div>
  );
}

function CartVisual({ accent }) {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    const products = ['Collar Premium', 'Correa juego', 'Cama orgánica', 'Snacks BIO', 'Juguete eco'];
    let i = 0;
    const t = setInterval(() => {
      setItems(prev => prev.length >= 4 ? [products[i % products.length]] : [...prev, products[i % products.length]]);
      i++;
    }, 1100);
    return () => clearInterval(t);
  }, []);
  const total = items.length * 189000;
  return (
    <div className="p-6 space-y-2">
      <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3">carrito en tiempo real</div>
      {items.map((it, i) => (
        <div key={i} className="flex items-center justify-between rounded-lg px-3 py-2 bg-white/5 border border-white/10 text-sm" style={{animation:'slideInR 0.5s'}}>
          <span className="text-white/80">{it}</span>
          <span className="font-mono tabular text-xs" style={{color: accent}}>+$189K</span>
        </div>
      ))}
      <div className="pt-3 border-t border-white/10 flex items-baseline justify-between">
        <span className="text-xs text-white/50">Total</span>
        <span className="text-2xl font-display font-semibold tabular text-white">${(total/1000).toFixed(0)}K</span>
      </div>
      <style>{`@keyframes slideInR { from { transform: translateX(20px); opacity:0; } to { transform: translateX(0); opacity:1;} }`}</style>
    </div>
  );
}

function DashboardVisual({ accent }) {
  const bars = React.useMemo(() => Array.from({length: 12}).map(() => 30 + Math.random() * 70), []);
  const [pulse, setPulse] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setPulse(p => p + 1), 800);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">cartera · live</div>
        <div className="flex items-center gap-1.5 text-[10px] text-cyan-300">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse"></span>
          en vivo
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="rounded-lg bg-white/5 border border-white/10 p-3">
          <div className="text-[10px] text-white/40 font-mono">recuperado hoy</div>
          <div className="text-lg font-display font-semibold tabular" style={{color:accent}}>$12.4M</div>
        </div>
        <div className="rounded-lg bg-white/5 border border-white/10 p-3">
          <div className="text-[10px] text-white/40 font-mono">contactos / día</div>
          <div className="text-lg font-display font-semibold tabular text-white">847</div>
        </div>
      </div>
      <div className="h-24 flex items-end gap-1.5">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t-sm transition-all duration-700"
            style={{
              height: `${h + (Math.sin((pulse + i) * 0.6) * 8)}%`,
              background: `linear-gradient(180deg, ${accent}, ${accent}33)`,
              boxShadow: `0 0 8px ${accent}55`,
            }}></div>
        ))}
      </div>
      <div className="text-[10px] text-white/40 font-mono mt-2">recuperación · últimos 12 meses</div>
    </div>
  );
}

function TurntableVisual({ accent }) {
  const [angle, setAngle] = React.useState(0);
  React.useEffect(() => {
    let raf;
    let last = performance.now();
    function tick(now) {
      setAngle(a => a + (now - last) * 0.06);
      last = now;
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <div className="p-6 flex flex-col items-center justify-center h-full">
      <div className="relative w-44 h-44">
        {/* outer ring */}
        <div className="absolute inset-0 rounded-full" style={{background: `radial-gradient(circle, transparent 35%, ${accent}22 36%, transparent 38%, ${accent}33 60%, transparent 62%)`}}></div>
        {/* vinyl */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-zinc-900 to-black border-2 border-white/10"
          style={{transform:`rotate(${angle}deg)`, boxShadow: `0 0 40px ${accent}44, inset 0 0 40px rgba(0,0,0,0.8)`}}>
          {/* grooves */}
          <div className="absolute inset-3 rounded-full border border-white/5"></div>
          <div className="absolute inset-6 rounded-full border border-white/5"></div>
          <div className="absolute inset-9 rounded-full border border-white/5"></div>
          {/* label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{background: `linear-gradient(135deg, ${accent}, ${accent}88)`}}>
              <div className="w-2 h-2 rounded-full bg-black"></div>
            </div>
          </div>
        </div>
        {/* needle */}
        <div className="absolute -top-2 right-2 w-1 h-20 origin-top rotate-12" style={{background:'linear-gradient(180deg, #888, transparent)'}}></div>
      </div>
      <div className="mt-6 text-center space-y-1">
        <div className="text-xs font-mono uppercase tracking-widest" style={{color:accent}}>● now playing</div>
        <div className="text-sm font-display font-medium text-white">Sala 2 · 14:00–18:00</div>
        <div className="text-xs text-white/50">DJ Aurora · reservó por WA</div>
      </div>
    </div>
  );
}

function CaseVisual({ visual, accent }) {
  if (visual === 'calendar') return <CalendarVisual accent={accent}/>;
  if (visual === 'cart') return <CartVisual accent={accent}/>;
  if (visual === 'dashboard') return <DashboardVisual accent={accent}/>;
  if (visual === 'turntable') return <TurntableVisual accent={accent}/>;
  return null;
}

function CaseCard({ c, idx }) {
  const ref = useReveal();
  const reverse = idx % 2 === 1;
  return (
    <div ref={ref} className={`reveal relative rounded-3xl glass-strong overflow-hidden`} style={{transitionDelay:`${idx*0.08}s`}}>
      <div className="absolute inset-0 opacity-50 pointer-events-none" style={{background:`radial-gradient(800px circle at ${reverse ? '90%' : '10%'} 0%, ${c.accent}22, transparent 55%)`}}></div>

      <div className={`relative grid lg:grid-cols-12 gap-0 items-stretch min-h-[420px]`}>
        {/* visual side */}
        <div className={`lg:col-span-5 relative border-b lg:border-b-0 ${reverse ? 'lg:order-2 lg:border-l' : 'lg:border-r'} border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent flex items-center justify-center`}>
          <CaseVisual visual={c.visual} accent={c.accent}/>
        </div>

        {/* content */}
        <div className={`lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between gap-6 ${reverse ? 'lg:order-1' : ''}`}>
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2 overflow-hidden">
                <img src={c.logo} alt={c.brand} className="w-full h-full object-contain"/>
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-widest" style={{color:c.accent}}>{c.vertical}</div>
                <div className="text-lg font-display font-semibold text-white">{c.brand}</div>
              </div>
            </div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/50">{c.product}</div>
            <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-tight text-balance leading-tight">{c.summary}</h3>
            <blockquote className="relative pl-5 border-l-2 text-white/70 italic text-base text-pretty" style={{borderColor:c.accent}}>
              "{c.quote}"
            </blockquote>
          </div>
          <div className="grid grid-cols-3 gap-6 pt-5 border-t border-white/10">
            {c.metrics.map((m,i) => (
              <div key={i}>
                <div className="text-2xl sm:text-3xl font-display font-semibold tabular" style={{color:c.accent, textShadow:`0 0 20px ${c.accent}55`}}>{m.v}</div>
                <div className="text-[11px] text-white/50 mt-1">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Cases() {
  return (
    <section id="casos" className="relative py-32 sm:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Casos reales · clientes activos"
          title={<>Negocios que ya <span className="gradient-text">automatizaron con IA</span>.</>}
          subtitle="No son hipótesis ni demos. Estos clientes están corriendo Sinapsio en producción hoy."
        />
        <div className="space-y-8">
          {CASES_DATA.map((c,i) => <CaseCard key={c.id} c={c} idx={i}/>)}
        </div>
      </div>
    </section>
  );
}

window.Cases = Cases;
