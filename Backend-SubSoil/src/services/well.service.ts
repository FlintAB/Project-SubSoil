import { wells } from "../storage/wells.storage"

import { Well } from "../types/well.types"

export const wellService = {

   getAll() {
      return wells
   },

   getById(id: string) {
      return wells.find(
         well => well.id === id
      )
   },

   create(well: Well) {
      wells.push(well)

      return well
   },

   delete(id: string) {

      const index = wells.findIndex(
         well => well.id === id
      )

      if (index !== -1) {
         wells.splice(index, 1)
      }
   }
}