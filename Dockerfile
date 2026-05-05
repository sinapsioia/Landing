FROM node:18-alpine

# Crear usuario no-root para seguridad
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001

WORKDIR /app

# Copiar package files
COPY package*.json ./

# Instalar dependencias de forma robusta
# Si existe package-lock.json usa npm ci, si no usa npm install
RUN if [ -f package-lock.json ]; then npm ci --omit=dev; else npm install --omit=dev; fi && \
    npm cache clean --force

# Copiar archivos necesarios
COPY index.html ./
COPY server.js ./
COPY assets/ ./assets/
COPY components/ ./components/
COPY app.jsx ./
COPY neural-bg.js ./
COPY parallax.js ./
COPY tweaks-panel.jsx ./

# Ajustar permisos para el usuario no-root
RUN chown -R nodejs:nodejs /app

# Cambiar a usuario no-root
USER nodejs

# Variables de entorno
ENV NODE_ENV=production
ENV PORT=8000

# Puerto expuesto
EXPOSE 8000

# Health check logic optimized for Node
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://0.0.0.0:8000/health', (r) => process.exit(r.statusCode === 200 ? 0 : 1))"

# Comando de inicio
CMD ["node", "server.js"]
