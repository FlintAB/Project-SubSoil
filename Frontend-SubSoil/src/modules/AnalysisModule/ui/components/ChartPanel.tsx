import { useShallow } from "zustand/shallow"
import { useAppStore } from "../../../../app/store/useAppStore"
import type { ChartPanelProps } from "../../model/types"

export const ChartPanel = ({title, unit, children}: ChartPanelProps) => {

   const [activeDepth, selectedWells, hiddenWells, toggleWellVisibility] = useAppStore(useShallow((state) => [
      state.activeDepth, 
      state.selectedWells,
      state.hiddenWells, 
      state.toggleWellVisibility,
   ]))

   return (
      <>
         <h3>{title} - {unit}</h3>
         <p>
            activeDepth: {activeDepth ?? 'Не выбрано'}
         </p>

         <div>
            {selectedWells.map((id) => (
               <label key={id}>
                  <input
                     type="checkbox"
                     checked={!hiddenWells.has(id)}
                     onChange={() => toggleWellVisibility(id)}
                  />

                  {id}
               </label>
            ))}
         </div>

         {children}
      </>
   )
}