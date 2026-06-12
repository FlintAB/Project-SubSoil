import { useShallow } from "zustand/shallow"
import { useAppStore } from "../../../../app/store/useAppStore"
import { getWellColor } from "../../config/chartConfig"
import type { ChartPanelProps } from "../../model/types"

import styles from "./ChartPanel.module.css"

export const ChartPanel = ({ title, unit, children }: ChartPanelProps) => {

   const [activeDepth, selectedWells, hiddenWells, toggleWellVisibility] = useAppStore(useShallow((state) => [
      state.activeDepth,
      state.selectedWells,
      state.hiddenWells,
      state.toggleWellVisibility,
   ]))

   return (
      <section className={styles.card}>
         <div className={styles.head}>
            <div>
               <h3 className={styles.title}>{title}</h3>
               <span className={styles.unit}>{unit}</span>
            </div>

            <div className={styles.depth}>
               <span className={styles.depthLabel}>Глубина</span>
               <span className={styles.depthValue}>
                  {activeDepth != null ? `${activeDepth.toFixed(0)} м` : "—"}
               </span>
            </div>
         </div>

         <div className={styles.legend}>
            {selectedWells.map((id, index) => {
               const isVisible = !hiddenWells.has(id)
               const color = getWellColor(index)

               return (
                  <button
                     type="button"
                     key={id}
                     onClick={() => toggleWellVisibility(id)}
                     className={`${styles.chip} ${isVisible ? "" : styles.chipOff}`}
                  >
                     <span
                        className={styles.dot}
                        style={{ background: isVisible ? color : "transparent", borderColor: color }}
                     />
                     {id}
                  </button>
               )
            })}
         </div>

         <div className={styles.chart}>
            {children}
         </div>
      </section>
   )
}
