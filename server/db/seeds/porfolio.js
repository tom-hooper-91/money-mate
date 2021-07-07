exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('portfolio').del()
    .then(function () {
      // Inserts seed entries
      return knex('portfolio').insert([
        { id: 1, name: 'Seritage Growth Properties', ticker: 'SRG', buy_price: 11.77, number_shares: 116 },
        { id: 2, name: 'Alibaba group', ticker: 'BABA', buy_price: 227.30, number_shares: 9 },
        { id: 3, name: 'Micron Technologies', ticker: 'MU', buy_price: 54.20, number_shares: 35 },
        { id: 4, name: 'Apple', ticker: 'AAPL', buy_price: 105.21, number_shares: 30 },
        { id: 5, name: 'Amazon', ticker: 'AMZN', buy_price: 1570.20, number_shares: 3 }
      ])
    })
}
