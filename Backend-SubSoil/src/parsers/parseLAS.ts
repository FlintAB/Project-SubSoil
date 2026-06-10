import { ParsedLAS, LasCurve, ParsedTrajectoryPoint, LasWellInfo } from "../types/las.types"


export function parseLAS(text: string): ParsedLAS {
   const lines = text.split('\n')

   let currentSection = ''

   const curves: LasCurve[] = []
   const data: Record<string, number>[] = []

   const trajectory: ParsedTrajectoryPoint[] = []

   const wellInfo: LasWellInfo = {}

   let lat: number | undefined
   let lng: number | undefined

   for (const rawLine of lines) {
      const line = rawLine.trim()

      if (!line) continue

      if (line.startsWith('~')) {
         currentSection = line.toUpperCase()
         continue
      }

      /**
       * ~Well Information
       */
      if (currentSection.includes('WELL')) {
         const [left] = line.split(':')

         const parts = left.trim().split(/\s+/)

         if (parts.length < 2) continue

         const mnemonic = parts[0]
         const value = parts[1]

         const keyword = mnemonic.split('.')[0]

         switch (keyword) {
            case 'STRT':
               wellInfo.startDepth = Number(value)
               break

            case 'STOP':
               wellInfo.stopDepth = Number(value)
               break

            case 'STEP':
               wellInfo.step = Number(value)
               break

            case 'NULL':
               wellInfo.nullValue = Number(value)
               break

            case 'WELL':
               wellInfo.wellName = value
               break
         }

         continue
      }

      if (currentSection.includes('LOCATION')) {

         const [key, value] = line.split(/\s+/)

         if (key === 'LAT') {
            lat = Number(value)
         }

         if (key === 'LNG') {
            lng = Number(value)
         }

         continue
      }

      /**
       * ~Curve Information
       */
      if (currentSection.includes('CURVE')) {
         const [left, description = ''] = line.split(':')

         const [mnemonic, unit = ''] = left
            .trim()
            .split('.')

         curves.push({
            mnemonic: mnemonic.trim(),
            unit: unit.trim(),
            description: description.trim(),
         })

         continue
      }

      /**
       * ~ASCII
       */
      if (currentSection.includes('ASCII')) {
         const values = line
            .split(/\s+/)
            .map(Number)

         const row: Record<string, number> = {}

         curves.forEach((curve, index) => {
            row[curve.mnemonic] = values[index]
         })

         data.push(row)

         continue
      }

      if (currentSection.includes('TRAJECTORY')) {

         const [depth, x, y, z] = line
            .split(/\s+/)
            .map(Number)

         trajectory.push({
            depth,
            x,
            y,
            z,
         })

      continue
      }
   }

   return {
      wellInfo,

      lat,
      lng,

      curves,
      data,

      trajectory,
   }
}