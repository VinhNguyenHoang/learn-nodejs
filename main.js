var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    var retText = ''
    res.writeHead(200, {'Content-Type':'text/html'})
    retText += 'URL in browser is: "' + req.url + '"<br/>'

    var params = url.parse(req.url, true).query;
    retText += 'receiving params:<br/>'

    for (const [key, value] of Object.entries(params)) {
        retText += 'key: '+key + ' ,value: '+value + '<br/>'
    }

    res.write(retText)
    res.end()
}).listen(1234)