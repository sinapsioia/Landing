// App entry — composes all sections + Tweaks panel

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "cyan",
  "intensity": "medio",
  "bgMode": "neural",
  "showWA": true
}/*EDITMODE-END*/;

const ACCENT_PRESETS = {
  cyan: { c1: '#00f2ff', c2: '#7c3aed', c3: '#ff006e', label: 'Cyan' },
  violet: { c1: '#a78bfa', c2: '#7c3aed', c3: '#ec4899', label: 'Violet' },
  magenta: { c1: '#ff006e', c2: '#7c3aed', c3: '#00f2ff', label: 'Magenta' },
  green: { c1: '#22d3ee', c2: '#10b981', c3: '#84cc16', label: 'Green' },
};

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply CSS vars from accent
  React.useEffect(() => {
    const p = ACCENT_PRESETS[tweaks.accent] || ACCENT_PRESETS.cyan;
    document.documentElement.style.setProperty('--accent-1', p.c1);
    document.documentElement.style.setProperty('--accent-2', p.c2);
    document.documentElement.style.setProperty('--accent-3', p.c3);
  }, [tweaks.accent]);

  // Refresh parallax targets after React mounts
  React.useEffect(() => {
    const t = setTimeout(() => window.SinapsioParallax && window.SinapsioParallax.refresh(), 100);
    return () => clearTimeout(t);
  }, []);

  // Background mode
  React.useEffect(() => {
    if (window.NeuralBG) {
      window.NeuralBG.setMode(tweaks.bgMode);
      const intensityMap = { sutil: 0.5, medio: 1, agresivo: 1.6 };
      window.NeuralBG.setIntensity(intensityMap[tweaks.intensity] || 1);
    }
  }, [tweaks.bgMode, tweaks.intensity]);

  return (
    <>
      <Nav/>
      <main>
        <Hero/>
        <Products/>
        <Verticals/>
        <Cases/>
        <WhatsAppDemo/>
        <ROI/>
        <Pricing/>
        <Rewards/>
        <FAQ/>
        <CTAFinal/>
      </main>
      <Footer/>

      {/* Floating WhatsApp button — opens lead modal */}
      {tweaks.showWA && (
        <button onClick={() => openLeadModal('floating')}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-[#25D366] hover:bg-[#1fb858] shadow-2xl hover:scale-105 transition-transform group"
          style={{boxShadow:'0 8px 32px -4px rgba(37,211,102,0.6)'}}>
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white relative" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          <span className="text-white font-medium text-sm relative whitespace-nowrap">Hablar con ventas</span>
        </button>
      )}

      <LeadModal/>
      <QuoterModal/>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Visual">
          <TweakRadio label="Acento" value={tweaks.accent} onChange={(v) => setTweak('accent', v)}
            options={[
              { value: 'cyan', label: 'Cyan' },
              { value: 'violet', label: 'Violet' },
              { value: 'magenta', label: 'Magenta' },
              { value: 'green', label: 'Green' },
            ]}/>
          <TweakRadio label="Fondo" value={tweaks.bgMode} onChange={(v) => setTweak('bgMode', v)}
            options={[
              { value: 'clean', label: 'Limpio' },
              { value: 'particles', label: 'Partículas' },
              { value: 'neural', label: 'Red neural' },
            ]}/>
          <TweakRadio label="Movimiento" value={tweaks.intensity} onChange={(v) => setTweak('intensity', v)}
            options={[
              { value: 'sutil', label: 'Sutil' },
              { value: 'medio', label: 'Medio' },
              { value: 'agresivo', label: 'Agresivo' },
            ]}/>
        </TweakSection>
        <TweakSection title="UI">
          <TweakToggle label="Botón WhatsApp flotante" value={tweaks.showWA} onChange={(v) => setTweak('showWA', v)}/>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nProvider><App/></I18nProvider>
);
