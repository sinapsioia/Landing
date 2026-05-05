// HERO — neural brain PNG with 6 product nodes orbiting

const PRODUCT_NODES_DATA = () => [
  { id: 'recordatorios', labelKey: 'product.recordatorios', icon: 'Bell',     angle: -90, color: '#00f2ff' },
  { id: 'agendamiento',  labelKey: 'product.agendamiento',  icon: 'Calendar', angle: -30, color: '#7c3aed' },
  { id: 'ventas',        labelKey: 'product.ventas',        icon: 'Sales',    angle:  30, color: '#ff006e' },
  { id: 'pqr',           labelKey: 'product.pqr',           icon: 'Chat',     angle:  90, color: '#00f2ff' },
  { id: 'cuotas',        labelKey: 'product.cuotas',        icon: 'Chart',    angle: 150, color: '#7c3aed' },
  { id: 'validaciones',  labelKey: 'product.validaciones',  icon: 'Verified', angle: 210, color: '#ff006e' },
];

// Product labels per language (kept here so node labels are short)
const PRODUCT_LABELS = {
  es: { recordatorios:'Recordatorios', agendamiento:'Agendamiento', ventas:'Ventas IA',  pqr:'PQR · Soporte', cuotas:'Plan de Cuotas', validaciones:'Validaciones' },
  en: { recordatorios:'Reminders',     agendamiento:'Booking',      ventas:'AI Sales',   pqr:'Support · PQR', cuotas:'Installments',   validaciones:'Validations' },
  de: { recordatorios:'Reminders',     agendamiento:'Buchungen',    ventas:'KI-Verkauf', pqr:'Support · PQR', cuotas:'Ratenpläne',      validaciones:'Validierung' },
};

function HeroBrain() {
  const { lang } = useI18n();
  const [active, setActive] = React.useState(0);
  const NODES = PRODUCT_NODES_DATA();

  React.useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % NODES.length), 2200);
    return () => clearInterval(t);
  }, []);

  const R = 200;

  return (
    <div className="relative w-full aspect-square max-w-[600px] mx-auto float">
      {/* outer pulse rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[55%] h-[55%] rounded-full border border-cyan-300/15 pulse-ring"></div>
        <div className="absolute w-[78%] h-[78%] rounded-full border border-violet-500/12 pulse-ring" style={{animationDelay:'0.8s'}}></div>
        <div className="absolute w-[100%] h-[100%] rounded-full border border-pink-500/8 pulse-ring" style={{animationDelay:'1.6s'}}></div>
      </div>

      {/* Central brain — REAL Sinapsio brain PNG */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          {/* glow halo */}
          <div className="absolute inset-0 rounded-full blur-3xl"
            style={{background:'radial-gradient(circle, rgba(0,242,255,0.45) 0%, rgba(124,58,237,0.4) 40%, rgba(255,0,110,0.2) 70%, transparent 100%)', transform:'scale(1.4)'}}></div>
          <img src="assets/sinapsio-brain.png" alt="Sinapsio brain"
            className="relative w-56 h-56 lg:w-64 lg:h-64 object-contain"
            style={{
              filter: 'drop-shadow(0 0 40px rgba(0,242,255,0.55)) drop-shadow(0 0 24px rgba(124,58,237,0.45))',
              animation: 'gentle-rotate 60s linear infinite',
            }}/>
        </div>
      </div>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="-300 -300 600 600">
        {NODES.map((p, i) => {
          const rad = (p.angle * Math.PI) / 180;
          const x = Math.cos(rad) * R;
          const y = Math.sin(rad) * R;
          const isActive = i === active;
          return (
            <g key={p.id}>
              <line x1="0" y1="0" x2={x} y2={y}
                stroke={isActive ? p.color : 'rgba(255,255,255,0.06)'}
                strokeWidth={isActive ? 1.4 : 0.6}
                strokeDasharray={isActive ? '0' : '4 4'}
                style={{transition:'stroke 0.6s, stroke-width 0.6s'}} />
              {isActive && (
                <>
                  <circle r="3.5" fill={p.color}>
                    <animateMotion dur="1.6s" repeatCount="indefinite" path={`M0 0 L ${x} ${y}`} />
                    <animate attributeName="opacity" values="0;1;0" dur="1.6s" repeatCount="indefinite" />
                  </circle>
                </>
              )}
            </g>
          );
        })}
      </svg>

      {/* Product nodes — pill cards with ICON */}
      {NODES.map((p, i) => {
        const rad = (p.angle * Math.PI) / 180;
        const isActive = i === active;
        const IconComp = Icon[p.icon];
        const label = (PRODUCT_LABELS[lang] || PRODUCT_LABELS.es)[p.id];
        return (
          <div key={p.id}
            className="absolute top-1/2 left-1/2 transition-all duration-700 cursor-pointer"
            style={{
              transform: `translate(calc(-50% + ${Math.cos(rad)*R}px), calc(-50% + ${Math.sin(rad)*R}px))`,
            }}
            onClick={() => setActive(i)}>
            <div className={`relative flex items-center gap-2.5 pl-2 pr-3.5 py-1.5 rounded-full glass-strong whitespace-nowrap transition-all duration-700 ${isActive ? 'scale-110' : 'scale-95 opacity-60'}`}
              style={{ boxShadow: isActive ? `0 0 32px -6px ${p.color}, 0 0 0 1px ${p.color}80` : 'none' }}>
              <span className="w-7 h-7 rounded-full flex items-center justify-center" style={{background: isActive ? `${p.color}22` : 'rgba(255,255,255,0.06)'}}>
                <IconComp className="w-4 h-4" color={p.color}/>
              </span>
              <span className="text-xs font-medium text-white">{label}</span>
            </div>
          </div>
        );
      })}

      <style>{`
        @keyframes gentle-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function HeroStats() {
  const { t } = useI18n();
  const [v1, r1] = useCountUp(847);
  const [v2, r2] = useCountUp(94);
  const [v3, r3] = useCountUp(2400);
  return (
    <div className="grid grid-cols-3 gap-6 sm:gap-8 mt-12 max-w-2xl">
      <div ref={r1}>
        <div className="text-3xl sm:text-4xl font-display font-semibold tabular text-white">+{v1}</div>
        <div className="text-xs sm:text-sm text-white/50 mt-1">{t('hero.stats.1')}</div>
      </div>
      <div ref={r2}>
        <div className="text-3xl sm:text-4xl font-display font-semibold tabular text-white">{v2}<span className="gradient-text">%</span></div>
        <div className="text-xs sm:text-sm text-white/50 mt-1">{t('hero.stats.2')}</div>
      </div>
      <div ref={r3}>
        <div className="text-3xl sm:text-4xl font-display font-semibold tabular text-white">{v3}<span className="text-white/40 text-2xl">h</span></div>
        <div className="text-xs sm:text-sm text-white/50 mt-1">{t('hero.stats.3')}</div>
      </div>
    </div>
  );
}

function Hero() {
  const { t } = useI18n();
  const titleRef = useReveal();
  const subRef = useReveal();
  const ctaRef = useReveal();
  const brainRef = useReveal();

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* corner glows with parallax */}
      <div data-parallax="translateY" data-speed="-60" className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl will-parallax"></div>
      <div data-parallax="translateY" data-speed="80" className="absolute bottom-0 -right-20 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl will-parallax"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div ref={titleRef} className="reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-cyan-300 border border-cyan-300/20 bg-cyan-300/5 mb-8 whitespace-nowrap">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300"></span>
                </span>
                {t('hero.eyebrow')}
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-display font-semibold tracking-tight leading-[0.95] text-balance">
                <span className="gradient-text-2">{t('hero.title.1')}</span><br/>
                <span className="text-white">{t('hero.title.2')}</span>{' '}
                <span className="gradient-text">{t('hero.title.3')}</span><br/>
                <span className="text-white">{t('hero.title.4')}</span>
              </h1>
            </div>
            <p ref={subRef} className="reveal mt-8 text-lg sm:text-xl text-white/65 max-w-xl leading-relaxed text-pretty" style={{transitionDelay:'0.1s'}}
              dangerouslySetInnerHTML={{ __html: t('hero.sub') }}/>
            <div className="reveal mt-10 flex flex-wrap items-center gap-4" ref={ctaRef} style={{transitionDelay:'0.2s'}}>
              <button onClick={() => openQuoter && openQuoter()} className="btn-primary inline-flex items-center gap-2.5 whitespace-nowrap">
                {t('hero.cta.primary')}
                <Icon.Lightning className="w-4 h-4"/>
              </button>
              <a href="#demo" className="btn-ghost inline-flex items-center gap-2 whitespace-nowrap">
                {t('hero.cta.secondary')}
                <span aria-hidden>→</span>
              </a>
            </div>
            <HeroStats />
          </div>

          {/* Right: brain */}
          <div ref={brainRef} className="reveal-scale relative" style={{transitionDelay:'0.15s'}} data-parallax="translateY" data-speed="-40">
            <HeroBrain />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs font-mono uppercase tracking-widest">
          <span className="bounce-y">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
window.PRODUCT_LABELS = PRODUCT_LABELS;
