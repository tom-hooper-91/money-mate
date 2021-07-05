const request = require('supertest')
const server = require('./server')

jest.mock('./db/db', () => { // mock functions
  return {
    getPortfolio: () => Promise.resolve([
      { id: 1, name: 'Seritage Growth Properties', ticker: 'SRG', buy_price: 11.77, number_shares: 116 },
      { id: 2, name: 'Alibaba group', ticker: 'BABA', buy_price: 227.30, number_shares: 9 }
    ]),
    addPosition: () => Promise.resolve(1234),
    editPosition: () => Promise.resolve(1),
    deletePosition: () => Promise.resolve(1)
  }
})

test('can get portfolio on /portfolio', () => {
  expect.assertions(1)
  return request(server)
    .get('/portfolio')
    .then(res => {
      const actual = res.body
      return expect(actual).toHaveLength(2)
    })
})

test('can add a position', () => {
  const expected = 1234
  const newPosition = {
    name: 'Apple',
    ticker: 'AAPL',
    buy_price: 80.20,
    number_shares: 100
  }
  return request(server)
    .post('/portfolio/add')
    .send(newPosition)
    .then(res => {
      const actual = res.body.new_id
      return expect(actual).toEqual(expected)
    })
})

test('can edit a position', () => {
  const expected = 1
  const position = { id: 1, name: 'Seritage Growth Properties', ticker: 'SRG', buy_price: 11.77, number_shares: 80 }
  return request(server)
    .patch('/portfolio/edit')
    .send(position)
    .then(res => {
      const actual = res.body.updated
      return expect(actual).toEqual(expected)
    })
})

test('can delete a position', () => {
  const expected = 1
  const position = { id: 1 }
  return request(server)
    .delete('/portfolio/edit')
    .send(position)
    .then(res => {
      const actual = res.body.deleted
      return expect(actual).toEqual(expected)
    })
})
