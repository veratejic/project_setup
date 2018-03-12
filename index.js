
var nodemon = require('nodemon');
var path = require('path');

nodemon(
    {
        script: path.join(__dirname, 'server', 'server.js'),
        watch: ['server/*']
    }
).on('restart', function(){
    console.log('server restarted');
});