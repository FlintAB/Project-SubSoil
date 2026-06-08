import type { Trajectory } from "../../../entities/well/types/types";

export function interpolateTrajectoryPoint(trajectoryPoints: Trajectory[], activeDepth: number) {

   for(let i = 0; i < (trajectoryPoints.length - 1); i++){
      const currentPoint = trajectoryPoints[i] 
      const nextPoint = trajectoryPoints[i + 1]

      if (currentPoint.depth <= activeDepth && activeDepth <= nextPoint.depth){
         const t = (activeDepth - currentPoint.depth) / (nextPoint.depth - currentPoint.depth)
         
         const [x, y, z ]= [
            currentPoint.x + (nextPoint.x - currentPoint.x) * t, 
            currentPoint.y + (nextPoint.y - currentPoint.y) * t, 
            currentPoint.z + (nextPoint.z - currentPoint.z) * t
         ]
         
         return {
            x,
            y,
            z,
            depth: activeDepth
         }
      } 
   }
   return null 
}