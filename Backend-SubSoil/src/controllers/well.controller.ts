import { Request, Response } from 'express'
import { v4 as uuid } from 'uuid'

import { wellService } from '../services/well.service'

import { parseLAS } from '../parsers/parseLAS'
import { mapParsedLasToWell } from '../mappers/mapParsedLasToWell'

export const wellController = {

   getAll(
      req: Request,
      res: Response,
   ) {
      res.json(
         wellService.getAll()
      )
   },

   getById(
      req: Request,
      res: Response,
   ) {

      const well = wellService.getById(String(req.params.id))

      if (!well) {
         return res
            .status(404)
            .json({
               message: 'Well not found'
            })
      }

      res.json(well)
   },

   upload(
      req: Request,
      res: Response,
   ) {

      if (!req.file) {

         return res
            .status(400)
            .json({
               message: 'File required'
            })
      }

      const text = req.file.buffer.toString(
            'utf8'
         )

      const parsedLAS = parseLAS(text)

      const well = mapParsedLasToWell({
            parsedLAS,
            fileName: req.file.originalname,
         })

      well.id = uuid()

      wellService.create(well)

      res.status(201).json(well)
   },

   delete(
      req: Request,
      res: Response,
   ) {

      wellService.delete(
         String(req.params.id)
      )

      res.sendStatus(204)
   },
}