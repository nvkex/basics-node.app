const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const events = require('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on('log', (code, href) => {
    fs.appendFile(
        path.join(__dirname,'public','log.txt'), 
        `${code}            ${href} \n`, 
        (err) => (err ? console.log(err): null)
    )
});

http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    let filename = "./public" + q.pathname;
    fs.readFile(filename, (err, data) => {
        if (err){
            res.writeHead(400, {'Content-Type': 'text/html'});
            eventEmitter.emit('log', 400, q.href);
            return res.end("404");
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            eventEmitter.emit('log', 200, q.href);
            res.write(data);
            return res.end();
        }
    })
}).listen(3000);