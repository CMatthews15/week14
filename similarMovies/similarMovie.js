 //const http = require('https');
 
 const express = require('express');
 const app = express();
 const fetch = require('node-fetch');
 let movieID= require('./findMovie');
let port= 4000;



 const options = {
   method: 'GET',
   headers: {
     accept: 'application/json',
     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjFmNTZhYjc5NTRlNDkxYjM2YzY4NjNhZjU0NjIzNCIsInN1YiI6IjY1NzlmMDU3ZWEzOTQ5MDBlMWU3ZmE1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.23EiUgbFFffTCwotWXbgbsQPduSVzfWFqqk4xJXjWtU'
   }
 };
 

  async function similarMovie(){
    const id = await movieID()
    const url = `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`;

 // the fetch function is used 
 return fetch(url, options)
   .then(res => res.json())
   .then(json => console.log(json.results[0]
    ,json.results[1],json.results[2],json.results[3]))
   .catch(err => console.error('error:' + err));
 
   
 }
 
 module.exports = similarMovie