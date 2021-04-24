const User = require('../userModel/userModel')
const bcrypt = require('bcrypt')

class userServices {
   async createUser(data) {

        const hash = await bcrypt.hash(data.clave,10);
        data.clave = hash;


        const newUser = new User(data);
        return newUser.save()
    }

    getLogin(nombre) {
        const query = User.findOne({nombre : nombre}).exec();
        return query;
    }
    
    getUsers(nombre) {
        const query = User.findOne({nombre : nombre}).exec()
        return query
    }
}

module.exports = userServices;