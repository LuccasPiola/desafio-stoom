import { Router } from 'express'
import commentsRouter from './comments.routes'
import suggestionRouter from './suggestion.routes'

const routes = Router()

routes.use('/comments', commentsRouter)
routes.use('/suggestion', suggestionRouter)

export default routes
