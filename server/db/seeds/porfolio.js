exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('portfolio').del()
    .then(function () {
      // Inserts seed entries
      return knex('portfolio').insert([
        { id: 1, name: 'Seritage Growth Properties', ticker: 'SRG', buy_price: 17 },
        { id: 2, name: 'Alibaba group', ticker: 'BABA', buy_price: 227 }
      ])
    })
}
