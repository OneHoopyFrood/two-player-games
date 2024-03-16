import Router from 'koa-router'
import * as gameController from '../controllers/gameController'

const router = new Router()

router.get('/games', gameController.list)

export default router
