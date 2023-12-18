 //const http = require('https');
 
 const express = require('express');
 const app = express();
 const fetch = require('node-fetch');
 let port= 5000;
 
 
  
  async function similarMovie(){

 let movieTitle= 'limitless';
 
 async function findMovie(){
 let url = `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=1`;
 const movieOptions = {
   method: 'GET',
 // explain headers
 
   headers: {
     Accept: 'application/json',
     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjFmNTZhYjc5NTRlNDkxYjM2YzY4NjNhZjU0NjIzNCIsInN1YiI6IjY1NzlmMDU3ZWEzOTQ5MDBlMWU3ZmE1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.23EiUgbFFffTCwotWXbgbsQPduSVzfWFqqk4xJXjWtU'
   }
 
 };
 findMovie()
 
 
 // the fetch function is used 
 return fetch(url, movieOptions)
 //  waits for response
   .then(res => res.json()) //turns response to json
   // consoles TITLE/ ID / GENRE ID
   .then(json => console.log(
     json.results[0].id))
 
      //json.results[0].title,json.results[0].id, json.results[0].genre_ids )) //an array
 // if an error, will be logged to console module
   .catch(err => console.error('error:' + err));}
 
     movieID = 6789;
 
 
 



  

  url = `https://api.themoviedb.org/3/movie/${movieID}/similar?language=en-US&page=1`;
 const options = {
   method: 'GET',
   headers: {
     accept: 'application/json',
     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjFmNTZhYjc5NTRlNDkxYjM2YzY4NjNhZjU0NjIzNCIsInN1YiI6IjY1NzlmMDU3ZWEzOTQ5MDBlMWU3ZmE1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.23EiUgbFFffTCwotWXbgbsQPduSVzfWFqqk4xJXjWtU'
   }
 };


 
 // the fetch function is used 
 return fetch(url, options)
   .then(res => res.json())
   .then(json => console.log(json.results[0]))
    //,json.results[1],json.results[2],json.results[3]))
   .catch(err => console.error('error:' + err));
 
   
 }
 
 
 similarMovie()


 console.log(similarMovie('brave'))

 app.listen(port, () =>
console.log(`Server is running on port ${port}`))