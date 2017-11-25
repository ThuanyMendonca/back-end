var mongoose = require('mongoose');
    
var schema = mongoose.Schema({
    nome:{
        type: String
    },
    email: {
        type: String
    }
    
});

module.exports = mongoose.model('cobrador', schema);