import { create } from "zustand"

type State = {
   selectedWells: string[]
   activeWell: string | null
   activeLog: string | null
   activeDepth: number | null
}

type Actions = {
   setSelectedWells: (selectedWells: State['selectedWells']) => void
   setActiveWell: (activeWell: State['activeWell']) => void
   setActiveLog: (activeLog: State['activeLog']) => void
   setActiveDepth: (activeDepth: State['activeDepth']) => void
}

export const useAppStore = create<State & Actions>((set) => ({
   selectedWells: [],
   activeWell: null,
   activeLog: null,
   activeDepth: null,

   setSelectedWells: (selectedWells) => set({selectedWells}),
   setActiveWell: (activeWell) => set({activeWell}),
   setActiveLog: (activeLog) => set({activeLog}),
   setActiveDepth: (activeDepth) => set({activeDepth}),
}))