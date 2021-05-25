
const https2 = require('http2');
const fs = require('fs');

const options = {
    key: fs.readFileSync('./selfsigned.key'),
    cert: fs.readFileSync('./selfsigned.cert'),
    allowHTTP1: true
}

const server = http2.createSecureServer(options, (req,res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end('ok');
});