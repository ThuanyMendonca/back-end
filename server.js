// var http = require('http');
// var express = require('./config/express');

// var db = require('./config/database');

// //Conecta-se ao MongoDB no início da aplicação
// //A conexão é feita no servidor localhost,
// //para utilizar o banco de dados passageiros

// (function loadRoutes() {
//     require('./app/routes/passageiros')(app);
// })();

// db('mongodb://localhost/passagem_onibus');
// var app = express();

// /* http.createServer(
//    function(req, res) {
//       res.writeHead(200, {'Content-Type': 'text/plain'});
//       res.end('Este é um servidor WEB escrito em Node.js');
//    }
// ).listen(3000, '127.0.0.1'); */
// //Servidor porta 3000 e IP 127.0.0.1
// // http.createServer(app).listen(
// //     app.get('port'),
// //     app.get('ip'),
// //     //Mensagem de servidor funcionando
// //     function(){
// //         console.log('Express Server escutando na porta ' + app.get('port'));
// //     }
// // );