import express from "express";

// Inicializa a aplicação Express
const app = express();
// Middleware para mostrar arquivos da pasta "css" (Acesso via /css/arquivo.css)
app.use("/css", express.static("css"));
// Middleware para mostrar arquivos da pasta "pages" (Acesso direto, exemplo: /index.html)
app.use(express.static("pages"));
// Rota principal (GET /)
app.get("/", (req, res) => {
  res.sendFile("pages/index.html", { root: process.cwd() });
});
// Liga o servidor diretamente na porta 3000
app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000`); 
  
});



