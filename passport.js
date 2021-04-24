const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')
const userServices = require('./userServices/userServices')
const UserInstance = new userServices()

passport.use(
    new LocalStrategy({
        usernameField: "nombre",
        passwordField: "clave"
    },
        async (username, clave, cb) => {
            try {
            const userData = await UserInstance.getLogin(username);
            console.log(userData);
            
            if (!userData) {
                console.log("este usuario no existe",1);
                return cb(null, false)
            }
            const compare = await bcrypt.compare(clave,userData.clave)

                if (!compare) {
                    console.log("La contraseña no coincide",2);
                   return cb(null, false)
                } else {
                    console.log(3)
                   return cb(null, userData)
                }
            } catch (err) {
                console.log(err,4)
            }
        

        }))

passport.serializeUser(
    (user,cb) => {
    cb(null,user.nombre)
});

passport.deserializeUser( 
    async (nombre,cb) => {
    const data = await UserInstance.getLogin(nombre)
    cb(null,data)
})

