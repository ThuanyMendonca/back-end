var mongoose = require('mongoose');
var Pagamento = require('../models/Pagamento');

module.exports = {
    //inserir : inserir
    inserir,
    listar,
    listarUm,
    // alterar,
    deletar
}

function inserir(req ,res) {
    //criando novo Pagamento --> importando schema dos Pagamentos da models
    new Pagamento(req.body).save( function(err, data) {
        if(err)
            return res.json(err);

        res.json(data);
    })
}


function listar(req, res) {
    Pagamento.find( function(err, data) {
        if(err)
            return res.json(err);
        
        res.json(data);
    });
}

function listarUm(req, res){
    Pagamento.findById(req.params.id, function(err, data){
        if(err)
            return res.json(err);
        res.json(data);
    });
}

function deletar(req, res) {
    Pagamento.findByIdAndRemove(req.params.id, function(err, data) {
        if(err)
            return res.json(err);

        res.json({
            message: 'Deletado com Sucesso!'
        });
    });
}

// function alterar(req, res){
//     Pagamento.findByIdAndUpdate(req.params.id, {
//         //Atributo nome recebendo atributo nome que vem da requisição
//         nome: req.body.nome,
//         cpf: req.body.cpf,
//         celular: req.body.celular
//     }, function(err, data){
//         if(err)
//             return res.json(err);
        
//         res.json({
//             message: 'Alterado com Sucesso!'
//         });
//     });
// }

