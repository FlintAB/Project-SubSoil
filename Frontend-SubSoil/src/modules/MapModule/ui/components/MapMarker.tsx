import { CircleMarker } from "react-leaflet"
import { useShallow } from "zustand/shallow"
import { useAppStore } from "../../../../app/store/useAppStore"

import type { Well } from "../../../../entities/well/types/types"


export const MapMarker = ({id, lat, lng}: Omit<Well, 'trajectory' | 'logs'>) => {
   const [selectedWells, toggleWellSelection] = useAppStore(useShallow((state) => [
      state.selectedWells, 
      state.toggleWellSelection,
   ]))

   const isSelected = selectedWells.includes(id)

   const color = isSelected ? '#f59e0b' : '#22c55e'

   return (
      <CircleMarker 
         center={[lat, lng]} 
         radius={isSelected ? 11 : 7} 
         eventHandlers={{ click: () => toggleWellSelection(id)}} 
         pathOptions={{
            color,
            weight: isSelected ? 3 : 1.5,
            fillColor: color,
            fillOpacity: isSelected ? 0.9 : 0.55,}}>
      </CircleMarker>
   )
}
