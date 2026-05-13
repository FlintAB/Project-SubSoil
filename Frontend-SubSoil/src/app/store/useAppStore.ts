import { create } from "zustand"

type State = {
   selectedWells: string[]
   hiddenWells: string[]

   activeWell: string | null
   activeLog: string | null
   activeDepth: number | null
}

type Actions = {
   setSelectedWells: (selectedWells: State['selectedWells']) => void
   setActiveWell: (activeWell: State['activeWell']) => void
   setActiveLog: (activeLog: State['activeLog']) => void
   setActiveDepth: (activeDepth: State['activeDepth']) => void

   clearSelection: () => void

   toggleWellSelection: (id: string) => void
   toggleWellVisibility: (id: string) => void
}

export const useAppStore = create<State & Actions>((set) => ({
   selectedWells: [],
   hiddenWells: [],

   activeWell: null,
   activeLog: null,
   activeDepth: null,

   setSelectedWells: (selectedWells) => set({selectedWells}),
   setActiveWell: (activeWell) => set({activeWell}),
   setActiveLog: (activeLog) => set({activeLog}),
   setActiveDepth: (activeDepth) => set({activeDepth}),

   clearSelection: () => set({selectedWells: []}),

   toggleWellSelection: (id) => set((state) => ({
      selectedWells: state.selectedWells.includes(id)
      ? state.selectedWells.filter(wellId => wellId !== id)
      : [...state.selectedWells, id]
   })),

   toggleWellVisibility: (id) => set((state) => ({
      hiddenWells: state.hiddenWells.includes(id)
      ? state.hiddenWells.filter(wellId => wellId !== id)
      : [...state.hiddenWells, id]
   })),

}))