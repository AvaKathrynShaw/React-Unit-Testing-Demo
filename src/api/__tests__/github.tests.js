/* eslint-env jest */

const github = require('../github')
jest.mock('../request')

// A simple example test
describe('#getUser() using Promises', () => {
  it('should load user data', () => {
    return github.getUser('vnglst')
    .then(data => {
      expect(data).toBeDefined()
      expect(data.entity.name).toEqual('Koen van Gilst')
    })
  })
})
