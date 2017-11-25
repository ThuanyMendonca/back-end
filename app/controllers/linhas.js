var mongoose = require('mongoose');
var Linha = require('../models/Linha');

module.exports = {
    //inserir : inserir
    inserir,
    listar,
    listarUm,
    alterar,
    excluir
}

function inserir(req ,res) {
    //criando novo Linha --> importando schema dos Linhas da models
    new Linha(req.body).save( function(err, data) {
        if(err)
            return res.json(err);

        res.json(data);
    });
}


function listar(req, res) {
    Linha.find( function(err, data) {
        if(err)
            return res.json(err);
        
        res.json(data);
    });
}

function listarUm(req, res){
    Linha.findById(req.params.id, function(err, data){
        if(err)
            return res.json(err);
        res.json(data);
    });
}

function excluir(req, res){
    var idLinha = req.params.id;

    Linha.remove({_id: idLinha}).exec().then(
        function(){
            res.status(204).end();
        },
        function(erro){
            console.error(erro);
        }
    );
}

function alterar(req, res) {
      var idLinha = req.params.id;

      Linha.findByIdAndUpdate(idLinha, req.body).then(
         function (linha) {

            res.status(200).json(linha);
         },
         function (erro) {
            console.error(erro);
            res.status(404).json('Linha não encontrada para atualizar');
         }
      );

   }

