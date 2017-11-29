module.exports = function (app) {
    var controller = require('../controllers/passagems');

    app.post('/passagems', controller.inserir);

    app.get('/passagems', controller.listar);

    ///passagems é a requisição - :id é o params
    app.delete('/passagems/:id', controller.excluir);

    app.put('/passagems/:id', controller.alterar);
    
    // app.get('/passagems/:id', controller.listarPorId);

    app.get('/passagems/:id', controller.listarUm);
    // app.post('/passagems',controller.alterar);
}