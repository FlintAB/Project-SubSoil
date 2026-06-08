import type { mergeDataByPropertyProps } from "../model/types"
/**
 * 
 * @param depths - Массив глубин
 * @param selectedWellData - Логи выбранных скважин
 * @param property - Свойство по которому формируется data, для отображения на графике (gammaRay | resistivity)
 * @returns Массив данных для построения графика
 */
export function mergeDataByProperty ({depths, selectedWellData, property}: mergeDataByPropertyProps){
   return depths.map((depth) => {
      const point: Record<string, number> = { depth }

      for (const well of selectedWellData) {
         const wellMap = new Map(well.logs.map(p => [p.depth, p[property]]))
         point[well.id] = wellMap.get(depth) ?? 0
      }

      return point
   })
}