import { CatmullRomCurve3, Vector3, TubeGeometry } from "three"
import { useMemo } from "react"

import type { WellTrajectorySegmentProps } from "../../../../entities/well/types/types"


export const WellTrajectorySegment = ({ segment, color = 'orange', onClick, onPointerOut, onPointerOver, isHovered, isActive, isCurrentDepthSegment}: WellTrajectorySegmentProps) => {

   const curve = useMemo(() => {
      return new CatmullRomCurve3([
         new Vector3(
            segment.start.x,
            segment.start.y,
            segment.start.z
         ),
         new Vector3(
            segment.end.x,
            segment.end.y,
            segment.end.z
         ),
      ])
   }, [segment])

   const geometry = useMemo(() => {
      const radius = isHovered ? 0.22 : 0.15

      return new TubeGeometry(
         curve,
         8,
         radius,
         8,
         false
      )
   }, [curve, isHovered])

   return (
      <mesh
         geometry={geometry}
         onClick={onClick}
         onPointerOver={onPointerOver}
         onPointerOut={onPointerOut}
      >
         <meshStandardMaterial 
         color={color}
         wireframe={isActive}
         emissive={isCurrentDepthSegment ? 'white' : 'black'}
         emissiveIntensity={isCurrentDepthSegment ? 1 : 0}
         />
      </mesh>
   )
}