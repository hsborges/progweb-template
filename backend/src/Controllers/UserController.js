const connection = require('../database/conection')
const crypto = require('crypto')

module.exports = {
    //função que adiciona um nov usuario ao banco
    async create(request, response) {
        //necessita de nome email e senha
        const { name, email, password, professional } = request.body


        try {
            //adiciona o novo usuario ao banco
            await connection('users').insert({
                name,
                email,
                password,
                professional
            })

            //busca id do usuario
            const id = await connection('users').select('id').where({
                email: email,
                password: password
            }).first()



        } catch (e) {
            //caso haja algum erro é retornado uma mensagem informando que não foi possivel adiconar o usuario
            return response.json({ erro: "não foi possivel registrar o usuario" })
        }

        //TODO read later

        //caso não haja problemas é retornado o id no novo usuário
        return response.json({ id })


    },

    //função que realia o loguin de um usuario
    async login(request, response) {
        //requer email e senha para o loguin
        const { email, password } = request.body
            //procura pelo par email e senha no banco
        const id = await connection('users').select('id').where({
            email: email,
            password: password
        }).first()

        //caso alguma correlação seja encontrada é devolvido o id do usuario que possiu a exata combinação de email e senha
        if (id != null)
            return response.json(id)
        else
        //caso contrario é enviado uma mensagem informando que o usuario não foi encontrado
            return response.json({ erro: "usuario não encontrado" })
    },

    //retorna todos os usuarios registrdos no banco
    async index(request, response) {
        const usuarios = await connection('users').select('*')
        return response.json(usuarios)
    }


}