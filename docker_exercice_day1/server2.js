const http = require('http');

const hostname = '127.0.0.1';
const port = 5372;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('ping');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const axios = require('axios');

const server3 = "http://127.0.0.1:8080/";

axios.get(server3)
  .then(response => {
    console.log("get ",response.data, " ", port);
    setTimeout(ping,1500);
  })
  .catch(error => {
    console.log(error);
});

function ping (){
    axios.post(server3)
    .then(response => {
        console.log("post ",response.data, " ", port);
    })
    .catch(error =>{
        console.log(error);
    });
};