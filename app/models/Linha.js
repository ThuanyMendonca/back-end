var mongoose = require('mongoose');
    
var linhaSchema = mongoose.Schema({
    linha: {
        type:String,
        required: true
    
    },
    partida: {
        type: String,
        
    },
    dest: {
        type: String
    }
});
//Letra minuscula 
module.exports = mongoose.model('linha', linhaSchema);