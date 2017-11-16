module.exports = function (app) {
    var controller = require('../controllers/linhas');

    app.post('/linhas', controller.inserir);

    app.get('/linhas', controller.listar);

    ///linhas é a requisição - :id é o params
    app.delete('/linhas/:id', controller.deletar);

    // app.put('/linhas/:id', controller.alterar);

    app.get('/linhas/:id', controller.listarUm);
}

// function(err, data) {

// }

// (err, data) => {

// }




