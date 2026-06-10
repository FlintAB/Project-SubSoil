export type LasCurve = {
   mnemonic: string
   unit: string
   description: string
}

export type LasWellInfo = {
   startDepth?: number
   stopDepth?: number
   step?: number
   nullValue?: number
   wellName?: string
}

export type ParsedTrajectoryPoint = {
   depth: number
   x: number
   y: number
   z: number
}

export type ParsedLAS = {
   wellInfo: LasWellInfo

   lat?: number
   lng?: number

   curves: LasCurve[]

   data: Record<string, number>[]

   trajectory: ParsedTrajectoryPoint[]
}