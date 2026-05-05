// REWARDS — First purchase + Referral program with FOMO

function CountdownTimer() {
  // Counts down to end of current month
  const [time, setTime] = React.useState(() => calcTime());
  function calcTime() {
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const diff = end - now;
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    return { days, hours, mins, secs };
  }
  React.useEffect(() => {
    const i = setInterval(() => setTime(calcTime()), 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {[{v:time.days,l:'D'},{v:time.hours,l:'H'},{v:time.mins,l:'M'},{v:time.secs,l:'S'}].map((t,i) => (
        <div key={i} className="flex items-baseline gap-1">
          <span className="font-display font-semibold text-2xl sm:text-3xl tabular text-white">{String(t.v).padStart(2,'0')}</span>
          <span className="text-xs font-mono text-white/40">{t.l}</span>
        </div>
      ))}
    </div>
  );
}

function ReferralCalculator() {
  const { lang } = useI18n();
  const [n, setN] = React.useState(3);
  const labels = {
    es: { drag:'Desliza para ver tu beneficio', ref:'referidos', months:'meses gratis', save:'ahorras' },
    en: { drag:'Drag to see your benefit', ref:'referrals', months:'free months', save:'you save' },
    de: { drag:'Schieben um Vorteil zu sehen', ref:'Empfehlungen', months:'Monate gratis', save:'du sparst' },
  };
  const L = labels[lang] || labels.es;

  return (
    <div className="mt-8 p-5 rounded-2xl bg-black/30 border border-white/10">
      <div className="text-[10px] font-mono uppercase tracking-widest text-white/50 mb-3">{L.drag}</div>
      <div className="flex items-end justify-between gap-4 mb-4">
        <div>
          <div className="text-5xl font-display font-semibold tabular gradient-text leading-none">{n}</div>
          <div className="text-sm text-white/60 mt-1">{L.ref}</div>
        </div>
        <div className="text-right">
          <div className="text-5xl font-display font-semibold tabular text-white leading-none">{n}<span className="text-2xl text-white/50 ml-1">×</span></div>
          <div className="text-sm text-white/60 mt-1 whitespace-nowrap">{L.months}</div>
        </div>
      </div>
      <input type="range" min="1" max="12" value={n} onChange={(e) => setN(Number(e.target.value))}
        className="sinapsio-range w-full"/>
      <div className="flex justify-between text-[10px] font-mono text-white/40 mt-2">
        <span>1</span><span>12+</span>
      </div>
    </div>
  );
}

function Rewards() {
  const { t, lang, fmt } = useI18n();
  const ref = useReveal();
  const [copied, setCopied] = React.useState(false);

  const SAMPLE_CODE = 'SINAPSIO-3X2';
  function copyCode() {
    navigator.clipboard?.writeText(SAMPLE_CODE).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }

  return (
    <section id="rewards" className="relative py-32 sm:py-40 overflow-hidden">
      {/* big bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none opacity-40"
        style={{background:'radial-gradient(circle, rgba(255,0,110,0.18) 0%, transparent 60%)'}}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow={t('rewards.eyebrow')}
          title={<>{t('rewards.title.1')} <span className="gradient-text">{t('rewards.title.2')}</span></>}
          subtitle={t('rewards.sub')}
        />

        {/* Urgency bar */}
        <div className="max-w-3xl mx-auto mb-12 p-4 rounded-2xl glass-strong flex items-center justify-between gap-4 flex-wrap" style={{borderColor:'rgba(255,0,110,0.3)'}}>
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
            <span className="text-sm text-white/80">{t('rewards.urgency')}</span>
          </div>
          <CountdownTimer/>
        </div>

        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-6">
          {/* PRIMERA COMPRA - 3x2 */}
          <div className="relative rounded-3xl p-8 sm:p-10 overflow-hidden group hover-lift"
            style={{background:'linear-gradient(135deg, rgba(0,242,255,0.08), rgba(124,58,237,0.08))', border:'1px solid rgba(0,242,255,0.25)'}}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-50" style={{background:'radial-gradient(circle, #00f2ff44, transparent 70%)'}}></div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{background:'rgba(0,242,255,0.15)', boxShadow:'inset 0 0 0 1px rgba(0,242,255,0.4)'}}>
                  <Icon.Gift className="w-6 h-6" color="#00f2ff"/>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-cyan-300">{t('rewards.first.tag')}</div>
                  <div className="text-xs text-white/50 mt-0.5">{lang==='en'?'limited':'limitado'}</div>
                </div>
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-semibold text-white text-balance leading-tight mb-3">
                {t('rewards.first.title')}
              </h3>
              <p className="text-white/70 leading-relaxed text-pretty mb-6">{t('rewards.first.desc')}</p>

              {/* 3x2 visualization */}
              <div className="flex items-center gap-3 mb-6">
                {[1,2,3].map(m => (
                  <div key={m} className="flex-1">
                    <div className={`relative h-20 rounded-xl flex flex-col items-center justify-center ${m === 3 ? 'bg-cyan-300/15 border border-cyan-300/40' : 'bg-white/5 border border-white/10'}`}>
                      <div className={`text-xs font-mono ${m === 3 ? 'text-cyan-300' : 'text-white/50'}`}>{lang==='en'?'Month':lang==='de'?'Monat':'Mes'}</div>
                      <div className={`text-2xl font-display font-semibold ${m === 3 ? 'text-cyan-300' : 'text-white'}`}>{m}</div>
                      {m === 3 && (
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-widest bg-cyan-300 text-black font-bold whitespace-nowrap">FREE</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-sm text-white/50 line-through">{fmt(360000)}</span>
                <span className="text-2xl font-display font-semibold text-white">{fmt(240000)}</span>
                <span className="text-sm text-white/50">/ 3 {lang==='en'?'months':lang==='de'?'Monate':'meses'}</span>
                <span className="ml-auto px-2 py-1 rounded-full text-xs font-mono bg-pink-500/20 text-pink-300 border border-pink-500/40 whitespace-nowrap">−33%</span>
              </div>

              <a href={waLink('Hola Sinapsio, quiero activar la promo de 3er mes gratis')} target="_blank" rel="noopener"
                className="btn-primary w-full justify-center inline-flex items-center gap-2 whitespace-nowrap">
                {t('rewards.first.cta')}
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          {/* REFERIDOS */}
          <div className="relative rounded-3xl p-8 sm:p-10 overflow-hidden group hover-lift"
            style={{background:'linear-gradient(135deg, rgba(255,0,110,0.08), rgba(124,58,237,0.08))', border:'1px solid rgba(255,0,110,0.25)'}}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-50" style={{background:'radial-gradient(circle, #ff006e44, transparent 70%)'}}></div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{background:'rgba(255,0,110,0.15)', boxShadow:'inset 0 0 0 1px rgba(255,0,110,0.4)'}}>
                  <Icon.Users className="w-6 h-6" color="#ff006e"/>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-pink-400">{t('rewards.referral.tag')}</div>
                  <div className="text-xs text-white/50 mt-0.5">{lang==='en'?'unlimited':lang==='de'?'unbegrenzt':'sin límite'}</div>
                </div>
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-semibold text-white text-balance leading-tight mb-3">
                {t('rewards.referral.title')}
              </h3>
              <p className="text-white/70 leading-relaxed text-pretty mb-2">{t('rewards.referral.desc')}</p>

              {/* Code with copy */}
              <button onClick={copyCode} className="mt-4 w-full p-3 rounded-xl bg-black/40 border border-white/10 hover:border-pink-500/50 transition flex items-center justify-between group/code">
                <div className="text-left">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">{lang==='en'?'your code':lang==='de'?'dein Code':'tu código'}</div>
                  <div className="font-mono text-lg text-white tracking-wider">{SAMPLE_CODE}</div>
                </div>
                <div className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-widest transition ${copied ? 'bg-green-500/20 text-green-400' : 'bg-pink-500/15 text-pink-300 group-hover/code:bg-pink-500/25'}`}>
                  {copied ? (lang==='en'?'copied':lang==='de'?'kopiert':'copiado') : 'COPY'}
                </div>
              </button>

              <ReferralCalculator/>

              <a href={waLink('Hola Sinapsio, quiero mi código de referido')} target="_blank" rel="noopener"
                className="mt-6 btn-secondary w-full justify-center inline-flex items-center gap-2 whitespace-nowrap"
                style={{background:'linear-gradient(135deg, #ff006e, #7c3aed)'}}>
                {t('rewards.referral.cta')}
                <Icon.Sparkles className="w-4 h-4" color="white"/>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .sinapsio-range {
          -webkit-appearance: none; height: 6px; background: rgba(255,255,255,0.08);
          border-radius: 999px; outline: none;
        }
        .sinapsio-range::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none;
          width: 20px; height: 20px; border-radius: 50%;
          background: linear-gradient(135deg, #ff006e, #7c3aed);
          box-shadow: 0 0 0 4px rgba(255,0,110,0.2), 0 0 20px rgba(255,0,110,0.6);
          cursor: pointer; border: 2px solid #fff;
        }
        .sinapsio-range::-moz-range-thumb {
          width: 20px; height: 20px; border-radius: 50%;
          background: linear-gradient(135deg, #ff006e, #7c3aed);
          box-shadow: 0 0 0 4px rgba(255,0,110,0.2), 0 0 20px rgba(255,0,110,0.6);
          cursor: pointer; border: 2px solid #fff;
        }
      `}</style>
    </section>
  );
}

window.Rewards = Rewards;
