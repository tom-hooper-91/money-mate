exports.up = function (knex) {
  return knex.schema.createTable('portfolio', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('ticker')
    table.decimal('buy_price')
    table.decimal('number_shares')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('portfolio')
}
