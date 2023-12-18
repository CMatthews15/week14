 //const http = require('https');
 
const express = require('express');
const app = express();
const fetch = require('node-fetch');
let port= 5000;
let movieTitle= process.argv[2];


const url = `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=1`;
const movieOptions = {
  method: 'GET',
// explain headers

  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjFmNTZhYjc5NTRlNDkxYjM2YzY4NjNhZjU0NjIzNCIsInN1YiI6IjY1NzlmMDU3ZWEzOTQ5MDBlMWU3ZmE1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.23EiUgbFFffTCwotWXbgbsQPduSVzfWFqqk4xJXjWtU'
  }

};

 async function findMovie(){

// the fetch function is used 
return fetch(url, movieOptions)
//  waits for response
  .then(res => res.json()) //turns response to json
  // consoles TITLE/ ID / GENRE ID
  .then(json => console.log(
    json.results[0].id))

     //json.results[0].title,json.results[0].id, json.results[0].genre_ids )) //an array
// if an error, will be logged to console module
  .catch(err => console.error('error:' + err));

  
}


findMovie()



app.listen(port, () =>
console.log(`Server is running on port ${port}`))

module.exports = findMovie.json