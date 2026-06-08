import { useShallow } from "zustand/shallow";
import { useAppStore } from "../../../../../app/store/useAppStore";

import { interpolateTrajectoryPoint } from "../../../lib/interpolateTrajectoryPoint";
import { interpolateLogValue } from "../../../lib/interpolateLogValue";

import { Html } from "@react-three/drei";

import type { ActiveDepthMarkerProps } from "../../../model/types";

import styles from './ActiveDepthmarker.module.css'

export const ActiveDepthMarker = ({trajectory, wellId, logs}: ActiveDepthMarkerProps) => {
   const [activeDepth, activeWell, activeLog] = useAppStore(useShallow(state => [
      state.activeDepth,
      state.activeWell,
      state.activeLog,
   ]))

   if (activeDepth == null || activeWell !== wellId || !activeLog) return null

   const interpolatedPoint = interpolateTrajectoryPoint(trajectory, activeDepth)
   const logValue = interpolateLogValue({logs, property: activeLog, activeDepth}) 

   if (!interpolatedPoint || logValue == null) return null

   const {x, y, z} = interpolatedPoint

   return (
      <>
         <mesh position={[x, y, z]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color='red' />
         </mesh>

         <Html position={[x + 0.6, y + 1.4, z]}>
            <div className={styles['info-card']}>
               <p>Depth: {activeDepth.toFixed(0)} m</p>
               <p>{activeLog}: {logValue?.toFixed(1)}</p>
            </div>
         </Html>
      </>
   )
}
