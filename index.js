var http = require('http')

http.createServer(onRequest).listen(process.env.PORT);
console.log('Server has started');

function onRequest(request, response){
  response.writeHead(200);
  response.write('Hello Noders: RW from Git to Heroku');
  response.end();
}
