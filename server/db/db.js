const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPortfolio,
  addPosition,
  editPosition,
  deletePosition
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
  return db('portfolio')
    .where('id', position.id)
    .update(position)
}

function deletePosition (id, db = connection) {
  return db('portfolio')
    .where('id', id)
    .del()
}
