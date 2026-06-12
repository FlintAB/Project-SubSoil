import {
   LineChart,
   Line,
   Tooltip,
   XAxis,
   YAxis,
   CartesianGrid,
   ReferenceLine,
   ResponsiveContainer,
} from "recharts"
import { useShallow } from 'zustand/react/shallow';
import { useAppStore } from "../../../../app/store/useAppStore"
import { getWellColor } from "../../config/chartConfig"
import type { ChartMouseData, SingleChartProps } from "../../model/types"

const AXIS_COLOR = "#64748b"
const GRID_COLOR = "rgba(148, 163, 184, 0.12)"

export const SingleChart = ({ data, wellIds, syncId, unit, property }: SingleChartProps) => {

   const [activeDepth, setActiveDepth, setActiveLog, hiddenWells] = useAppStore(useShallow((state) => [
      state.activeDepth,
      state.setActiveDepth,
      state.setActiveLog,
      state.hiddenWells,
   ]))

   const handleAddDepth = (mouseEventData: unknown) => {
      const data = mouseEventData as ChartMouseData

      if (typeof data.activeLabel === 'number') {
         const depth = data.activeLabel

         setActiveDepth(depth)
         setActiveLog(property)
      }
   }

   const handleClearDepth = () => setActiveDepth(null)

   const colorFor = (id: string) => getWellColor(wellIds.indexOf(id))

   return (
      <ResponsiveContainer width="100%" height={260}>
         <LineChart
            data={data}
            syncId={syncId}
            margin={{ top: 8, right: 12, bottom: 4, left: -8 }}
            onMouseMove={handleAddDepth}
            onMouseLeave={handleClearDepth}
         >
            <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} />

            <XAxis
               dataKey="depth"
               stroke={AXIS_COLOR}
               tick={{ fill: AXIS_COLOR, fontSize: 11 }}
               tickLine={{ stroke: GRID_COLOR }}
               axisLine={{ stroke: GRID_COLOR }}
            />

            <YAxis
               stroke={AXIS_COLOR}
               tick={{ fill: AXIS_COLOR, fontSize: 11 }}
               tickLine={{ stroke: GRID_COLOR }}
               axisLine={{ stroke: GRID_COLOR }}
               width={48}
            />

            <Tooltip
               contentStyle={{
                  background: "#0f192d",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 10,
                  fontSize: 12,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
               }}
               labelStyle={{ color: "#94a3b8" }}
               labelFormatter={(label) => `Глубина: ${label} м`}
               formatter={(value, name) => [`${value} ${unit}`, name]}
            />

            <ReferenceLine x={activeDepth ?? undefined} stroke="#f59e0b" strokeDasharray="4 2" />

            {wellIds.map((id) => (
               <Line
                  key={id}
                  dataKey={id}
                  hide={hiddenWells.has(id)}
                  type="monotone"
                  stroke={colorFor(id)}
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4, strokeWidth: 0 }}
                  isAnimationActive={false}
               />
            ))}
         </LineChart>
      </ResponsiveContainer>
   )
}
