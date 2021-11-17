const listOfThings = require('./module');
console.log(listOfThings);
listOfThings.Player
console.log(listOfThings.Player);

const fs = require('fs');
    fs.readFile('./hunter.txt','utf-8',function(err, data){
    if(err){
        console.log('there is an error!!!')
    }else{console.log(data)}
})
const http = require('http');
     http.createServer((req, res) => {
        res.write('Hello World');
        res.end();
     })
     .listen(8000);
     const axios = require ('axios');

     const myModule = require ('./module');
     
     myModule.sei1025
     console.log(myModule.sei1025);
     
     const arrayLength= myModule.sei1025.length
     for(let i = 0; i < arrayLength; i++){
     i = myModule.sei1025[i]
     let username = i
     axios.get('https://docs.github.com/rest/reference/users#'+username)
      .then(function(response){
         console.log(response.data);
     })
     .catch(err => {
         console.log(err);
      })
     }
     axios.get('https://docs.github.com/rest/reference/users#dazingpluto')
     
