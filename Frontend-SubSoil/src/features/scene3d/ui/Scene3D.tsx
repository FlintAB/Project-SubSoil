import { useMemo } from "react"
import { useWells } from "../../../entities/well/api/useWells"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import { CAMERA_CONFIG } from "../config/scene3DConfig"

import { useAppStore } from "../../../app/store/useAppStore"
import { useShallow } from "zustand/shallow"

import { WellMesh } from "./components/WellMesh"
import { ActiveDepthMarker } from "./components/ActiveDepthMarker/ActiveDepthMarker"
import { Fragment } from "react/jsx-runtime"

import styles from './Scene3D.module.css'

export const Scene3D = () => {
   const {data, isError, isLoading, error} = useWells()

   const isHovered = useAppStore(state => !!state.hoveredWell)
   const [selectedWells, hiddenWells, activeLog] = useAppStore(useShallow(state => [
      state.selectedWells,
      state.hiddenWells,
      state.activeLog,
   ]))


   const visibleWells = useMemo(() => {
      const wells = data ?? []

      return wells.filter(
         well =>
            selectedWells.includes(well.id) &&
            !hiddenWells.has(well.id)
      )
   },
      [data, selectedWells, hiddenWells]
   )


   const range = useMemo(() => {
      if (!activeLog) return null

      let min = Infinity
      let max = -Infinity

      for (const well of visibleWells) {
         for (const log of well.logs) {
            const value = log[activeLog]

            if (value < min) min = value
            if (value > max) max = value
         }
      }

      if (min === Infinity) return null

      return { min, max }
   }, [visibleWells, activeLog])


   if (isLoading) {
      return <div>Загрузка скважин...</div>
   }

   if (isError) {
      return <div>Ошибка при получении скважин: {error.message}</div>
   }


   return (
      <div className={`${styles.container} ${isHovered ? styles['hovered-cursor'] : ''}`}>
         <Canvas camera={CAMERA_CONFIG}>

            <OrbitControls />

            <ambientLight intensity={0.5}/>
            <directionalLight position={[5, 5, 5]} />

            <gridHelper args={[20, 20]} />
            <axesHelper args={[10]} />

            {visibleWells.map(well => 
               <Fragment key={well.id}>
                  <WellMesh 
                  wellId={well.id}    
                  trajectory={well.trajectory} 
                  logs={well.logs}
                  range={range}
                  />
                  <ActiveDepthMarker trajectory={well.trajectory} wellId={well.id} logs={well.logs} />
               </Fragment>
            )}

         </Canvas>
      </div>
   )
}