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
         {/* Непрерывный градиент-бар */}
         <div className="mt-3 h-2 w-full rounded-full bg-[linear-gradient(90deg,rgb(37,99,235),rgb(34,197,94),rgb(234,179,8),rgb(220,38,38))]" />
         <div className="mt-1 flex justify-between text-[10px] text-muted-foreground">
            <span>мин</span>
            <span>макс</span>
         </div>
      </div>
   )
}