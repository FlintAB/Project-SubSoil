import { useWells } from '../../../entities/well/api/useWells';
import { useEffect } from 'react';

import { MapContainer, TileLayer, useMap } from "react-leaflet"

import { MapMarker } from './components/MapMarker';

import { defaultPosition, ATTRIBUTION, URL } from '../config/mapConfig';

import styles from './Map.module.css'

function ResizeFix() {
   const map = useMap()
   useEffect(() => {
      const fix = () => map.invalidateSize({ animate: false })
      const timers = [60, 200, 500, 1000].map((ms) => setTimeout(fix, ms))
      const container = map.getContainer()
      const ro = new ResizeObserver(fix)
      ro.observe(container)
      if (typeof window !== 'undefined') {
         ;(window as unknown as { __wellMap?: unknown }).__wellMap = map
      }
      return () => {
         timers.forEach(clearTimeout)
         ro.disconnect()
      }
   }, [map])
   return null
}

export const Map = () => {
   const { data: wells, isLoading, isError } = useWells()

   if (isLoading) {
      return (
         <div className={styles['div_container']}>
            <div className={styles.state}>Загрузка скважин…</div>
         </div>
      )
   }

   if (isError) {
      return (
         <div className={styles['div_container']}>
            <div className={`${styles.state} ${styles.stateError}`}>
               Ошибка при загрузке скважин
            </div>
         </div>
      )
   }

   if (!wells) {
      return null
   }

   return (
      <div className={styles['div_container']}>
         <MapContainer 
            center={defaultPosition} 
            zoom={13} 
            doubleClickZoom={false} 
            className={styles['map_container']}
            >

            {wells.map((well) => <MapMarker key={well.id} {...well}/> )}

            <ResizeFix />
            <TileLayer 
            attribution={ATTRIBUTION}
            url={URL}          
            />
         </MapContainer>

      </div>
   )
}
