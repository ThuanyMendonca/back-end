var mongoose = require('mongoose');
var Linha = require('../models/Linha');

module.exports = {
    //inserir : inserir
    inserir,
    listar,
    listarUm,
    // alterar,
    deletar
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

function deletar(req, res) {
    Linha.findByIdAndRemove(req.params.id, function(err, data) {
        if(err)
            return res.json(err);

        res.json({
            message: 'Deletado com Sucesso!'
        });
    });
}

/*function alterar(req, res){
    Linha.findByIdAndUpdate(req.params.id, {
        //Atributo nome recebendo atributo nome que vem da requisição
        nome: req.body.nome,
        cpf: req.body.cpf,
        celular: req.body.celular
    }, function(err, data){
        if(err)
            return res.json(err);
        
        res.json({
            message: 'Alterado com Sucesso!'
        });
    });
}*/


// async function inserir(req, res) {
//     var x = await new Linha(req.body);
//     x.save();
// }
