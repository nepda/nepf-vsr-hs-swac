
var swac = require('swac');

swac.get('/', function (app, done) {
    console.log('ok, get /');

    done.render('index');
});
