const http = require('http');

const hostname = '127.0.0.1';
const port = 4567;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('pong');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const axios = require('axios');

axios.post("http://127.0.0.1:5372/")
  .then(response => {
    console.log("pong", " ", port);
  })
  .catch(error => {
    console.log(error);
  });

axios.get("http://127.0.0.1:5372/")
  .then(response => {
    console.log(response.data, " ", port);
  })
  .catch(error => {
    console.log(error);
  });

function pong (){
  axios.post("http://127.0.0.1:5372/")
  .then(response => {
    console.log("pong", " ", port);
  })
  .catch(error => {
    console.log(error);
  });
}

setTimeout(pong,1500);