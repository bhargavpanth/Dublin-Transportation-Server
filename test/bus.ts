// import mongoose from 'mongoose'
import fetch from 'node-fetch'
import chai from 'chai'

var assert = chai.assert;
describe('peform checks on the route', () => {
	it('should return status 200 on GET', () => {
		fetch('http://localhost:8080').then( (res) => {
			assert.equal(res.status, 200);
		}).catch( (err) => {
			console.log(err)
		})
	})

	it('should return message on GET to base route', () => {
		fetch('http://localhost:8080').then( (res) => {
			assert.equal(res.body, `{ 'status': 200,'message': 'base route'}`);
		})
	})

	it('should return object on GET request', () => {
		fetch('http://localhost:8080/poll/bus/data').then( (res) => {
			assert.equal(res.status, 200);
		})
	})
})
