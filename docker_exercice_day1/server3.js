const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server1 = "http://127.0.0.1:4567/";
const server2 = "http://127.0.0.1:5372/";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('pong');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
