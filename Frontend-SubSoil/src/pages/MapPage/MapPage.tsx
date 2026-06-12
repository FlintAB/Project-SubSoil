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
            <div className={styles.head}>
               <div>
                  <span className={styles.eyebrow}>Геопространственный обзор</span>
                  <h1 className={styles.title}>Карта скважин</h1>
                  <p className={styles.subtitle}>
                     Выберите на карте скважины и область для загрузки и анализа данных
                  </p>
               </div>
            </div>

            <div className={styles.mapWrap}>
               <Map />
            </div>
         </main>

      </div>
   )
}
