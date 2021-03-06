var mongoose = require('mongoose');
var Pagamento = require('../models/Pagamento');

module.exports = {
    //inserir : inserir
    inserir,
    listar,
    listarUm,
    alterar,
    excluir
}

function inserir(req ,res) {
    //criando novo pagamento --> importando schema dos pagamentos da models
    new Pagamento(req.body).save( function(err, data) {
        if(err)
            return res.json(err);

        res.json(data);
    });
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
function obterUm(req, res){
    Pagamento.findById(req.params.id, function(err, data){
        if(err)
            return res.json(err);
        res.json(data);
    });
}

function excluir(req, res){
    var idPagamento = req.params.id;

    Pagamento.remove({_id: idPagamento}).exec().then(
        function(){
            res.status(204).end();
        },
        function(erro){
            console.error(erro);
        }
    );

}
function alterar(req, res) {
      var idPagamento = req.params.id;

      Pagamento.findByIdAndUpdate(idPagamento, req.body).then(
         function (pagamento) {

            res.status(200).json(pagamento);
         },
         function (erro) {
            console.error(erro);
            res.status(404).json('Pagamento não encontrado para atualizar');
         }
      );

   }
