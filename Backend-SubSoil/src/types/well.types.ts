export type LogPoint = {
   depth: number

   gammaRay: number
   resistivity: number

   density: number
   porosity: number
}

export type TrajectoryPoint = {
   depth: number

   x: number
   y: number
   z: number
}

export type Well = {
   id: string
   name: string

   lat: number
   lng: number

   trajectory: TrajectoryPoint[]
   logs: LogPoint[]
}