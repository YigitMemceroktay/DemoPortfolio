var http = require('http');
var fs = require('fs');
http.createServer((req, res) => {
   
    if(req.url == '/') {
        fs.readFile('./basicproject/index.html', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();              
          }); 
    } else if(req.url == '/contact') {
        fs.readFile('./basicproject/contact_me.html', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();              
          });
    }  else if(req.url == '/about') {
        fs.readFile('./basicproject/about.html', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();              
          });
    }  else  {
        fs.readFile('./basicproject/404.html', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();              
          });
    } 
    
}).listen(8080);