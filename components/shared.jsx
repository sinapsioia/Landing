// Shared utilities & components

// Hook: reveal-on-scroll using IntersectionObserver
function useReveal(threshold = 0.12) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.add('in');
          obs.unobserve(el);
        }
      });
    }, { threshold, rootMargin: '0px 0px -10% 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

// Hook: parallax — translateY based on scroll position relative to element center
function useParallax(speed = 0.15) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = null;
    function update() {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const offset = (window.innerHeight / 2 - center) * speed;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
      raf = null;
    }
    function onScroll() { if (!raf) raf = requestAnimationFrame(update); }
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [speed]);
  return ref;
}

// Hook: count-up number animation triggered when in view
function useCountUp(target, duration = 1800) {
  const [val, setVal] = React.useState(0);
  const [started, setStarted] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting && !started) setStarted(true); });
    }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);
  React.useEffect(() => {
    if (!started) return;
    const t0 = performance.now();
    let raf;
    function step(now) {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => raf && cancelAnimationFrame(raf);
  }, [started, target, duration]);
  return [val, ref];
}

// WhatsApp link
const WA_NUMBER = '573222317169';
function waLink(message = 'Hola Sinapsio, quiero saber más sobre los agentes de IA') {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Section wrapper with optional eyebrow + title
function SectionHeader({ eyebrow, title, subtitle, align = 'center' }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} mb-16`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-cyan-300 border border-cyan-300/20 bg-cyan-300/5 mb-6 whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse"></span>
          {eyebrow}
        </div>
      )}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-white text-balance leading-[1.05]">
        {title}
      </h2>
      {subtitle && <p className="mt-6 text-lg text-white/60 text-pretty leading-relaxed">{subtitle}</p>}
    </div>
  );
}

// Logo — uses real Sinapsio brain PNG (with transparency)
function SinapsioLogo({ className = "", size = "default" }) {
  const sizes = {
    small: { img: 'h-8 w-8', text: 'text-base' },
    default: { img: 'h-10 w-10', text: 'text-lg' },
    large: { img: 'h-14 w-14', text: 'text-2xl' },
  };
  const s = sizes[size] || sizes.default;
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className={`relative ${s.img} flex-shrink-0`}>
        <img src="assets/sinapsio-brain.png" alt="Sinapsio" className="w-full h-full object-contain relative z-10" style={{filter:'drop-shadow(0 0 16px rgba(0,242,255,0.45)) drop-shadow(0 0 8px rgba(124,58,237,0.35))'}} />
      </div>
      <span className={`font-display font-semibold ${s.text} tracking-tight whitespace-nowrap`}>
        <span className="text-white">SINA</span><span className="gradient-text">PSIO</span>
      </span>
    </div>
  );
}

// Lead modal opener — global event
function openLeadModal(source = 'cta') {
  window.dispatchEvent(new CustomEvent('sinapsio:openLead', { detail: { source } }));
}
function openQuoter() {
  window.dispatchEvent(new CustomEvent('sinapsio:openQuoter'));
}

Object.assign(window, { useReveal, useParallax, useCountUp, waLink, SectionHeader, SinapsioLogo, WA_NUMBER, openLeadModal, openQuoter });
