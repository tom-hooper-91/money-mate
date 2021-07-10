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
      return expect(actual[0]).toEqual(3)
    })
})

test('editPosition edits a position', () => {
  const testPosition = {
    id: 2,
    name: 'Alibaba Group',
    ticker: 'BABA',
    buy_price: 227.3
  }
  return db.editPosition(testPosition, testDb)
    .then(actual => {
      return expect(actual).toEqual(1)
    })
})

test('deletePosition deletes a position', () => {
  const testPosition = {
    id: 1
  }
  return db.deletePosition(testPosition.id, testDb)
    .then(actual => {
      return expect(actual).toEqual(1)
    })
})
