import { Router } from 'express'

import multer from 'multer'

import { wellController } from '../controllers/well.controller'

const upload = multer({
   storage: multer.memoryStorage(),
})

export const wellRouter = Router()

wellRouter.get(
   '/',
   wellController.getAll
)

wellRouter.get(
   '/:id',
   wellController.getById
)

wellRouter.post(
   '/upload',
   upload.single('file'),
   wellController.upload
)

wellRouter.delete(
   '/:id',
   wellController.delete
)