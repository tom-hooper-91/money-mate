const config = require('./knexfile').development
const connection = require('knex')(config)

module.exports = {
  getPortfolio,
  addPosition,
  editPosition
}

function getPortfolio (db = connection) {
  return db('portfolio')
    .select()
}

function addPosition (position, db = connection) {
  return db('portfolio')
    .insert(position)
}

function editPosition (position, db = connection) {
  console.log('DB - position is ', position)
  return db('portfolio')
    .where('id', position.id)
    .update(position)
}
