export type CurveDataPoint = {
   depth: number
   value: number
}

export type WellCurve = {
   mnemonic: string
   unit: string
   description: string

   data: CurveDataPoint[]
}

export type LoadedWell = {
   id: string
   name: string

   curves: WellCurve[]
}