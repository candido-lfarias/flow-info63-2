const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());



app.get('/api/version', (req, res) => {
  res.json({ version: '1.0.0' });
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.get('/api/eduarda-6573019', (req, res) => {
  //ler conteudo do arquivo
  res.json("eduarda-6573019.txt");
});
