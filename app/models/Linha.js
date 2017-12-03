var mongoose = require('mongoose');
    
var linhaSchema = mongoose.Schema({
    linha: {
        type:String,
        required: true
    
    },
    // partida: {
    //     type: String,
        
    // },
    // dest: {
    //     type: String
    // }
    cidade_origem: {
        type: mongoose.Schema.ObjectId,
        ref: 'cidade'
    },
    cidade_destino: {
        type: mongoose.Schema.ObjectId,
        ref: 'cidade'
    }
});
//Letra minuscula 
module.exports = mongoose.model('linha', linhaSchema);