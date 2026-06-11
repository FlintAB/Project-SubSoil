import { useWells } from "../../../entities/well/api/useWells"
import { useAppStore } from "../../../app/store/useAppStore"

import { CHART_CONFIG } from "../config/chartConfig"

import { mergeDataByProperty } from "../lib/mergeDataByProperty"

import { ChartPanel } from "./components/ChartPanel"
import { SingleChart } from "./components/SingleChart"

export const Analysis = () => {
   const { data: wells, isLoading, isError } = useWells()
   const selectedWells = useAppStore(state => state.selectedWells)

   if (isLoading) {
      return <h2>Загрузка скважин...</h2>
   }

   if (isError) {
      return <h2>Ошибка при загрузке скважин</h2>
   }

   if (!wells) {
      return null
   }

   const selectedWellData = wells.filter((well) => selectedWells.includes(well.id))

   if (selectedWellData.length === 0) return <h2>Нет выбранных скважин</h2>

   const depths = selectedWellData[0].logs.map((p) => p.depth)

   return (
      <div>
         <h1>Analysis</h1>
         <p>Selected wells: {selectedWells.join(", ")}</p>

         {CHART_CONFIG.map(data => {
            const mergedData = mergeDataByProperty({depths, selectedWellData, property: data.property})
            return(
               <ChartPanel key={data.property} title={data.title} unit={data.unit}>
                  <SingleChart data={mergedData} wellIds={selectedWells} syncId="well-analysis" unit={data.unit} property={data.property}/>
               </ChartPanel>
            )
         })}

      </div>
   )
}