import { useAppStore } from "../../../app/store/useAppStore"

import { mapParsedLasToWell } from "../../../shared/lib/las/mapParsedLasToWell"
import { parseLAS } from "../../../shared/lib/las/parseLAS"

export const LasUploader = () => {

   const addWell = useAppStore(state => state.addWell)

   const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]

      if (!file) return

      const text = await file.text()
      const parsedLAS = parseLAS(text)
      const well = mapParsedLasToWell({
         parsedLAS,
         fileName: file.name,
      })

      addWell(well)
   }

   const handleLoadDemo = async () => {
      const response = await fetch('/test-well.las')
      const text = await response.text()
      const parsed = parseLAS(text)
      const well = mapParsedLasToWell({
         parsedLAS: parsed,
         fileName: 'test-wells.las',
      })

      addWell(well)
   }

   return (
      <div>
         <input
            type="file"
            accept=".las"
            onChange={handleChange}
         />

         <button onClick={handleLoadDemo}>
            Загрузить демо-данные
         </button>
      </div>
   )
}