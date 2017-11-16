var mongoose = require('mongoose');
    
var linhaSchema = mongoose.Schema({
    linha: {
        type:String,
        required: true
    
    },
    partida: {
        
        type:String,
        required: true
    },
    dest: {
        type:String,
        required: true
    }
});
//Letra minuscula 
module.exports = mongoose.model('linha', linhaSchema);