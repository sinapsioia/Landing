const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;
const isProduction = process.env.NODE_ENV === 'production';

// Servir archivos estáticos con cache inteligente
// Assets (imágenes, etc) = cache largo
// HTML = sin cache para ver cambios inmediatamente
app.use(express.static(__dirname, {
    maxAge: 0,  // Sin cache por defecto
    etag: true,
    setHeaders: (res, filepath) => {
        // Cache largo para assets
        if (filepath.match(/\.(jpg|jpeg|png|gif|svg|ico|woff|woff2|ttf|eot|mp4|webm)$/)) {
            res.setHeader('Cache-Control', 'public, max-age=86400'); // 1 día
        } else {
            // Sin cache para HTML/CSS/JS para ver cambios inmediatamente
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        }
    }
}));

// Headers de seguridad
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
});

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check para EasyPanel/Docker
app.get('/health', (req, res) => {
    res.status(200).send('ok');
});

// Manejo de 404 - redirigir a index (SPA style)
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log('='.repeat(50));
    console.log('SINAPSIO - Landing Page Server');
    console.log('='.repeat(50));
    console.log(`Environment: ${isProduction ? 'PRODUCTION' : 'DEVELOPMENT'}`);
    console.log(`Server running on port: ${PORT}`);
    console.log('='.repeat(50));
});
