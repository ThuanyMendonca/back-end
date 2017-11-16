//Cria variavel para importar o mongoose
var mongoose = require('mongoose');

//Criar schema usando uma variavel recebendo o mongoose
var cidadeSchema = new mongoose.Schema({
    cidade: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    } 

});

//Exportar a variável do schema
module.exports = mongoose.model('cidade', cidadeSchema);