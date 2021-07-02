const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server1 = "http://127.0.0.1:4567/";
const server2 = "http://127.0.0.1:5372/";

const axios = require('axios');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

axios.get(server1)
  .then(response => {
    console.log("get 1 ",response.data, " ", port);
    pong();
  })
  .catch(error => {
    console.log(error);
});

axios.get(server2)
  .then(response => {
    console.log("get 2 ",response.data, " ", port);
    ping();
  })
  .catch(error => {
    console.log(error);
});

axios.get(server1)
  .then(response => {
    console.log("get 3 ",response.data, " ", port);
    pong();
  })
  .catch(error => {
    console.log(error);
});

function pong (){
  axios.post(server2)
  .then(response => {
  })
  .catch(error => {
    console.log(error);
  });
};

function ping (){
  axios.post(server1)
  .then(response => {
  })
  .catch(error => {
    console.log(error);
  });
};