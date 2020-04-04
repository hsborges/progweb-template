const knex = require('./node_modules/knex')
const configuration = require('../../knexfile')
const connecton = knex(configuration.development)
module.exports = connecton