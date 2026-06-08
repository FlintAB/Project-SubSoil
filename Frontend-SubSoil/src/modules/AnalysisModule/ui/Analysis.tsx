import { useAppStore } from "../../../app/store/useAppStore"
import { MOCK_WELLS } from "../../../entities/well/model/well.mock"
import { CHART_CONFIG } from "../config/chartConfig"
import { mergeDataByProperty } from "../lib/mergeDataByProperty"
import { ChartPanel } from "./components/ChartPanel"
import { SingleChart } from "./components/SingleChart"

export const Analysis = () => {
   const selectedWells = useAppStore((state) => state.selectedWells)

   const selectedWellData = MOCK_WELLS.filter((well) => selectedWells.includes(well.id))

   if (selectedWellData.length === 0) return <h2>No wells selected</h2>
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