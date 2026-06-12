import { Link } from "@tanstack/react-router"

import { useWells } from "../../entities/well/api/useWells"
import { useAppStore } from "../../app/store/useAppStore"
import { useShallow } from "zustand/react/shallow"

import styles from './WellStats.module.css'

export const WellStats = () => {
   const { data: wells } = useWells()
      const [selectedWells, clearSelection, toggleWellSelection] = useAppStore(
      useShallow(state => [
         state.selectedWells,
         state.clearSelection,
         state.toggleWellSelection,
      ])
   )

   return (
      <div className={styles.card}>
         <div className={styles.header}>
            <div>
               <h3>Скважины</h3>

               <p>
                  Выбрано: <strong>{selectedWells.length}</strong> из {wells?.length ?? 0}
               </p>
            </div>

            <button
               className={styles.reset}
               onClick={clearSelection}
               disabled={selectedWells.length === 0}
            >
               Сбросить
            </button>
         </div>

         <div className={styles.list}>
            {wells?.length === 0 && (
               <p className={styles.empty}>Нет загруженных скважин</p>
            )}

            {wells?.map(well => {
               const isSelected =
                  selectedWells.includes(well.id)

               return (
                  <button
                     type="button"
                     key={well.id}
                     onClick={() => toggleWellSelection(well.id)}
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
                  </button>
               )
            })}
         </div>

         <Link
            to={'/analysis'}
            className={`${styles.cta} ${
               selectedWells.length === 0 ? styles.ctaDisabled : ""
            }`}
         >
            Перейти к анализу
         </Link>
      </div>
   )
}
