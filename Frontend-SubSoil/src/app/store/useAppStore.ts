import { create } from "zustand"
import type { LogProperty } from "../../entities/well/types/types"

/**
 * !Переписать selectedWells на new Set
 */
type State = {
   selectedWells: string[]
   hiddenWells: Set<string>

   activeWell: string | null
   activeLog: LogProperty | null
   activeDepth: number | null

   hoveredWell: string | null
}

type Actions = {
   setSelectedWells: (selectedWells: State['selectedWells']) => void
   setActiveWell: (activeWell: State['activeWell']) => void
   setActiveLog: (activeLog: State['activeLog']) => void
   setActiveDepth: (activeDepth: State['activeDepth']) => void
   setHoveredWell: (hoveredWell: State['hoveredWell']) => void

   clearSelection: () => void

   toggleWellSelection: (id: string) => void
   toggleWellVisibility: (id: string) => void
}

export const useAppStore = create<State & Actions>((set) => ({
   selectedWells: [],
   hiddenWells: new Set<string>(),

   activeWell: null,
   activeLog: null,
   activeDepth: null,

   hoveredWell: null,

   setSelectedWells: (selectedWells) => set({selectedWells}),
   setActiveWell: (activeWell) => set({activeWell}),
   setActiveLog: (activeLog) => set({activeLog}),
   setActiveDepth: (activeDepth) => set({activeDepth}),

   setHoveredWell: (hoveredWell) => set({hoveredWell}),

   clearSelection: () => set({selectedWells: []}),

   toggleWellSelection: (id) => set((state) => ({
         selectedWells: state.selectedWells.includes(id)
         ? state.selectedWells.filter(wellId => wellId !== id)
         : [...state.selectedWells, id]
   })),

   toggleWellVisibility: (id) => set((state) => {
      const nextHiddenWells = new Set(state.hiddenWells)

      if (nextHiddenWells.has(id)){
         nextHiddenWells.delete(id)
      } else{
         nextHiddenWells.add(id)
      }

      return {
         hiddenWells: nextHiddenWells
      }
   }),

}))