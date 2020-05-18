import express from 'express'
import schema from '../model'

const { analytics_schema } = schema()
const app = express()
let router = express.Router()

const index = (app, route) => {
    // Add socket.io
    router.get('/', (req, res) => {
        // might make sense to return a JWT token
        // and req params could contain the reverse geo-code
        // of the location where the users are expecting the
        // analytics from
    })
}