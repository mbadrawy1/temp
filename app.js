const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is my short story");
  } else {
    res.end(`<h1>Oops!</h1> 
    <p>Page not found</p>
    <a href="/">Back to home</a>`);
  }
});

server.listen(5000);

const lodash = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = lodash.flattenDeep(items);
console.log(newItems);
