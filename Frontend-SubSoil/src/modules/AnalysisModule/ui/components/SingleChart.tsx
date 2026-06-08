import {
   LineChart,
   Line,
   Tooltip,
   XAxis,
   YAxis,
   Legend,
   CartesianGrid,
   ReferenceLine,
   ResponsiveContainer,
} from "recharts"
import { useShallow } from 'zustand/react/shallow';
import { useAppStore } from "../../../../app/store/useAppStore"
import type { ChartMouseData, SingleChartProps } from "../../model/types"

export const SingleChart = ({ data, wellIds, syncId, unit, property }: SingleChartProps) => {

   const [activeDepth, setActiveDepth, setActiveLog, hiddenWells] = useAppStore(useShallow((state) => [
      state.activeDepth, 
      state.setActiveDepth,
      state.setActiveLog,
      state.hiddenWells, 
   ]))

   const handleAddDepth = (mouseEventData: unknown) => {
      const data = mouseEventData as ChartMouseData

      if (typeof data.activeLabel  === 'number'){
         const depth = data.activeLabel

         setActiveDepth(depth)
         setActiveLog(property)
      }
   }

   const handleClearDepth = () => setActiveDepth(null)

   const visibleWells = wellIds.filter(id => !hiddenWells.has(id))

   return (
      <ResponsiveContainer width="100%" height={300}>
         <LineChart
         data={data}
         syncId={syncId}
         onMouseMove={handleAddDepth}
         onMouseLeave={handleClearDepth}
         >

            <XAxis dataKey="depth" label='depth'/>

            <YAxis label={unit}/>

            <Tooltip />

            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />

            <Legend align="right"/>

            <ReferenceLine x={activeDepth ?? undefined} stroke="red"/>

            {visibleWells.map((id) => (

            <Line
               key={id}
               dataKey={id}
               type="monotone"
               strokeWidth={2}
            />
            
            ))}

         </LineChart>
      </ResponsiveContainer>
   )
}