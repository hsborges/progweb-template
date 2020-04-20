const connection = require('../database/conection')
module.exports = {

    async addComment(request, response) {
        const { recipe_id, comment } = request.body

        try {
            await connection('comments').insert({
                recipe_id,
                comment
            })
        } catch (e) {
            return response.json({ error: 'não foi possivel adicionar o comentario' })
        }
    },

    async getComments(request, response) {
        const { recipe_id } = request.params
        const comments = await connection('comments').select('*').where('recipe_id', recipe_id)
        return response.json(comments)
    }


}