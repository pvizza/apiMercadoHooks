const mongoose = require('mongoose');
const userSchema = mongoose.Schema (
    {
        nombre: {
            type:String,
            required: true
        },

        apellido: {
            type:String,
            required: true
        },

        clave: {
            type:String,
            required:true
        },

        email: {
            type:String,
            required:true
        }

    }
)

module.exports = mongoose.model("User", userSchema)