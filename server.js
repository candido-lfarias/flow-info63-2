const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
app.use(express.json());



app.get('/api/andre-gschuh', (req, res) => {

  fs.readFile('./arquivo.txt', 'utf-8', (err, data) => {
    if(err){
      return res.status(500).json({error: "Erro ao ler o arquivo"})
    }

    res.json({conteudo: data});
  });

});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});