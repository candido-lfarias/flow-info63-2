const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
app.use(express.json());


app.get('/api/version', (req, res) => {
  res.json({ version: '1.0.0' });
});

app.get('/api/raissa-6541013', async (req, res) => {
  const fs = require('fs').promises;
  const data = await fs.readFile('raissa-6541013.txt','utf8')
  res.json(JSON.parse(data));
});



app.get('/api/andre-gschuh', (req, res) => {

  fs.readFile('./arquivo.txt', 'utf-8', (err, data) => {
    if(err){
      return res.status(500).json({error: "Erro ao ler o arquivo"})
    }

    res.json({conteudo: data});
  });

});

app.get('/api/vinicius-6569395', async (req, res) => {
  const fs = require('fs').promises;
  const arquivo = await fs.readFile('vinicius-6569395.txt', 'utf8')
    res.json(arquivo);
  });


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.get('/api/eduarda-6573019', (req, res) => {
  //ler conteudo do arquivo
  res.json("eduarda-6573019.txt");
});
