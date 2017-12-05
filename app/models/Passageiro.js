var mongoose = require('mongoose');
    
var schema = mongoose.Schema({
    nome:{
        type: String
    },
    cpf: {
        type: String
    },
    celular:{
        type: String
    },
    cidade_origem: {
        type: mongoose.Schema.ObjectId,
        ref: 'cidade'
    },
    cidade_destino: {
        type: mongoose.Schema.ObjectId,
        ref: 'cidade'
    },
    data : {
        type: Date
    }
    // cobrador: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'cobrador'
    // }
    
    // "partida": {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'linha'
    // },
    // "dest": {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'linha'
    // }
});

module.exports = mongoose.model('passageiro', schema);