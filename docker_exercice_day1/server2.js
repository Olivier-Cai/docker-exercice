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

axios.get("http://127.0.0.1:4567/")
    .then(response => {
        console.log(response.data, " ", port);
    })
    .catch(error =>{
        console.log(error);
    });

function ping (){
    axios.post("http://127.0.0.1:4567/")
    .then(response => {
        console.log("ping", " ", port);
    })
    .catch(error =>{
        console.log(error);
    });
}

setTimeout(ping,1500);