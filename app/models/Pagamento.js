var mongoose = require('mongoose');
    
var pagamentoSchema = mongoose.Schema({
    valor: {
        type:Number
    },
    troco: {
        type: Number
    }
});

module.exports = mongoose.model('pagamento', pagamentoSchema);