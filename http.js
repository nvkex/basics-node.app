const http = require('http');
const url = require('url');

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let q = url.parse(req.url, true);
    res.write(JSON.stringify(q));
    res.end();
}).listen(3000);