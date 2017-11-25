var mongoose = require('mongoose');
var Passageiro = require('../models/Passageiro');

module.exports = {
    //inserir : inserir
    inserir,
    listar,
    listarUm,
    alterar,
    excluir
}

function inserir(req ,res) {
    //criando novo passageiro --> importando schema dos passageiros da models
    new Passageiro(req.body).save( function(err, data) {
        if(err)
            return res.json(err);

        res.json(data);
    });
}

function listar(req, res) {
    Passageiro.find().populate('cidade_origem').populate('cidade_destino').exec( function(err, data) {
        if(err)
            return res.json(err);
        
        res.json(data);
    });
}

function listarUm(req, res){
    Passageiro.findById(req.params.id, function(err, data){
        if(err)
            return res.json(err);
        res.json(data);
    });
}
function obterUm(req, res){
    Passageiro.findById(req.params.id, function(err, data){
        if(err)
            return res.json(err);
        res.json(data);
    });
}

function excluir(req, res){
    var idPassageiro = req.params.id;

    Passageiro.remove({_id: idPassageiro}).exec().then(
        function(){
            res.status(204).end();
        },
        function(erro){
            console.error(erro);
        }
    );

}
function alterar(req, res) {
      var idPassageiro = req.params.id;

      Passageiro.findByIdAndUpdate(idPassageiro, req.body).then(
         function (passageiro) {

            res.status(200).json(passageiro);
         },
         function (erro) {
            console.error(erro);
            res.status(404).json('Recurso não encontrado para atualizar');
         }
      );

   }

