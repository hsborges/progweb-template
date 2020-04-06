const connection = require('../Database/conection')

module.exports = {

    async create(request, response) {
        const { name } = request.body

        try {
            const [id] = await connection('categories').insert({ name })
            return response.json({ id })

        } catch (error) {
            return response.json({ erro: "Não foi possível adicionar a categoria" })
        }
    },

    async index(request, response) {
        const categories = await connection('categories').select('*')
        return response.json(categories)
    },

    async delete(request, response) {
        const { id } = request.params

        await connection('categories').where('id', id).delete()
        return response.status(204).send()
    }
}
