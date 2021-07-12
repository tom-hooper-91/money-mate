exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('portfolio').del()
    .then(function () {
      // Inserts seed entries
      return knex('portfolio').insert([
        { id: 1, name: 'Seritage Growth Properties', ticker: 'SRG', buy_price: 11.77, number_shares: 116 },
        { id: 2, name: 'Alibaba group', ticker: 'BABA', buy_price: 227.30, number_shares: 9 },
        { id: 3, name: 'Micron Technologies', ticker: 'MU', buy_price: 54.20, number_shares: 35 }
      ])
    })
}
