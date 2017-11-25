var mongoose = require('mongoose');
var Cobrador = require('../models/Cobrador');

module.exports = {
    //inserir : inserir
    inserir,
    listar,
    listarUm,
    alterar,
    excluir
}

function inserir(req ,res) {
    //criando novo Cobrador --> importando schema dos Cobradors da models
    new Cobrador(req.body).save( function(err, data) {
        if(err)
            return res.json(err);

        res.json(data);
    });
}

function listar(req, res) {
    Cobrador.find( function(err, data) {
        if(err)
            return res.json(err);
        
        res.json(data);
    });
}

function listarUm(req, res){
    Cobrador.findById(req.params.id, function(err, data){
        if(err)
            return res.json(err);
        res.json(data);
    });
}
function obterUm(req, res){
    Cobrador.findById(req.params.id, function(err, data){
        if(err)
            return res.json(err);
        res.json(data);
    });
}

function excluir(req, res){
    var idCobrador = req.params.id;

    Cobrador.remove({_id: idCobrador}).exec().then(
        function(){
            res.status(204).end();
        },
        function(erro){
            console.error(erro);
        }
    );

}
function alterar(req, res) {
      var idCobrador = req.params.id;

      Cobrador.findByIdAndUpdate(idCobrador, req.body).then(
         function (cobrador) {

            res.status(200).json(cobrador);
         },
         function (erro) {
            console.error(erro);
            res.status(404).json('Cobrador não encontrado para atualizar');
         }
      );

   }
