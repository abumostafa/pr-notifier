import express from 'express'
import bodyParser from 'body-parser'
import mongoose from "mongoose"
import mongo from './utils/mongo'
import routes from './routes'
import registerModels from './model'
import registerRepositories from './repository'

// create an app
const app = express()
const {env: {MONGODB_URI}} = process

// configure body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// configure db
const db = mongo(mongoose, MONGODB_URI)
const models = registerModels(db)
const repositories = registerRepositories(models)
app.use((req, res, next) => {
  req.models = models
  req.repositories = repositories
  next()
})

// configure routes
app.use('/', routes(express.Router()))

// handle server errors
app.use(({message}, req, res, next) => res.status(500).json({error: {message}}))

export default app
