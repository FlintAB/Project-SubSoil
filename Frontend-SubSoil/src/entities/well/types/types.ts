export type Trajectory = {
   x: number
   y: number
   z: number
   depth: number
}

export type Log = {
   depth: number

   gammaRay: number
   resistivity: number

   density: number
   porosity: number
}

export type LogProperty =
   | 'gammaRay'
   | 'resistivity'
   | 'density'
   | 'porosity'

export type Well = {
   id: string
   name: string

   lat: number
   lng: number

   trajectory: Trajectory[]
   logs: Log[]
}

export type TrajectorySegment = {
   start: Trajectory
   end: Trajectory
}

export type WellTrajectorySegmentProps = {
   segment: TrajectorySegment
   color: string

   onClick: () => void
   onPointerOver: () => void
   onPointerOut: () => void

   isHovered: boolean
   isActive: boolean
   isCurrentDepthSegment: boolean
}

export type GetSegmentColorProps = {
   segment: TrajectorySegment
   logs: Log[]
   property: keyof Omit<Log, "depth">
   range: {
      min: number
      max: number
   } | null
}