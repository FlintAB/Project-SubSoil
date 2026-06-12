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

   return (
      <CircleMarker 
         center={[lat, lng]} 
         radius={isSelected ? 11 : 7} 
         eventHandlers={{ click: () => toggleWellSelection(id)}} 
         pathOptions={{
            color: '#22c55e',
            weight: isSelected ? 2.5 : 1.5,
            fillColor: '#22c55e',
            fillOpacity: isSelected ? 0.95 : 0.65,}}>
      </CircleMarker>
   )
}