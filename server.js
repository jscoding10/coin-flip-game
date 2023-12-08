// Import http module
const http = require('http');
// Import file system module
const fs = require('fs')
// Import URL module
const url = require('url');
// Import figlet
const figlet = require('figlet'); // npm install figlet

// Create server 
const server = http.createServer((req, res) => {
  // Pathname of URL as variable page
  const page = url.parse(req.url).pathname;
  // console.log(page);

  // Request sent to '/' pathname - read index.html file
  if (page == '/') {
    fs.readFile('index.html', function(err, data) { 
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });

  // Request sent to '/api' pathname
  } else if (page == '/api') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        // Variable (Flip Result) to store Heads or Tails based on random number generated
        let flipResult = Math.ceil(Math.random() * 2) === 1 ? 'Heads' : 'Tails'
        // Makes an object with the above variable with key of flip
        const objToJson = {
          flip: flipResult
        }
        // Sends response as object in .json format 
        res.end(JSON.stringify(objToJson));
  } 
  // Read styles.css
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
    
  } 
  // Read coin.png
  else if (page == '/coin.png'){
    fs.readFile('coin.png', function(err, data) {
      res.write(data);
      res.end();
    });
  } 
  // Read main.js 
  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  // Error if URL pathname not specified above
  else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

// Use port 8000 for server
server.listen(8000);