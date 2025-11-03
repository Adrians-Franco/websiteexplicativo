// Puxa o express (programa que ajuda a rodar o site)
const express = require("express");
const app = express();

// Mostra os arquivos da pasta "css"
app.use("/css", express.static("css"));

// Mostra os arquivos da pasta "pages"
app.use(express.static("pages"));

// Quando abrir o site, mostra o index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/index.html");
});

// Liga o servidor
app.listen(3000, () => {
  console.log("Site rodando em http://localhost:3000");
});

