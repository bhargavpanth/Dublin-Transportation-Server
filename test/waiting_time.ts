import chai from 'chai'
import fetch from 'node-fetch'

let assert = chai.assert
describe('sanity checks for waiting time route', () => {
	it('should return status 200', () => {
		fetch('http://localhost:27017/wait/time').then( (res) => {
			assert.equal(res.status, 200)
		}).catch( (err) => {
			console.log(err)
		})
	})
})
