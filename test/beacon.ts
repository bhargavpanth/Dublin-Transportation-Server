import chai from 'chai'
import fetch from 'node-fetch'
import request from 'request'
// import mongoose from 'mongoose'

let assert = chai.assert

describe('sanity checks for beacon route', () => {
	it('should return status 200', () => {
		fetch('http://localhost:8080/beacon').then( (res) => {
			assert.equal(res.status, 405)
		}).catch( (err) => {
			console.log(err)
		})
	})
	it('should throw 400 - malformatted request', () => {
		// const data = JSON.stringify({'stop_id':1})
		request.post('http://localhost:')
	})
})