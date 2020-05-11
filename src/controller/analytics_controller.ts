import express from 'express'
import http from 'http'
import socketio from 'socket.io'
import schema from '../model'

const { analytics_schema } = schema()
let router = express.Router()

const io = socketio

const index = (app, route) => {
    // Add socket.io
    router.get('/', (req, res) => {
        // might make sense to return a JWT token
        // and req params could contain the reverse geo-code
        // of the location where the users are expecting the
        // analytics from
    })


}