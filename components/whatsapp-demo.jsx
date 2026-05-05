// WhatsApp DEMO — animated chat conversation

const DEMO_SCRIPTS = {
  agendar: [
    { side: 'user', text: 'Hola, quiero agendar un corte para mañana' },
    { side: 'bot', text: '¡Hola! 👋 Claro que sí. Tengo cupos mañana a las 10am, 2pm y 5pm. ¿Cuál te queda mejor?', delay: 1200 },
    { side: 'user', text: '2pm está perfecto', delay: 1800 },
    { side: 'bot', text: 'Listo ✅ Agendado para mañana 2pm. Te envío recordatorio 2h antes. ¿Tu nombre?', delay: 1100 },
    { side: 'user', text: 'Andrés Gómez', delay: 1500 },
    { side: 'bot', text: 'Perfecto Andrés. Te esperamos mañana 2pm 🙌\nDirección: Cra 13 #84-21', delay: 1000 },
  ],
  vender: [
    { side: 'user', text: 'Vi su collar de cuero premium. ¿Cuánto vale?' },
    { side: 'bot', text: '¡Hola! 🐶 Ese es el modelo Marbella, $189.000. Viene en 4 colores y 3 tallas.\n¿Para qué raza es tu peludo?', delay: 1300 },
    { side: 'user', text: 'Un labrador de 3 años', delay: 1600 },
    { side: 'bot', text: 'Para un labrador adulto te recomiendo talla L 👌\n¿Te gustaría sumarle la correa a juego? Te queda en $245.000 el combo (ahorras $50K).', delay: 1400 },
    { side: 'user', text: 'Dale, los dos', delay: 1500 },
    { side: 'bot', text: 'Excelente elección 🎉 Te envío link de pago. Llega en 24h a tu casa.', delay: 1100 },
  ],
  recordar: [
    { side: 'bot', text: 'Hola Camila 👋 Te recordamos tu cita de grooming mañana a las 11am en Rocko & Macka.\n¿Confirmas asistencia?' },
    { side: 'user', text: 'Sí confirmo!', delay: 1400 },
    { side: 'bot', text: 'Perfecto ✅ Te esperamos. Si necesitas reagendar, solo escríbeme 🐾', delay: 1000 },
  ],
};

function TypingDots() {
  return (
    <div className="inline-flex items-center gap-1 px-3 py-2 rounded-2xl bg-white/10">
      <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{animationDelay:'0s'}}></span>
      <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{animationDelay:'0.15s'}}></span>
      <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{animationDelay:'0.3s'}}></span>
    </div>
  );
}

function WhatsAppDemo() {
  const [scenario, setScenario] = React.useState('agendar');
  const [messages, setMessages] = React.useState([]);
  const [typing, setTyping] = React.useState(false);
  const containerRef = React.useRef(null);
  const ref = useReveal();

  React.useEffect(() => {
    let mounted = true;
    setMessages([]);
    setTyping(false);
    const script = DEMO_SCRIPTS[scenario];
    let i = 0;
    let cancelled = false;

    async function run() {
      for (const msg of script) {
        if (cancelled || !mounted) return;
        await new Promise(r => setTimeout(r, msg.delay || 800));
        if (msg.side === 'bot') {
          setTyping(true);
          await new Promise(r => setTimeout(r, 900));
          if (cancelled) return;
          setTyping(false);
        }
        setMessages(prev => [...prev, msg]);
      }
      // loop after pause
      await new Promise(r => setTimeout(r, 3500));
      if (!cancelled && mounted) {
        // restart same scenario
        setMessages([]);
        run();
      }
    }
    run();
    return () => { cancelled = true; mounted = false; };
  }, [scenario]);

  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const scenarios = [
    { id: 'agendar', label: 'Agendar cita', icon: '📅' },
    { id: 'vender', label: 'Vender producto', icon: '💰' },
    { id: 'recordar', label: 'Recordatorio', icon: '🔔' },
  ];

  return (
    <section id="demo" className="relative py-32 sm:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Demo en vivo"
          title={<>Mira cómo responde la IA <span className="gradient-text">en tiempo real</span>.</>}
          subtitle="Cambia el escenario y observa cómo el agente cierra ventas, agenda y recuerda — todo por WhatsApp."
        />

        <div ref={ref} className="reveal grid lg:grid-cols-12 gap-8 items-center">
          {/* Left: scenario selector */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-sm font-mono uppercase tracking-widest text-white/40 mb-2">elige un escenario</div>
            {scenarios.map(s => (
              <button key={s.id} onClick={() => setScenario(s.id)}
                className={`w-full text-left rounded-2xl p-5 transition-all duration-500
                  ${scenario === s.id ? 'glass-strong scale-[1.02] glow-cyan' : 'glass hover:bg-white/[0.06]'}`}>
                <div className="flex items-center gap-4">
                  <div className="text-2xl">{s.icon}</div>
                  <div className="font-display font-semibold text-white">{s.label}</div>
                  {scenario === s.id && <div className="ml-auto text-xs font-mono text-cyan-300">▸ corriendo</div>}
                </div>
              </button>
            ))}
            <div className="pt-4 text-sm text-white/50 leading-relaxed">
              Esto es <span className="text-white">simulado</span> con scripts reales de nuestros clientes. La IA real se entrena con TU catálogo, tu tono y tus precios.
            </div>
          </div>

          {/* Right: phone mockup */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[400px]">
              {/* phone frame */}
              <div className="relative rounded-[3rem] bg-black border-[10px] border-zinc-900 shadow-2xl overflow-hidden" style={{boxShadow:'0 40px 80px -20px rgba(0,242,255,0.25), 0 20px 40px -10px rgba(0,0,0,0.8)'}}>
                {/* notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>

                {/* WA header */}
                <div className="bg-[#075E54] px-4 py-3 pt-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-lg">🧠</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-medium text-sm truncate">Sinapsio · Asistente IA</div>
                    <div className="text-white/70 text-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                      en línea
                    </div>
                  </div>
                </div>

                {/* chat bg */}
                <div ref={containerRef} className="h-[480px] overflow-y-auto px-3 py-4 space-y-2"
                  style={{background:'#0e1418 url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><circle cx=%2210%22 cy=%2210%22 r=%221%22 fill=%22white%22 opacity=%220.04%22/></svg>")'}}>
                  {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.side === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[78%] px-3 py-2 rounded-2xl text-sm whitespace-pre-line
                        ${m.side === 'user'
                          ? 'bg-[#005c4b] text-white rounded-br-sm'
                          : 'bg-[#202c33] text-white rounded-bl-sm'}`}
                        style={{animation:'msgIn 0.35s cubic-bezier(0.22,1,0.36,1)'}}>
                        {m.text}
                        <div className="text-[10px] text-white/40 mt-1 text-right">
                          {new Date().getHours()}:{String(new Date().getMinutes()).padStart(2,'0')}
                          {m.side === 'user' && <span className="ml-1 text-cyan-300">✓✓</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                  {typing && (
                    <div className="flex justify-start" style={{animation:'msgIn 0.3s'}}>
                      <TypingDots/>
                    </div>
                  )}
                </div>

                {/* WA input */}
                <div className="bg-[#1f2c33] px-3 py-2 flex items-center gap-2">
                  <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-sm text-white/40">Mensaje</div>
                  <div className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                  </div>
                </div>
              </div>
              {/* glow */}
              <div className="absolute inset-0 -z-10 rounded-[3rem] blur-3xl opacity-50" style={{background:'radial-gradient(circle, rgba(0,242,255,0.4), transparent 70%)'}}></div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes msgIn { from { opacity:0; transform: translateY(8px) scale(0.96);} to {opacity:1; transform: translateY(0) scale(1);} }`}</style>
    </section>
  );
}

window.WhatsAppDemo = WhatsAppDemo;
