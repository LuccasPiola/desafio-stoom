import { Router } from 'express'
import * as C from '../constants'

const commentsRouter = Router()

commentsRouter.get('/', async (request, response) => {
  const comments = {
		dough: C.DOUGH_COMENTS,
		filling: C.FILLING_COMENTS,
		border: C.BORDER_COMENTS,
		size: C.SIZE_COMMENTS
	}

  return response.json(comments)
})

export default commentsRouter
