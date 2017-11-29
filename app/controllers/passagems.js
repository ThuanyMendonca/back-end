var mongoose = require('mongoose');
var Passagem = require('../models/Passagem');

module.exports = {
    //inserir : inserir
    inserir,
    listar,
    listarUm,
    alterar,
    excluir
}

function inserir(req ,res) {
    //criando novo Passagem --> importando schema dos Passagems da models
    new Passagem(req.body).save( function(err, data) {
        if(err)
            return res.json(err);

        res.json(data);
    });
}

function listar(req, res) {
    Passagem.find( function(err, data) {
        if(err)
            return res.json(err);
        
        res.json(data);
    });
}

function listarUm(req, res){
    Passagem.findById(req.params.id, function(err, data){
        if(err)
            return res.json(err);
        res.json(data);
    });
}
function obterUm(req, res){
    Passagem.findById(req.params.id, function(err, data){
        if(err)
            return res.json(err);
        res.json(data);
    });
}

function excluir(req, res){
    var idPassagem = req.params.id;

    Passagem.remove({_id: idPassagem}).exec().then(
        function(){
            res.status(204).end();
        },
        function(erro){
            console.error(erro);
        }
    );

}
function alterar(req, res) {
      var idPassagem = req.params.id;

      Passagem.findByIdAndUpdate(idPassagem, req.body).then(
         function (passagem) {

            res.status(200).json(passagem);
         },
         function (erro) {
            console.error(erro);
            res.status(404).json('Passagem não encontrado para atualizar');
         }
      );
   }
