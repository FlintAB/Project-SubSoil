import { useAppStore } from "../../../../../app/store/useAppStore"
import { LOG_LEGENDS } from "../../../config/scene3DConfig"

import styles from './ColorLegend.module.css'

export const ColorLegend = () => {
   const activeLog = useAppStore(state => state.activeLog)

   if (!activeLog) return null

   const legend = LOG_LEGENDS[activeLog]

   return (
      <div>
         <h3>
            {legend.title} ({legend.unit})
         </h3>

         {legend.ranges.map(range => (
            <div
               key={range.label}
               className={styles.container}
            >
               <div
                  style={{
                     width: '16px',
                     height: '16px',
                     backgroundColor: range.color,
                  }}
               />

               <span>
                  {range.label}
               </span>
            </div>
         ))}
      </div>
   )
}