module.exports = function (app) {
    var controller = require('../controllers/passageiros');

    app.post('/passageiros', controller.inserir);

    app.get('/passageiros', controller.listar);

    ///passageiros é a requisição - :id é o params
    app.delete('/passageiros/:id', controller.excluir);

    app.put('/passageiros/:id', controller.alterar);
    
    // app.get('/passageiros/:id', controller.listarPorId);

    app.get('/passageiros/:id', controller.listarUm);
    // app.post('/passageiros',controller.alterar);
}