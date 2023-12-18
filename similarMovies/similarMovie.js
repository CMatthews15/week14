 //const http = require('https');
 
 const express = require('express');
 const app = express();
 const fetch = require('node-fetch');
 let movieID= require('./findMovie');
let port= 4000;
movieID=299536;



 const url = `https://api.themoviedb.org/3/movie/${movieID}/similar?language=en-US&page=1`;
 const options = {
   method: 'GET',
   headers: {
     accept: 'application/json',
     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjFmNTZhYjc5NTRlNDkxYjM2YzY4NjNhZjU0NjIzNCIsInN1YiI6IjY1NzlmMDU3ZWEzOTQ5MDBlMWU3ZmE1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.23EiUgbFFffTCwotWXbgbsQPduSVzfWFqqk4xJXjWtU'
   }
 };
 

  async function similarMovie(){
 
 // the fetch function is used 
 return fetch(url, options)
   .then(res => res.json())
   .then(json => console.log(json.results[0]))
    //,json.results[1],json.results[2],json.results[3]))
   .catch(err => console.error('error:' + err));
 
   
 }
 
 
 similarMovie()
 
 
 
 app.listen(port, () =>
 console.log(`Server is running on port ${port}`))
 
 module.exports = similarMovie.json