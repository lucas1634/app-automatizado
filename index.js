const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/automatizar', async (req, res) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto('https://example.com'); // Altere para a página que você quer automatizar

  // Exemplo de automação:
  // await page.type('#campo', 'valor');
  // await page.click('#botao');

  await browser.close();
  res.send('Automação executada com sucesso!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
