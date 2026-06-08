import { Marker, Popup } from "react-leaflet"
import { useShallow } from "zustand/shallow"
import { useAppStore } from "../../../../app/store/useAppStore"
import { selectedMarker, defaultMarker } from "../../../../shared/lib/leaflet"

import type { Well } from "../../../../entities/well/types/types"


export const MapMarker = ({id, name, lat, lng}: Omit<Well, 'trajectory' | 'logs'>) => {
   const [selectedWells, toggleWellSelection] = useAppStore(useShallow((state) => [
      state.selectedWells, 
      state.toggleWellSelection,
   ]))

   const isSelected = selectedWells.includes(id)
   const icon = isSelected  ? selectedMarker : defaultMarker

   return (
      <Marker position={[lat, lng]} title={name} icon={icon} eventHandlers={{ click: () => toggleWellSelection(id)}}>
         <Popup>
            <p>Name: {name} {isSelected ? 'Selected ✅' : ''}</p>
         </Popup>
      </Marker>
   )
}