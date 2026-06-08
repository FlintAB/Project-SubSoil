import { ColorLegend } from "../../features/scene3d/ui/components/ColorLegend/ColorLegend"
import { Scene3D } from "../../features/scene3d/ui/Scene3D"
import { Analysis } from "../../modules/AnalysisModule/ui/Analysis"

import styles from './AnalysisPage.module.css'

export const AnalysisPage = () => {
   return (
      <div className={styles.container}>
         <div className={styles['left-pane']}>
            <Analysis />
         </div>
         <div className={styles['right-pane']}>
            <ColorLegend />
            <Scene3D />
         </div>
      </div>
   )
}