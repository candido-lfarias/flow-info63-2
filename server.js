const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const fs = require('fs');
const port = 3000;


app.use(express.json());


app.get('/api/version', (req, res) => {
  res.json({ version: '1.0.0' });
});

app.get('/api/fabio-6385601', async (req, res) => {
  const fs = require('fs').promises;

  try {
    const data = await fs.readFile('fabio-6385601.txt', 'utf-8');
    res.json(data);
  } catch (error) {
    console.error('Error reading the file:', error);
    res.status(500).json({ error: 'Failed to read the file' });
  }
});

app.get('/api/isadora-gularte', async (req, res) => {
  const fs = require('fs') .promisses
  const arquivo = await fs.readFile('isadora-gularte.txt', 'utf8');
  res.json(arquivo)
});

app.get('/api/valentina', async (req, res) => {
  const fs = require('fs').promises;
  const data = await fs.readFile('valentina.txt', 'utf-8');
  res.json(data);
});


app.get('/api/arthur-6575867', async (req, res) => {
  const fs = require('fs').promises;
  const arquivo = await fs.readFile('arthur-6575867.txt', 'utf8')
  res.json(arquivo);
  });
  


app.get('/api/pedro-hpdoliveira6', async (req, res) => {
  const fs = require('fs').promises;
  const data = await fs.readFile('pedro-hpdoliveira6.txt', 'utf8');
  res.json(JSON.parse(data));
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



app.get('/api/isabella-dedrosa', async (req, res) => {
  const fs = require ('fs').promises;
  const data = await fs.readFile ('isabella-dedrosa.txt', 'utf-8')

app.get('/api/bruno-6575868', async (req, res) => {
  const fs = require ('fs').promises;
  const data = await fs.readFile('bruno-6575868.txt', 'utf-8')
  res.json(data);
});


app.get('/api/vinicius-6569395', async (req, res) => {
  const fs = require('fs').promises;
  const arquivo = await fs.readFile('vinicius-6569395.txt', 'utf8')
    res.json(arquivo);
  });




  res.json(JSON.parse(data));
})


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});



app.get('/api/eduarda-6573019', (req, res) => {
  //ler conteudo do arquivo
  res.json("eduarda-6573019.txt");
});

