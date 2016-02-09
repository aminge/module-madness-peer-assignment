var http = require('http');
var balance = require('./balance');

http.createServer(function(req, res){
    res.writeHead(200);
    res.write(balance.printBalance() + balance.randomMoney(100, 1000000) + ' ');
    res.end();
}).listen(3000);

console.log('Listening on port 3000');