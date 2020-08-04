import express from 'express'
import ClassesController from './database/controllers/ClassesControllers'
import ConnectionsController from './database/controllers/ConectionsController'

const routes = express.Router()

const classController = new ClassesController()
const connectionsController = new ConnectionsController()

routes.get('/classes', classController.index)
routes.post('/classes', classController.create)

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes
