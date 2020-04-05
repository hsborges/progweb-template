const connection = require('../database/conection')
const crypto = require('crypto')

module.exports = {
    async create(request, response) {
        const { name, email, password } = request.body

        const id = crypto.randomBytes(4).toString('HEX')

        try {
            await connection('users').insert({
                id,
                name,
                email,
                password
            })
            return response.json({ id })
        } catch (e) {
            return response.json({ erro: "não foi possivel registrar o usuario" })
        }


    },

    async login(request, response) {
        const { email, password } = request.body
        const id = await connection('users').select('id').where({
            email: email,
            password: password
        }).first()

        if (id != null)
            return response.json(id)
        else
            return response.json({ erro: "usuario não encontrado" })
    },

    async index(request, response) {
        const ongs = await connection('users').select('*')
        return response.json(ongs)
    }


}