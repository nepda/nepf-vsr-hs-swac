
var swac = require('swac/server'),
    app = swac.app,
    express = swac.express

app.configure(function () {
    
    app.set('views', __dirname + '/views');
    app.use(express.static(__dirname + '/public'));

    app.use(swac.middleware());

});

swac.area(__dirname + '/app');

var server = module.exports = require('http').createServer(app);

server.listen(9000);
