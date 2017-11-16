module.exports = function(app){
    //Fazer o require do controller da cidade
    var controller = require('../controllers/cidades');

    //Inserindo
    app.post('/cidades', controller.inserir);
    //Listando
    app.get('/cidades', controller.listar);
    app.get('/cidades/:id', controller.listarPorId);
    //Removendo
    app.delete('/cidades/:id', controller.remover);
    //Alterando
    app.put('/cidades/:id', controller.alterar);
}