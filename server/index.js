const config = require('../config');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.listen(config.serverPort, () => {
  console.log(`Server listening on port ${config.serverPort}`)
});