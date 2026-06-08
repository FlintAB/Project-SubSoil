import type { Log, Trajectory } from "../../../entities/well/types/types"

export type WellPositions = {
   wellId: string
   position: [number, number, number]
}

export type WellMeshProps = {
   wellId: string
   trajectory: Trajectory[]
   color?: string
   logs: Log[]
}

export type ActiveDepthMarkerProps = {
   wellId: string
   trajectory: Trajectory[]
   logs: Log[]
}

export type InterpolateLogValueProps = {
   logs: Log[]
   property: keyof Omit<Log, 'depth'>
   activeDepth: number
}