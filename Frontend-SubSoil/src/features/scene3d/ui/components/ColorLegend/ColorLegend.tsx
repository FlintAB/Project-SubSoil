import { useAppStore } from "../../../../../app/store/useAppStore"
import { LOG_LEGENDS } from "../../../config/scene3DConfig"

import styles from './ColorLegend.module.css'

export const ColorLegend = () => {
   const activeLog = useAppStore(state => state.activeLog)

   if (!activeLog) return null

   const legend = LOG_LEGENDS[activeLog]

   return (
      <div className={styles.card}>
         <h3 className={styles.title}>
            {legend.title}
            <span className={styles.unit}>{legend.unit}</span>
         </h3>

         <div className={styles.ranges}>
            {legend.ranges.map(range => (
               <div key={range.label} className={styles.row}>
                  <span
                     className={styles.swatch}
                     style={{ backgroundColor: range.color }}
                  />
                  <span className={styles.label}>{range.label}</span>
               </div>
            ))}
         </div>

         <div className={styles.gradient} />
         <div className={styles.scale}>
            <span>мин</span>
            <span>макс</span>
         </div>
      </div>
   )
}
