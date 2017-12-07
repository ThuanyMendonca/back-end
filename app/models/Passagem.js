//Cria variavel para importar o mongoose
var mongoose = require('mongoose');

//Criar schema usando uma variavel recebendo o mongoose
var passagemSchema = new mongoose.Schema({
    passageiro:{
        type: mongoose.Schema.ObjectId,
        ref: 'passageiro',
        require: true
    },
    valor:{
        type: Number
    },
    cobrador:{
        type: mongoose.Schema.ObjectId,
        ref: 'cobrador',
        require: true
    },
    // linha:{
    //     type:mongoose.Schema.ObjectId,
    //     ref: 'linha'
    // },
    cidade_origem:{
        type: mongoose.Schema.ObjectId,
        ref: 'cidade'
    },
    cidade_destino:{
        type: mongoose.Schema.ObjectId,
        ref: 'cidade'
    },
    data:{
        type: Date
    }
});

//Exportar a variável do schema
module.exports = mongoose.model('passagem', passagemSchema);