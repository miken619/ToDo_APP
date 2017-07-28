const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(parser.urlencoded({ extended: true }))
   .use(parser.json())
   .use(express.static(path.join(__dirname, '../static')));



app.listen(PORT, err => {
  if (err) {
    console.log('The server encounter an error', err);
  } else {
    console.log('Server success'); 
  }
});

