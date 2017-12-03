var mongoose = require('mongoose');
var Passagem = require('../models/Passagem');

module.exports = {
    inserir,
    listar,
    listarUm,
    alterar,
    excluir
}

function inserir(req ,res) {
    new Passagem(req.body).save( function(err, data) {
        if(err)
            return res.json(err);

        res.json(data);
    });
}

function listar(req, res) {
    Passagem.find().populate('cidade_origem').populate('cidade_destino').populate('nome').populate('cpf').populate('valor').populate('nome_cobrador').populate('linha').exec( function(err, data) {
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
            res.status(404).json('Recurso não encontrado para atualizar');
         }
      );

   }

