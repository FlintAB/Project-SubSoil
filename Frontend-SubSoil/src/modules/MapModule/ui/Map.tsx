import { useAppStore } from '../../../app/store/useAppStore';
import { useShallow } from 'zustand/react/shallow';

import { MapContainer, TileLayer } from "react-leaflet"

import { MapMarker } from './components/MapMarker';

import { defaultPosition, ATTRIBUTION, URL } from '../config/mapConfig';

import styles from './Map.module.css'

export const Map = () => {
   const [selectedWells, clearSelection, wells] = useAppStore(useShallow((state) => [
      state.selectedWells, 
      state.clearSelection,
      state.wells
   ]))

   const handleClearSelection = () => clearSelection()

   return (
      <div className={styles['div_container']}>

         <p>MAP</p>
         <p>Selected Well: {selectedWells.length ? selectedWells.join(', ') : 'None'}</p>
         <button onClick={handleClearSelection}>Reset selection</button>

         <MapContainer center={defaultPosition} zoom={13} doubleClickZoom={false} className={styles['map_container']}>

            {wells.map((well) => <MapMarker key={well.id} {...well}/> )}

            <TileLayer 
            attribution={ATTRIBUTION}
            url={URL}           
            />
         </MapContainer>

      </div>
   )
}