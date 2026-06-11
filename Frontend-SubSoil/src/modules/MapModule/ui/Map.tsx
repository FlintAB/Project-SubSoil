import { useWells } from '../../../entities/well/api/useWells';
import { useAppStore } from '../../../app/store/useAppStore';
import { useShallow } from 'zustand/react/shallow';

import { MapContainer, TileLayer } from "react-leaflet"

import { MapMarker } from './components/MapMarker';

import { defaultPosition, ATTRIBUTION, URL } from '../config/mapConfig';

import styles from './Map.module.css'

export const Map = () => {
   const { data: wells, isLoading, isError } = useWells()
   const [selectedWells, clearSelection] = useAppStore(useShallow((state) => [
      state.selectedWells, 
      state.clearSelection,
   ]))

   if (isLoading) {
      return <h2>Загрузка скважин...</h2>
   }

   if (isError) {
      return <h2>Ошибка при загрузке скважин</h2>
   }

   if (!wells) {
      return null
   }

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