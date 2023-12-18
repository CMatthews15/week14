const movieId = require('./findMovie')
const movieList = require('./similarMovie')
const express = require('express');
const app = express();
const fetch = require('node-fetch');
let port= 3000;




app.listen(port, () =>
console.log(`Server is running on port ${port}`))