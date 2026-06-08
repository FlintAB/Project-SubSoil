import { interpolateLogValue } from "./interpolateLogValue"
import { getColorByLogValue } from "./getColorByLogValue"
import type { GetSegmentColorProps } from "../../../entities/well/types/types"



export function getSegmentColor({ segment, logs, property }: GetSegmentColorProps) {

   const middleDepth = (segment.start.depth + segment.end.depth) / 2

   const value = interpolateLogValue({ logs, property, activeDepth: middleDepth })

   if (value === null) {
      return "gray"
   }

   return getColorByLogValue(value, property)
}