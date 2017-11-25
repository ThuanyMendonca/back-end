module.exports = function (app) {
    var controller = require('../controllers/cobradores');

    app.post('/cobradores', controller.inserir);

    app.get('/cobradores', controller.listar);

    ///cobradores é a requisição - :id é o params
    app.delete('/cobradores/:id', controller.excluir);

    app.put('/cobradores/:id', controller.alterar);
    
    // app.get('/cobradores/:id', controller.listarPorId);

    app.get('/cobradores/:id', controller.listarUm);
    // app.post('/cobradores',controller.alterar);
}