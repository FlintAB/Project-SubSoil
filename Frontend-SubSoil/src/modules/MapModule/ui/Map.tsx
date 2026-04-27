import styles from './Map.module.css'
import type { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet"

export const Map = () => {
   const defaultPosition: LatLngExpression = [55.75, 37.61];

   return (
      <div className={styles['div_container']}>
         <p>MAP</p>
         <MapContainer center={defaultPosition} zoom={13} className={styles['map_container']}>
            <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"            
            />
         </MapContainer>
      </div>
   )
}