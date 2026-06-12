import { ColorLegend } from "../../features/scene3d/ui/components/ColorLegend/ColorLegend"
import { Scene3D } from "../../features/scene3d/ui/Scene3D"
import { Analysis } from "../../modules/AnalysisModule/ui/Analysis"

import styles from './AnalysisPage.module.css'

export const AnalysisPage = () => {
   return (
      <div className={styles.container}>
         <section className={styles['left-pane']}>
            <Analysis />
         </section>

         <section className={styles['right-pane']}>
            <header className={styles.sceneHeader}>
               <div>
                  <span className={styles.eyebrow}>Пространственная визуализация</span>
                  <h2 className={styles.sceneTitle}>3D-сцена</h2>
               </div>
            </header>

            <div className={styles.sceneViewport}>
               <Scene3D />

               <div className={styles.legendOverlay}>
                  <ColorLegend />
               </div>
            </div>
         </section>
      </div>
   )
}
