import { LasUploader } from "../../features/las-upload/ui/LasUploader"
import { Map } from "../../modules/MapModule/ui/Map"
import { WellStats } from "../../widgets/WellStats/WellStats"

import styles from './MapPage.module.css'

export const MapPage = () => {
   return (
      <div className={styles.container}>
               
         <aside className={styles.sidebar}>
            <LasUploader />

            <WellStats />
         </aside>

         <main className={styles.content}>
            <h3>Карта скважин</h3>
            <p>Выберите на карте скважину для анализа</p>
            <Map />
         </main>

      </div>
   )
}