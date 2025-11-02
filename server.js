const express = require('express');
const app = express();

app.use(express.static(__dirname)); // serve os arquivos HTML, CSS, JS

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
