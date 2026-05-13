import type { mergeDataByPropertyProps } from "../model/types"
/**
 * 
 * @param depths - Массив глубин
 * @param selectedLogs - Логи выбранных скважин
 * @param property - Свойство по которому формируется data, для отображения на графике (gammaRay | resistivity)
 * @returns Массив данных для построения графика
 */
export function mergeDataByProperty ({depths, selectedLogs, property}: mergeDataByPropertyProps){
   return depths.map((depth) => {
      const point: Record<string, number> = { depth }

      for (const well of selectedLogs) {
         const wellMap = new Map(well.data.map(p => [p.depth, p[property]]))
         point[well.wellId] = wellMap.get(depth) ?? 0
      }

      return point
   })
}