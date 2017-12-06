var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

    var schema = mongoose.Schema({
        login: {
            type: String,
            required: true
        },
        nome:{
            type: String
        },
        email: {
            type: String 
        },
        dataInclusao: {
            type: Date,
            default: Date.now //Preenchimento automático com data/hora atual
        }
    });
    schema.plugin(findOrCreate);
    // return mongoose.model('Usuario', usuarioSchema);

module.exports = mongoose.model('Usuario', schema);