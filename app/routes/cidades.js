module.exports = function (app) {
    var controller = require('../controllers/cidades');

    app.post('/cidades', controller.inserir);

    app.get('/cidades', controller.listar);

    ///cidades é a requisição - :id é o params
    app.delete('/cidades/:id', controller.excluir);

    app.put('/cidades/:id', controller.alterar);
    
    // app.get('/cidades/:id', controller.listarPorId);

    app.get('/cidades/:id', controller.listarUm);
    // app.post('/cidades',controller.alterar);
}