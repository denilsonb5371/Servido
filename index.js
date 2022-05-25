const http = require ('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req,res)=>{
fs.readFile('index.html',(err,data)=>{



})


})

server.listen(port,hostname,()=>{
console.log('Servido está rodando!');



})