const config = require('./knexfile').development
const connection = require('knex')(config)

module.exports = {
  getPortfolio,
  addPosition
}

function getPortfolio (db = connection) {
  return db('portfolio')
    .select()
}

function addPosition (position, db = connection) {
  return db('portfolio')
    .insert(position)
}
