// Final CTA — big WhatsApp call

function CTAFinal() {
  const ref = useReveal();
  return (
    <section id="contacto" className="relative py-32 sm:py-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="reveal-scale relative rounded-[2.5rem] glass-strong p-10 sm:p-16 lg:p-20 text-center overflow-hidden"
          style={{boxShadow:'0 40px 100px -20px rgba(0,242,255,0.3), 0 0 0 1px rgba(255,255,255,0.06)'}}>
          {/* glows */}
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/30 blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-violet-500/30 blur-3xl"></div>
          <div className="absolute -top-20 right-10 w-60 h-60 rounded-full bg-pink-500/20 blur-3xl"></div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-cyan-300 border border-cyan-300/30 bg-cyan-300/5 mb-8 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse"></span>
              prueba gratis 15 días · sin tarjeta
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-semibold tracking-tight text-white text-balance leading-[1.05]">
              <span className="gradient-text-2">Tu próximo cliente</span><br/>
              está escribiéndote ahora.<br/>
              <span className="gradient-text">¿Quién le va a responder?</span>
            </h2>
            <p className="mt-8 text-lg sm:text-xl text-white/65 max-w-2xl mx-auto text-pretty leading-relaxed">
              Activa tu agente de IA en 24h. Sin contratos eternos. Sin tarjeta de crédito.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button onClick={() => openQuoter()} className="btn-primary inline-flex items-center gap-3 text-lg" style={{padding:'18px 36px'}}>
                Cotizar en 60 segundos
                <span aria-hidden>→</span>
              </button>
              <button onClick={() => openLeadModal('cta-final')} className="btn-ghost text-base">Hablar con un asesor</button>
            </div>
            <div className="mt-10 flex items-center justify-center gap-6 text-xs text-white/40 font-mono uppercase tracking-widest flex-wrap">
              <span>· setup en 24h</span>
              <span>· cancelas cuando quieras</span>
              <span>· soporte humano real</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <SinapsioLogo/>
          <div className="text-xs text-white/40">© 2026 Sinapsio · AI Appointment Agents · Hecho en Colombia 🇨🇴</div>
          <div className="flex items-center gap-4 text-xs text-white/50">
            <a href={waLink()} target="_blank" rel="noopener" className="hover:text-white transition">WhatsApp</a>
            <a href="mailto:sinapsio.ia@gmail.com" className="hover:text-white transition">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.CTAFinal = CTAFinal;
window.Footer = Footer;
