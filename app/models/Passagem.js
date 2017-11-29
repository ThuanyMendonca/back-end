//Cria variavel para importar o mongoose
var mongoose = require('mongoose');

//Criar schema usando uma variavel recebendo o mongoose
var passagemSchema = new mongoose.Schema({
    

});

//Exportar a variável do schema
module.exports = mongoose.model('passagem', passagemSchema);