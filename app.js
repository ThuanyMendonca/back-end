var express = require('express');
//vai receber json -> bodyParser
var bodyParser = require('body-parser');
//cors --> acesso aos metodos de requisição
var cors = require('cors');

//chamando o banco
var db = require('./config/database');

//conectando com o banco, passando sua string de conexao
db('mongodb://localhost/passagem_onibus');

//instanciando o express
var app = express();

var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

var passportConfig = require('./config/passport');
passportConfig();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
    //Coloque sua própria frase secreta aqui
    secret: 'Ainda existe amor para recomeçar',
    resave:true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

//Iniciar o cors antes das rotas
app.use(cors());
(function loadRoutes() {
    require('./app/routes/passageiros')(app);
    require('./app/routes/cidades')(app);
    require('./app/routes/pagamentos')(app);
    require('./app/routes/linhas')(app);
    require('./app/routes/auth')(app);
    require('./app/routes/cobradors')(app);
    require('./app/routes/passagems')(app);
})();


app.listen(3000, function() {
    console.log('SERVER RODANDO EM localhost:3000');
});

