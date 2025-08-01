const requireDir = require('http');

const server = http.createServer((req, res) => {
  console.log("Received a request");

});

server.listen(5000, () => {
  console.log("Server is listening on port 3000");
});