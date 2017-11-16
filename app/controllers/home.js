module.exports = function(){

    var controller = {}; //Objeto vazio
    // requisição e resposta
    controller.index = function(req, res){
        //Index é uma view, o render renderaliza a index
        res.render('index', {nome: 'Passagem_Onibus'});

    }

    controller.ajuda = function(req, res){
        //Ajuda é uma view, o render renderaliza a ajuda
        res.render('ajuda');
    }

    controller.login = function(req, res){
        //Login é uma view, o render renderaliza o login
        res.render('login', {
            nome: 'Login', 
            mensagem: 'Informe seus dados para autenticação!'
        });

    }

    return controller;
}