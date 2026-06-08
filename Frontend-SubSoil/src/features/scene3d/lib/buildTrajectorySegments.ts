import type { Trajectory, TrajectorySegment } from "../../../entities/well/types/types";

export function buildTrajectorySegments(trajectory: Trajectory[]): TrajectorySegment[] {
   const result = []

   for (let i = 0; i < (trajectory.length - 1); i++) {
      const start = trajectory[i]
      const end = trajectory[i + 1]

      result.push({start, end})
   }

   return result
}