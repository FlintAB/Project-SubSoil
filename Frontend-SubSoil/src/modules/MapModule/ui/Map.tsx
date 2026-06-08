import styles from './Map.module.css'
import { MapContainer, TileLayer } from "react-leaflet"
import { useAppStore } from '../../../app/store/useAppStore';
import { useShallow } from 'zustand/react/shallow';
import { MapMarker } from './components/MapMarker';
import { defaultPosition, ATTRIBUTION, URL } from '../config/mapConfig';
import { MOCK_WELLS } from '../../../entities/well/model/well.mock';

export const Map = () => {
   const [selectedWells, clearSelection] = useAppStore(useShallow((state) => [
      state.selectedWells, 
      state.clearSelection,
   ]))

   const handleClearSelection = () => clearSelection()

   return (
      <div className={styles['div_container']}>

         <p>MAP</p>
         <p>Selected Well: {selectedWells.length ? selectedWells.join(', ') : 'None'}</p>
         <button onClick={handleClearSelection}>Reset selection</button>

         <MapContainer center={defaultPosition} zoom={13} doubleClickZoom={false} className={styles['map_container']}>

            {MOCK_WELLS.map((well) => <MapMarker key={well.id} {...well}/> )}

            <TileLayer 
            attribution={ATTRIBUTION}
            url={URL}           
            />
         </MapContainer>

      </div>
   )
}