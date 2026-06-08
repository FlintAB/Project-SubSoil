import type { InterpolateLogValueProps } from "../model/types";

export function interpolateLogValue({logs, property, activeDepth}: InterpolateLogValueProps): number | null {

   for (let i = 0; i < (logs.length - 1); i++){
      const currentLog = logs[i]
      const nextLog = logs[i + 1]

      if (currentLog.depth <= activeDepth && activeDepth <= nextLog.depth){
         const t = (activeDepth - currentLog.depth) / (nextLog.depth - currentLog.depth)

         const currentValue = currentLog[property]
         const nextValue = nextLog[property]

         return (
            currentValue + (nextValue - currentValue) * t
         )
      }
   }
   return null
}