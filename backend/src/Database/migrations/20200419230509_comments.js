exports.up = function(knex) {
    return knex.schema.createTable('comment_list', function(table) {
        table.increments()
        table.string('recipe_id').notNullable()
        table.string('comment').notNullable()

        table.foreign('recipe_id').references('id').inTable('users')
    })


};

exports.down = function(knex) {
    return knex.schema.dropTable('follow_list')
};