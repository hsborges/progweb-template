const connection = require('../Database/conection')

module.exports = {
    async create(request, response) {
        const { name } = request.body
        const user_id = require.headers.authorization
        try {
            const [id] = await connection('folders').insert({
                name,
                user_id
            })
            return response.json({ id })
        } catch (err) {
            return response.json({ error: "Não foi possivel criar pasta" })
        }
    },

    async index(request, response) {
        const folders = await connection('folders').select('*')
        return response.json(folders)
    },

    async delete(request, response) {
        const { id } = request.parms

        await connection('folders').where('id', id).delete()
        return response.status(204).send(s)
    },

    async recipeOnFolder(request, response) {
        const { folder_id, recipe_id } = request.body

        try {
            const [id] = await connection('folder_content').insert({
                folder_id,
                recipe_id
            })
            return response.json({ id })
        } catch (err) {
            return response.json({ error: "Não foi possivel adicionar a receita na pasta" })
        }

    }
}


