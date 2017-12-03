//Cria variavel para importar o mongoose
var mongoose = require('mongoose');

//Criar schema usando uma variavel recebendo o mongoose
var passagemSchema = new mongoose.Schema({
    nome:{
        type: mongoose.Schema.ObjectId,
        ref: 'passageiro'
    },
    cpf:{
        type: mongoose.Schema.ObjectId,
        ref: 'passageiro'
    },
    valor:{
        type: mongoose.Schema.ObjectId,
        ref:'pagamento'
    },
    nome_cobrador:{
        type: mongoose.Schema.ObjectId,
        ref: 'cobrador'
    },
    linha:{
        type:mongoose.Schema.ObjectId,
        ref: 'linha'
    },
    cidade_origem:{
        type: mongoose.Schema.ObjectId,
        ref: 'cidade'
    },
    cidade_destino:{
        type: mongoose.Schema.ObjectId,
        ref: 'cidade'
    },
    data:{
        type:mongoose.Schema.ObjectId,
        ref: 'passageiro'
    }
});

//Exportar a variável do schema
module.exports = mongoose.model('passagem', passagemSchema);