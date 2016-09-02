'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();


app.get('/', function (req, res) {

	require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  console.log('addr: '+add);
    res.send('addr: '+add);
})
	
  res.send('Hello world, this is a new build number 2!!!!!!!\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
