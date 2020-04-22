const connection = require('../Database/conection')

module.exports = {
    async databaseStart(request, response) {
        try {
            var name = ["Asiátia", "Brasileira", "Mexicana"]

            name.forEach(
                await connection('categories').insert({
                    name
                })
            )

        } catch (e) {
            return response.json({ error: 'banco já iniciado' })
        }
        return response.status(202)
    }

}