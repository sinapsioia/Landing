// LEAD MODAL + COTIZADOR — adapted from original repo, dark glass styling

const LEAD_PRODUCT_OPTIONS = [
  { id: 'recordatorios', label: 'Recordatorios' },
  { id: 'agendamiento', label: 'Agendamiento' },
  { id: 'ventas', label: 'Agente de Ventas' },
  { id: 'pqr', label: 'PQR · Soporte' },
  { id: 'validaciones', label: 'Validaciones de Pago' },
  { id: 'cuotas', label: 'Plan de Cuotas' },
  { id: 'dashboard', label: 'Dashboard a medida' },
  { id: 'otro', label: 'Otro / no estoy seguro' },
];

const VERTICAL_OPTIONS = [
  'Barbería', 'Spa / Estética', 'Grooming / Pet shop', 'Tienda de mascotas',
  'Tienda online', 'Música / Salas estudio', 'Distribuidor / Ferretería', 'Otro',
];

function ModalShell({ open, onClose, children, maxWidth = 'max-w-lg' }) {
  React.useEffect(() => {
    if (!open) return;
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" style={{animation:'modalIn 0.3s'}}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose}></div>
      <div className={`relative w-full ${maxWidth} max-h-[90vh] overflow-y-auto glass-strong rounded-3xl border border-white/10`}
        style={{boxShadow:'0 40px 100px -20px rgba(0,242,255,0.3), 0 0 0 1px rgba(255,255,255,0.06)', animation:'modalContentIn 0.4s cubic-bezier(0.22,1,0.36,1)'}}>
        <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition z-10">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M6 18L18 6" strokeLinecap="round"/></svg>
        </button>
        {children}
      </div>
      <style>{`
        @keyframes modalIn { from { opacity:0;} to {opacity:1;} }
        @keyframes modalContentIn { from { opacity:0; transform: scale(0.96) translateY(20px);} to {opacity:1; transform: scale(1) translateY(0);} }
      `}</style>
    </div>
  );
}

function Field({ label, children, required }) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-widest text-white/60 mb-2">
        {label} {required && <span className="text-pink-400">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.07] transition";

function LeadModal() {
  const [open, setOpen] = React.useState(false);
  const [source, setSource] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ nombre: '', telefono: '', empresa: '', vertical: '', interes: '' });

  React.useEffect(() => {
    function handler(e) { setSource(e.detail?.source || ''); setOpen(true); setSubmitted(false); }
    window.addEventListener('sinapsio:openLead', handler);
    return () => window.removeEventListener('sinapsio:openLead', handler);
  }, []);

  function update(k, v) { setForm(f => ({ ...f, [k]: v })); }

  function submit(e) {
    e.preventDefault();
    if (!form.nombre || !form.telefono) return;
    // In production, send to backend or CRM. For now: open WA prefilled
    const msg = `Hola Sinapsio, soy ${form.nombre} de ${form.empresa || 'mi empresa'} (${form.vertical}). Me interesa: ${form.interes}. Mi tel: ${form.telefono}`;
    setSubmitted(true);
    setTimeout(() => {
      window.open(waLink(msg), '_blank');
    }, 800);
  }

  return (
    <ModalShell open={open} onClose={() => setOpen(false)}>
      {!submitted ? (
        <div className="p-8 sm:p-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest text-cyan-300 border border-cyan-300/20 bg-cyan-300/5 mb-5 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse"></span>
            respuesta en menos de 1h hábil
          </div>
          <h3 className="text-3xl font-display font-semibold text-white tracking-tight mb-2">Hablemos en 60 segundos.</h3>
          <p className="text-white/60 text-sm mb-8">Déjanos tus datos y un asesor humano (real, no IA) te contacta hoy mismo.</p>

          <form onSubmit={submit} className="space-y-5">
            <Field label="Tu nombre" required>
              <input type="text" required value={form.nombre} onChange={(e) => update('nombre', e.target.value)} className={inputCls} placeholder="Andrés Gómez"/>
            </Field>
            <Field label="WhatsApp / Teléfono" required>
              <input type="tel" required value={form.telefono} onChange={(e) => update('telefono', e.target.value)} className={inputCls} placeholder="+57 300 000 0000"/>
            </Field>
            <Field label="Tu negocio">
              <input type="text" value={form.empresa} onChange={(e) => update('empresa', e.target.value)} className={inputCls} placeholder="Nombre del negocio"/>
            </Field>
            <Field label="Industria">
              <select value={form.vertical} onChange={(e) => update('vertical', e.target.value)} className={inputCls}>
                <option value="" className="bg-ink-900">Selecciona…</option>
                {VERTICAL_OPTIONS.map(v => <option key={v} value={v} className="bg-ink-900">{v}</option>)}
              </select>
            </Field>
            <Field label="¿Qué quieres automatizar?">
              <textarea value={form.interes} onChange={(e) => update('interes', e.target.value)} rows="2" className={inputCls} placeholder="Ej: agendar citas, recuperar carritos, recordatorios…"/>
            </Field>
            <button type="submit" className="btn-primary w-full inline-flex items-center justify-center gap-2 mt-2">
              Enviar y abrir WhatsApp →
            </button>
            <p className="text-[11px] text-white/40 text-center">Al enviar, aceptas que un asesor de Sinapsio te contacte. No spam — promesa.</p>
          </form>
        </div>
      ) : (
        <div className="p-12 text-center">
          <div className="w-20 h-20 rounded-full glass-strong flex items-center justify-center mx-auto mb-6 glow-cyan">
            <svg className="w-10 h-10 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h3 className="text-2xl font-display font-semibold text-white mb-2">¡Recibido!</h3>
          <p className="text-white/60">Te abrimos WhatsApp para terminar la conversación con un asesor.</p>
        </div>
      )}
    </ModalShell>
  );
}

// ─── COTIZADOR EN VIVO ───
const QUOTER_STEPS = [
  { id: 'vertical', q: '¿Qué tipo de negocio tienes?', kind: 'options', options: VERTICAL_OPTIONS },
  { id: 'productos', q: '¿Qué productos te interesan?', sub: 'Selecciona uno o varios', kind: 'multi', options: LEAD_PRODUCT_OPTIONS.map(p => p.label) },
  { id: 'volumen', q: '¿Cuántas conversaciones / clientes manejas al mes?', kind: 'options', options: ['Menos de 500', '500 — 2.000', '2.000 — 10.000', 'Más de 10.000'] },
  { id: 'urgencia', q: '¿Qué tan rápido lo necesitas?', kind: 'options', options: ['Esta semana', 'Este mes', 'Próximos 3 meses', 'Solo estoy explorando'] },
  { id: 'contacto', q: 'Genial. ¿Cómo te contactamos?', kind: 'contact' },
];

function QuoterModal() {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({});
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    function handler() { setOpen(true); setStep(0); setData({}); setDone(false); }
    window.addEventListener('sinapsio:openQuoter', handler);
    return () => window.removeEventListener('sinapsio:openQuoter', handler);
  }, []);

  const cur = QUOTER_STEPS[step];
  const total = QUOTER_STEPS.length;
  const progress = ((step) / total) * 100;

  function pick(val) {
    setData(d => ({ ...d, [cur.id]: val }));
    setTimeout(() => setStep(s => s + 1), 280);
  }
  function pickMulti(val) {
    setData(d => {
      const arr = Array.isArray(d[cur.id]) ? d[cur.id] : [];
      return { ...d, [cur.id]: arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val] };
    });
  }
  function nextMulti() { if ((data[cur.id] || []).length > 0) setStep(s => s + 1); }

  function submitContact(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const contact = { nombre: fd.get('nombre'), telefono: fd.get('telefono'), email: fd.get('email') };
    setData(d => ({ ...d, contacto: contact }));
    setDone(true);
    const summary = `Cotización Sinapsio:\n• Negocio: ${data.vertical}\n• Productos: ${(data.productos||[]).join(', ')}\n• Volumen: ${data.volumen}\n• Urgencia: ${data.urgencia}\n• Contacto: ${contact.nombre} (${contact.telefono})`;
    setTimeout(() => window.open(waLink(summary), '_blank'), 1200);
  }

  return (
    <ModalShell open={open} onClose={() => setOpen(false)} maxWidth="max-w-2xl">
      <div className="p-8 sm:p-12">
        {/* progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-300">Cotización en vivo</div>
            <div className="text-xs font-mono text-white/40">{Math.min(step+1, total)} / {total}</div>
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full transition-all duration-500" style={{width:`${done ? 100 : progress}%`, background:'linear-gradient(90deg, #00f2ff, #7c3aed)'}}></div>
          </div>
        </div>

        {!done ? (
          <div key={step} style={{animation:'stepIn 0.4s'}}>
            <h3 className="text-3xl font-display font-semibold text-white mb-2 tracking-tight text-balance">{cur.q}</h3>
            {cur.sub && <p className="text-sm text-white/50 mb-8">{cur.sub}</p>}
            {!cur.sub && <div className="mb-8"></div>}

            {cur.kind === 'options' && (
              <div className="grid sm:grid-cols-2 gap-3">
                {cur.options.map(opt => (
                  <button key={opt} onClick={() => pick(opt)}
                    className={`group text-left rounded-2xl px-5 py-4 transition-all
                      ${data[cur.id] === opt ? 'glass-strong glow-cyan' : 'glass hover:bg-white/[0.07]'}`}>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-white font-medium">{opt}</span>
                      <span className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-cyan-300/60 transition">
                        <svg className="w-3 h-3 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 5l7 7-7 7" strokeLinecap="round"/></svg>
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {cur.kind === 'multi' && (
              <>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {cur.options.map(opt => {
                    const sel = (data[cur.id] || []).includes(opt);
                    return (
                      <button key={opt} onClick={() => pickMulti(opt)}
                        className={`text-left rounded-2xl px-5 py-4 transition-all
                          ${sel ? 'glass-strong glow-cyan' : 'glass hover:bg-white/[0.07]'}`}>
                        <div className="flex items-center gap-3">
                          <span className={`w-5 h-5 rounded border-2 flex items-center justify-center transition ${sel ? 'border-cyan-300 bg-cyan-300/20' : 'border-white/30'}`}>
                            {sel && <svg className="w-3 h-3 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" strokeLinecap="round"/></svg>}
                          </span>
                          <span className="text-white font-medium">{opt}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
                <button onClick={nextMulti} disabled={!(data[cur.id]||[]).length} className="btn-primary inline-flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed">
                  Continuar →
                </button>
              </>
            )}

            {cur.kind === 'contact' && (
              <form onSubmit={submitContact} className="space-y-5">
                <Field label="Tu nombre" required>
                  <input name="nombre" required className={inputCls} placeholder="Andrés Gómez"/>
                </Field>
                <Field label="WhatsApp" required>
                  <input name="telefono" type="tel" required className={inputCls} placeholder="+57 300 000 0000"/>
                </Field>
                <Field label="Email">
                  <input name="email" type="email" className={inputCls} placeholder="andres@minegocio.com"/>
                </Field>
                <button type="submit" className="btn-primary w-full inline-flex items-center justify-center gap-2 mt-3">
                  Ver mi cotización →
                </button>
              </form>
            )}

            {step > 0 && (
              <button onClick={() => setStep(s => s - 1)} className="mt-6 text-sm text-white/50 hover:text-white transition">← atrás</button>
            )}
          </div>
        ) : (
          <div className="text-center py-8" style={{animation:'stepIn 0.5s'}}>
            <div className="w-20 h-20 rounded-full glass-strong flex items-center justify-center mx-auto mb-6 glow-cyan">
              <svg className="w-10 h-10 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="text-3xl font-display font-semibold text-white mb-2">¡Cotización lista!</h3>
            <p className="text-white/60 mb-6">Te abrimos WhatsApp con todos los detalles. Un asesor te responderá en minutos.</p>
            <div className="glass rounded-2xl p-5 text-left text-sm space-y-1.5 max-w-md mx-auto">
              <div><span className="text-white/40 font-mono text-xs uppercase tracking-widest">Negocio:</span> <span className="text-white">{data.vertical}</span></div>
              <div><span className="text-white/40 font-mono text-xs uppercase tracking-widest">Productos:</span> <span className="text-white">{(data.productos||[]).join(', ')}</span></div>
              <div><span className="text-white/40 font-mono text-xs uppercase tracking-widest">Volumen:</span> <span className="text-white">{data.volumen}</span></div>
              <div><span className="text-white/40 font-mono text-xs uppercase tracking-widest">Urgencia:</span> <span className="text-white">{data.urgencia}</span></div>
            </div>
          </div>
        )}
      </div>
      <style>{`@keyframes stepIn { from { opacity:0; transform: translateY(12px);} to {opacity:1; transform: translateY(0);} }`}</style>
    </ModalShell>
  );
}

window.LeadModal = LeadModal;
window.QuoterModal = QuoterModal;
