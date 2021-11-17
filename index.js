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
     