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
<<<<<<< HEAD
    Passagem.find().populate('cidade_origem').populate('cidade_destino').populate('passageiro').exec( function(err, data) {
=======
    Passagem.find().populate('passageiro').populate('cobrador').populate('cidade_origem').populate('cidade_destino').exec( function(err, data) {
>>>>>>> bc3ebba06fa1f9c4935b614b7314299752d94ad1
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

