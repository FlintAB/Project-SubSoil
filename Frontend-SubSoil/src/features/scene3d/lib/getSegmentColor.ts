import { interpolateLogValue } from "./interpolateLogValue"
import { getColorByLogValue } from "./getColorByLogValue"
import type { GetSegmentColorProps } from "../../../entities/well/types/types"


/**
 * Вычисляет цвет сегмента скважины
 * на основе значения каротажного параметра
 * в средней точке сегмента.
 */
export function getSegmentColor({ segment, logs, property, range }: GetSegmentColorProps) {
   if (!range) {
      return 'gray'
   }

   const middleDepth = (segment.start.depth + segment.end.depth) / 2

   const value = interpolateLogValue({ logs, property, activeDepth: middleDepth })

   if (value === null) {
      return "gray"
   }

   return getColorByLogValue(value, range.min, range.max,)
}