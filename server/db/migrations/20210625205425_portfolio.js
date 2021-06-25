exports.up = function (knex) {
  return knex.schema.createTable('portfolio', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('ticker')
    table.integer('buy_price')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('portfolio')
}
