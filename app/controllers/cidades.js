var mongoose = require('mongoose');
var Cidade = require('../models/Cidade');

module.exports = {
    //inserir : inserir
    inserir,
    listar,
    listarUm,
    alterar,
    excluir
}

function inserir(req ,res) {
    //criando novo Cidade --> importando schema dos Cidades da models
    new Cidade(req.body).save( function(err, data) {
        if(err)
            return res.json(err);

        res.json(data);
    });
}

function listar(req, res) {
    Cidade.find( function(err, data) {
        if(err)
            return res.json(err);
        
        res.json(data);
    });
}

function listarUm(req, res){
    Cidade.findById(req.params.id, function(err, data){
        if(err)
            return res.json(err);
        res.json(data);
    });
}
function obterUm(req, res){
    Cidade.findById(req.params.id, function(err, data){
        if(err)
            return res.json(err);
        res.json(data);
    });
}

function excluir(req, res){
    var idCidade = req.params.id;

    Cidade.remove({_id: idCidade}).exec().then(
        function(){
            res.status(204).end();
        },
        function(erro){
            console.error(erro);
        }
    );

}
function alterar(req, res) {
      var idCidade = req.params.id;

      Cidade.findByIdAndUpdate(idCidade, req.body).then(
         function (cidade) {

            res.status(200).json(cidade);
         },
         function (erro) {
            console.error(erro);
            res.status(404).json('Cidade não encontrado para atualizar');
         }
      );
   }
