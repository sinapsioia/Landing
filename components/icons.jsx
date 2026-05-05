// Professional icon library — clean line/duotone icons replacing emojis
// All icons accept { className, color } and use currentColor by default.

const Icon = {
  // Bell — recordatorios
  Bell: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
      <circle cx="18" cy="6" r="2.5" fill={color} stroke="none" opacity="0.3"/>
    </svg>
  ),
  // Calendar — agendamiento
  Calendar: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2"/>
      <path d="M3 10h18M8 3v4M16 3v4"/>
      <circle cx="8" cy="15" r="1" fill={color} stroke="none"/>
      <circle cx="12" cy="15" r="1" fill={color} stroke="none"/>
      <circle cx="16" cy="15" r="1" fill={color} stroke="none" opacity="0.4"/>
    </svg>
  ),
  // Sales / cash flow — agente de ventas
  Sales: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4 8-8"/>
      <path d="M14 7h7v7"/>
      <circle cx="3" cy="17" r="1.5" fill={color} stroke="none"/>
      <circle cx="21" cy="7" r="1.5" fill={color} stroke="none"/>
    </svg>
  ),
  // Chat support — PQR
  Chat: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      <circle cx="9" cy="11" r="1" fill={color} stroke="none"/>
      <circle cx="13" cy="11" r="1" fill={color} stroke="none"/>
      <circle cx="17" cy="11" r="1" fill={color} stroke="none"/>
    </svg>
  ),
  // Check shield — validaciones
  Verified: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  ),
  // Bar chart — plan de cuotas
  Chart: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="20" x2="21" y2="20"/>
      <rect x="5" y="11" width="3" height="9" fill={color} fillOpacity="0.15"/>
      <rect x="10.5" y="7" width="3" height="13" fill={color} fillOpacity="0.25"/>
      <rect x="16" y="13" width="3" height="7" fill={color} fillOpacity="0.15"/>
    </svg>
  ),

  // Verticals
  Scissors: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3"/>
      <circle cx="6" cy="18" r="3"/>
      <line x1="20" y1="4" x2="8.12" y2="15.88"/>
      <line x1="14.47" y1="14.48" x2="20" y2="20"/>
      <line x1="8.12" y1="8.12" x2="12" y2="12"/>
    </svg>
  ),
  Paw: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="6" cy="9" rx="2" ry="2.5" fill={color} fillOpacity="0.2"/>
      <ellipse cx="18" cy="9" rx="2" ry="2.5" fill={color} fillOpacity="0.2"/>
      <ellipse cx="9" cy="5" rx="2" ry="2.5" fill={color} fillOpacity="0.2"/>
      <ellipse cx="15" cy="5" rx="2" ry="2.5" fill={color} fillOpacity="0.2"/>
      <path d="M12 11c-3 0-5 2.5-5 5 0 2 1.5 3.5 5 3.5s5-1.5 5-3.5c0-2.5-2-5-5-5z" fill={color} fillOpacity="0.2"/>
    </svg>
  ),
  Spa: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c-4-4-4-12 0-18 4 6 4 14 0 18z"/>
      <path d="M5 14c4-2 8 0 7 8M19 14c-4-2-8 0-7 8"/>
    </svg>
  ),
  Bag: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 7h12l-1 14H7L6 7z"/>
      <path d="M9 7V5a3 3 0 0 1 6 0v2"/>
    </svg>
  ),
  Bone: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 7c0-2 2-3.5 3.5-2 1 1 1 2.5 2.5 3l3.5 3.5c.5 1.5 2 1.5 3 2.5 1.5 1.5 0 3.5-2 3.5-2 0-3.5-1-3.5-3l-3.5-3.5c-2 0-3-1.5-3-3.5z"/>
    </svg>
  ),
  Music: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13"/>
      <circle cx="6" cy="18" r="3" fill={color} fillOpacity="0.2"/>
      <circle cx="18" cy="16" r="3" fill={color} fillOpacity="0.2"/>
    </svg>
  ),

  // Generic
  Sparkles: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" fill={color} fillOpacity="0.15"/>
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" fill={color} fillOpacity="0.25"/>
    </svg>
  ),
  Gift: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="9" width="18" height="12" rx="1" fill={color} fillOpacity="0.1"/>
      <path d="M3 13h18M12 9v12"/>
      <path d="M12 9c-2-3-6-3-6 0 0 2 3 2 6 0zM12 9c2-3 6-3 6 0 0 2-3 2-6 0z"/>
    </svg>
  ),
  Users: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Globe: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  Currency: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M16 8h-5a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4H8M12 6v2M12 16v2"/>
    </svg>
  ),
  Lightning: ({ className = "w-6 h-6", color = "currentColor" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill={color} fillOpacity="0.2"/>
    </svg>
  ),
  Check: ({ className = "w-4 h-4", color = "currentColor" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4L19 7"/>
    </svg>
  ),
};

window.Icon = Icon;
