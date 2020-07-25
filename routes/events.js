require('dotenv').config()
const express = require('express')
const router = express.Router()

const Event = require('../models/Event')

// API Routes
// TODO: GET -- post events to home page
// TODO: POST -- add created event to db
// TODO: PUT -- edit said event
// TODO: DELETE -- delete said event