//var Controller = require('../controllers/home');

//var controller = Controller();

module.exports = function(app){

    //var controller = app.controllers.home;

    //Chama a redenrização da index
    app.get('/', controller.index);
    app.get('/index', controller.index);
    //Rota Ajuda
    app.get('/ajuda', controller.ajuda);
    //Rota Login
    app.get('/login', controller.login);

}