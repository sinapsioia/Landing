// FAQ

const FAQS = [
  { q: '¿Necesito conocimientos técnicos para usar Sinapsio?', a: 'No. Nosotros configuramos todo: tu catálogo, tu tono, tus precios. Tú solo recibes los clientes ya cerrados por WhatsApp. El setup tarda entre 24h y 48h.' },
  { q: '¿La IA suena como un robot?', a: 'No. Entrenamos cada agente con tu tono — formal, parche, técnico, lo que sea. Tus clientes no notan la diferencia. De hecho, muchos prefieren la rapidez con la que responde.' },
  { q: '¿Qué pasa si la IA no sabe responder algo?', a: 'Cuando detecta un caso complejo, te lo escala automáticamente a ti o a un humano. Nunca inventa respuestas. Siempre puedes intervenir y tomar el control.' },
  { q: '¿Funciona con mi WhatsApp actual?', a: 'Sí. Usamos WhatsApp Business API oficial. Conservas tu número, tus chats y tu historial. Solo agregamos el cerebro de IA por encima.' },
  { q: '¿Puedo combinar varios productos?', a: 'Por supuesto — esa es la idea. Empieza con uno y agrega cuando estés listo. Por ejemplo: Agendamiento + Recordatorios cubre la mayoría de los negocios de servicios.' },
  { q: '¿Cuánto tiempo me toma ver resultados?', a: 'Los primeros resultados (citas agendadas, ventas cerradas) llegan en las primeras 48-72h. ROI completo se ve al primer mes.' },
  { q: '¿Y si cancelo?', a: 'Cancelas en 1 clic, sin preguntas. Te devolvemos los datos y conservas tu número de WhatsApp.' },
  { q: '¿Funciona fuera de Colombia?', a: 'Sí. Atendemos clientes en toda LatAm + España. Los precios están en COP pero aceptamos USD y EUR.' },
];

function FAQItem({ f, idx }) {
  const [open, setOpen] = React.useState(false);
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={{transitionDelay:`${idx*0.04}s`}}>
      <button onClick={() => setOpen(!open)}
        className={`w-full text-left rounded-2xl px-6 py-5 transition-all ${open ? 'glass-strong' : 'glass hover:bg-white/[0.06]'}`}>
        <div className="flex items-start justify-between gap-4">
          <span className="font-display font-medium text-white text-base sm:text-lg">{f.q}</span>
          <span className={`flex-shrink-0 w-7 h-7 rounded-full border border-white/20 flex items-center justify-center transition-transform ${open ? 'rotate-45 bg-cyan-300/20 border-cyan-300/50' : ''}`}>
            <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" strokeLinecap="round"/></svg>
          </span>
        </div>
        <div className={`grid transition-all duration-500 ${open ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden">
            <p className="text-white/65 leading-relaxed text-pretty">{f.a}</p>
          </div>
        </div>
      </button>
    </div>
  );
}

function FAQ() {
  return (
    <section id="faq" className="relative py-32 sm:py-40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Preguntas frecuentes"
          title={<>Todo lo que necesitas saber <span className="gradient-text">antes de empezar.</span></>}
        />
        <div className="space-y-3">
          {FAQS.map((f,i) => <FAQItem key={i} f={f} idx={i}/>)}
        </div>
      </div>
    </section>
  );
}

window.FAQ = FAQ;
