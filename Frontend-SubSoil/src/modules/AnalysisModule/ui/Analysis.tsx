import { useAppStore } from "../../../app/store/useAppStore"
import { CHART_CONFIG } from "../config/chartConfig"
import { mergeDataByProperty } from "../lib/mergeDataByProperty"
import { MOCK_LOG_WELLS } from "../model/log.mock"
import { ChartPanel } from "./ChartPanel"
import { SingleChart } from "./SingleChart"

export const Analysis = () => {
   const selectedWells = useAppStore((state) => state.selectedWells)

   const selectedLogs = MOCK_LOG_WELLS.filter((well) => selectedWells.includes(well.wellId))

   if (selectedLogs.length === 0) return <h2>No wells selected</h2>
   const depths = selectedLogs[0].data.map((p) => p.depth)

   return (
      <div>
         <h1>Analysis</h1>
         <p>Selected wells: {selectedWells.join(", ")}</p>

         {CHART_CONFIG.map(data => {
            const mergedData = mergeDataByProperty({depths, selectedLogs, property: data.property})
            return(
               <ChartPanel key={data.property} title={data.title} unit={data.unit}>
                  <SingleChart data={mergedData} wellIds={selectedWells} syncId="well-analysis" unit={data.unit}/>
               </ChartPanel>
            )
         })}

      </div>
   )
}