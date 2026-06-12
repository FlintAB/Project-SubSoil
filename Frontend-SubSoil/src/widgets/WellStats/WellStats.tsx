import { Link } from "@tanstack/react-router"

import { useWells } from "../../entities/well/api/useWells"
import { useAppStore } from "../../app/store/useAppStore"
import { useShallow } from "zustand/react/shallow"

import styles from './WellStats.module.css'

export const WellStats = () => {
   const { data: wells } = useWells()
      const [selectedWells, clearSelection] = useAppStore(
      useShallow(state => [
         state.selectedWells,
         state.clearSelection,
      ])
   )

   return (
      <div className={styles.card}>
         <div className={styles.header}>
            <div>
               <h3>Скважины</h3>

               <p>
                  Выбрано: {selectedWells.length} из {wells?.length ?? 0}
               </p>
            </div>

            <button
               className={styles.reset}
               onClick={clearSelection}
            >
               Сбросить
            </button>
         </div>

         <div className={styles.list}>
            {wells?.map(well => {
               const isSelected =
                  selectedWells.includes(well.id)

               return (
                  <div
                     key={well.id}
                     className={`${styles.item} ${
                        isSelected
                           ? styles.selected
                           : ""
                     }`}
                  >
                     <div className={styles.left}>
                        <div
                           className={`${styles.checkbox} ${
                              isSelected
                                 ? styles.checked
                                 : ""
                           }`}
                        >
                           {isSelected && "✓"}
                        </div>

                        <div>
                           <h4>{well.name}</h4>

                           <p>
                              {well.lat.toFixed(2)}
                              {" • "}
                              {well.lng.toFixed(2)}
                           </p>
                        </div>
                     </div>
                  </div>
               )
            })}

            <Link to={'/analysis'}>Перейти к анализу</Link>
         </div>
      </div>
   )
}