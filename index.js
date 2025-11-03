const express = require("express");
const app = express();

// Mostra os arquivos da pasta "css"
app.use("/css", express.static("css"));

// Mostra os arquivos da pasta "pages"
app.use(express.static("pages"));

// Quando abrir o site, mostra o arquivo index.html
app.get("/", function(req, res) {
  res.sendFile("pages/index.html", { root: "." });
});

// Liga o servidor
app.listen(3000, function() {
  console.log(" rodando na porta 3000");
});



