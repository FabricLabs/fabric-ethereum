const express = require('express')
const app = express()
const port = 3333

let db = require('./libs/db.js')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('./public/atomic.html')
})

app.get('/createOrder', (req,res) => {
  let key = req.query.id;
  let value = {
    maker: req.query.maker,
    originToken: req.query.originToken,
    originAmount: req.query.originAmount,
    targetToken: req.query.targetToken,
    targetAmount: req.query.targetAmount,
    originNet: req.query.originNet,
    targetNet: req.query.targetNet,
  }
  db.set(key, value);
  res.send("success");
})

app.get('/getOrders', (req,res) => {
  res.send(db.load());
})

app.get('/wantOrder', (req,res) => {
  let key = req.query.id;
  let address = req.query.address;
  let value = db.get(key);
  console.log(value);
  value.taker = address;

  db.set(key, value);

  res.send(value);
});

app.get('/setHashOfSecret', (req,res) => {
  let key = req.query.id;
  let hash = req.query.hash;
  let value = db.get(key);
  console.log(value);
  value.hashOfSecret = hash;

  db.set(key, value);

  res.send(value);
})

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
  //treasuryWallet = await startTreasuryWallet();
  //listenForBurnEvents();
})
