const knex = require('knex')
const testConfig = require('./knexfile').test
const testDb = knex(testConfig)

const db = require('./db')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('getPortfolio gets all positions', () => {
  return db.getPortfolio(testDb)
    .then(portfolio => {
      expect(portfolio).toHaveLength(2)
      return null
    })
})

test('addPosition adds a position', () => {
  const testPosition = {
    name: 'Berkshire Hathaway',
    ticker: 'BRK.B',
    buy_price: 175
  }
  return db.addPosition(testPosition, testDb)
    .then(actual => {
      console.log(actual)
      return expect(actual[0]).toEqual(3)
    })
})
