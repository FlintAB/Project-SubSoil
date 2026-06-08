import type { LogProperty } from "../../../entities/well/types/types"

export const COLOR_SCALE_CONFIG: Record<LogProperty, { min: number, max: number }> = {
   gammaRay: {
      min: 0,
      max: 100,
   },

   resistivity: {
      min: 0,
      max: 200,
   },
}