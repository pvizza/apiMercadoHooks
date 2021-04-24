class userController {
    constructor(userServices) {
        this.userServices = userServices
    }

        async getUsers(req, res) {
            
                const users = await this.userServices.getUsers(req.params.nombre)
                return res.json(users)

            }

    async createUser(req, res) {
        const { body } = req;
        console.log(body)

        

        if (body && body.clave && body.apellido && body.clave && body.email) {
                     try {
                        const clave = body.clave.toLowerCase();
                        const apellido = body.apellido.toLowerCase()
                        const email = body.email.toLowerCase()

                 const user = await this.userServices.createUser({...body, clave, apellido,email});
                 console.log(user, 1);
                 res.status(200).send('El usuario ha sido creado')
                } catch (err) {
                    res.status(404).send('Los datos cargados no son correctos')
                    console.log(err)
                }    
        } else {
            res.status(401).send('Faltan datos')
            
        }
    }


}

module.exports = userController;