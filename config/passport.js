var passport = require('passport');
var mongoose = require('mongoose');
var Usuario = require('../app/models/Usuario');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function(){

    var Usuario = mongoose.model('Usuario');

    var strategy = new GoogleStrategy({
        clientID: '134798337569-qted2p3cg9hda2mr3f0e71ub6itardff.apps.googleusercontent.com',
        clientSecret: 'EbdJD3-WJqqlOjgLba0dQ2Jg',
        callbackURL: 'http://localhost:3000/auth/google/callback',
        scope: 'profile email'
    },
        function(accessToken, refreshToken, profile, done){
            // console.log(profile);
            // return done(null, profile);
            var userEmail = '';
            if(profile.email && profile.emails.length > 0){
                userEmail = profile.emails[0].value;
            }
            Usuario.findOrCreate(
                {login: profile.id },
                {nome:profile.displayName },
                {email: userEmail},
                function(erro, usuario){
                    if(erro){
                        console.log(erro);
                        return done(erro);
                    }
                    return done(null /*sem erros*/, usuario);
                }
            );
        }
    );
    passport.use(strategy);

    //Serializa no cookie apenas o _id do usuário
    passport.serializeUser(function(usuario, pronto){
        pronto(null, usuario._id);
    });

    //Disserializa o _id do usuário a partir do cookie
    passport.deserializeUser(function(id,pronto){
        Usuario.findById(id).exec().then(
            function(usuario){
                pronto(null, usuario);
            }
        )
    });
}
