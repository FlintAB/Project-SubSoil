import { ColorLegend } from "../../features/scene3d/ui/components/ColorLegend/ColorLegend"
import { Scene3D } from "../../features/scene3d/ui/Scene3D"

import styles from './Scene3DPage.module.css'

export const Scene3DPage = () => {
   return (
      <div className={styles.container}>
         <header className={styles.header}>
            <div>
               <span className={styles.eyebrow}>Трёхмерная визуализация</span>
               <h1 className={styles.title}>3D-сцена скважин</h1>
            </div>
            <p className={styles.hint}>
               Вращение — ЛКМ · масштаб — колесо · перемещение — ПКМ
            </p>
         </header>

         <div className={styles.viewport}>
            <Scene3D />

            <div className={styles.legendOverlay}>
               <ColorLegend />
            </div>
         </div>
      </div>
   )
}
