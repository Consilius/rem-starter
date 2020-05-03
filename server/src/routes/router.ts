import { Router } from 'express'
import Controller from '../controllers/controller'

function router(controller: Controller) {
  const router = Router()

  router.post('/', async (req, res) => await function(req, res) {})

  return router
}

export default router
