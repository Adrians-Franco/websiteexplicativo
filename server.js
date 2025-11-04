// server.js
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Configurações para usar módulos ES (import/export)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos (CSS, JS, Imagens, etc.)
// Assumindo que seus arquivos estáticos (CSS, etc.) estão em uma pasta chamada 'public' ou 'assets'
// Se o seu CSS está na raiz, use express.static(__dirname);
app.use(express.static(join(__dirname))); 

// Rota principal para servir o index.html
app.get('/', (req, res) => {
    // Certifique-se de que o caminho 'index.html' está correto em relação a server.js
    res.sendFile(join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor Express rodando em http://localhost:${PORT}`);
});