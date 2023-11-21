const requestPromise = require('request-promise');
const http = require('http');


const port = 8080;

const server = http.createServer((req, res) =>{

    const url = 'https://www.netflix.com/np/'

    if(req.url === "/"){

     requestPromise(url)
      .then((html) =>{
           res.writeHead(200, {'Content-Type' : 'text/html'})
           res.write(html);
           res.end()
         })
        .catch((error) =>{
          res.writeHead(500, {'Content-Type' : 'text/text'})
          res.write("Error in data sending")
          res.end()
         })
    }else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Not Found');
        res.end();
      }
})

server.listen(port, () =>{ console.log(`Server is listening ${port} `) })

