const connection = require('../Database/conection')

module.exports = {
    async create(request, response) {
        const { name, recipe, image, video, category_id } = request.body

        try {
            const [id] = await connection('recipes').insert({
                name,
                recipe,
                image,
                video,
                category_id
            })
            return response.json({ id })
        } catch (err) {
            return response.json({ error: "Não foi possível adicionar receita" })
        }
    },

    async index(request, response) {
        const categories = await connection('recipes').select('*')
        return response.json(categories)
    },

    async filtered(request, response) {
        const { category } = request.params

        const categories = await connection('recipes').select('*').where('category_id', category)
        return response.json(categories)
    },

    async delete(request, response) {
        const { id } = request.params

        await connection('recipes').where('id', id).delete()
        return response.status(204).send()
    }
}