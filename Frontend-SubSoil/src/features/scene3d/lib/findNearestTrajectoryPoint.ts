import type { Trajectory } from "../../../entities/well/types/types"

export function findNearestTrajectoryPoint(trajectory: Trajectory[], activeDepth: number) {
   if (!activeDepth || trajectory.length === 0) return null

   let nearestPoint = trajectory[0]
   let minDistance =  Math.abs(trajectory[0].depth - activeDepth)

   for (const point of trajectory){
      const distance = Math.abs(point.depth - activeDepth)

      if (distance < minDistance){
         minDistance = distance
         nearestPoint = point
      }
   }

   return nearestPoint
}
