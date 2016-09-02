'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  console.log('addr: '+add);
})

app.get('/', function (req, res) {
  res.send('Hello world, this is a new build number 2!!!!!!!\nfrom server : '+add);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
