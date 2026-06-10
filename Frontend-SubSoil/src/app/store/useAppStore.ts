import { create } from "zustand"
import type { LogProperty, Well } from "../../entities/well/types/types"

/**
 * !Переписать selectedWells на new Set
 */
type State = {
   wells: Well[]

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

   addWell: (well: Well) => void
   removeWell: (wellId: string) => void
}

export const useAppStore = create<State & Actions>((set) => ({
   wells: [],

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

   addWell: (well) => set(state => ({
      wells: [...state.wells, well]
   })),

   removeWell: (wellId) => set(state => ({
      wells: state.wells.filter(
         well => well.id !== wellId
      )
   })),

}))