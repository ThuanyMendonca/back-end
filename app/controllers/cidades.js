var mongoose = require('mongoose');
var Cidade = require('../models/Cidade');

module.exports = {
    inserir,
    listar,
    listarPorId,
    remover,
    alterar
}
//Função inserir
function inserir(req, res){
    //Para inserir cria um novo objeto da classe Cidade
    new Cidade(req.body).save(function(err,data){
        if(err)
            return res.jason(err);
        res.json(data); 
    });
}
//Função listar
function listar(req, res){
    //Para listar usa o find e usa o callback
    Cidade.find(function(err,data){
        if(err)
            return res.json(err);
        res.json(data);
    });
}
//Listando por ID
function listarPorId(req, res){
    //Para listar usa o find e usa o callback
    Cidade.findOne(req.params.id, function(err,data){
        if(err)
            return res.json(err);
        res.json(data);
    });
}
//Função remover
function remover(req, res){
    //Remover por id usa o findByIdAndRemove
    Cidade.findByIdAndRemove(req.params.id, function(err, data){
        if(err)
            return res.json(err);
        res.json({
            Message: 'Deletado com sucesso!'
        });
    });
}
//Função alterar
function alterar(req, res){
    //Alterar por id usa o 
    Cidade.findByIdAndUpdate(req.params.id, function(err,data){
        if(err)
            return res.json(err);
        res.json({
            Message: 'Alterado com sucesso!'
        });
    })
}
