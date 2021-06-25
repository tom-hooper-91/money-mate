const config = require('./knexfile').development
const connection = require('knex')(config)

module.exports = {
  getPortfolio
}

function getPortfolio (db = connection) {
  return db('portfolio')
    .select()
}
