const connection = require('../Database/conection')

module.exports = {

    //função para criar uma nova receita
    async create(request, response) {
        // é necessario passar nome, a receita e um id de categoria 
        // imagem e video são opcionais
        const { name, recipe, image, video, category_id } = request.body

        try {
            //nova receita é adiciaonada ao banco
            const [id] = await connection('recipes').insert({
                    name,
                    recipe,
                    image,
                    video,
                    category_id
                })
                // caso não haja problemas o id da nova receita é retornado
            return response.json({ id })
        } catch (err) {
            //caso haja um erro uma mensagem informando que não foi possivel adicionara a receita
            return response.json({ error: "Não foi possível adicionar receita" })
        }
    },

    //função que retorna todas as receitas do banco
    async index(request, response) {
        const categories = await connection('recipes').select('*')
        return response.json(categories)
    },

    //função que retorna receitas fintradas por uma caregoria
    async filtered(request, response) {
        const { category } = request.params

        const categories = await connection('recipes').select('*').where('category_id', category)
        return response.json(categories)
    },

    //função que deleta uma receita do banco
    async delete(request, response) {
        const { id } = request.params

        await connection('recipes').where('id', id).delete()
        return response.status(204).send()
    }
}