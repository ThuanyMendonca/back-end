module.exports = function (app) {
    var controller = require('../controllers/pagamentos');

    app.post('/pagamentos', controller.inserir);

    app.get('/pagamentos', controller.listar);

    ///pagamentos é a requisição - :id é o params
    app.delete('/pagamentos/:id', controller.excluir);

    app.put('/pagamentos/:id', controller.alterar);
    
    // app.get('/pagamentos/:id', controller.listarPorId);

    app.get('/pagamentos/:id', controller.listarUm);
    // app.post('/pagamentos',controller.alterar);
}