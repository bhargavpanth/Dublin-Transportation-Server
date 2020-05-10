import express from 'express'
import schema from '../model'

const { analytics_schema } = schema()
let router = express.Router()

const index = (app, route) => {
    // Add socket.io
    router.get('/', (req, res) => {
        // might make sense to return a JWT token
    })
}