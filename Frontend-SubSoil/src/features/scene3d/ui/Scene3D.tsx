import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import { CAMERA_CONFIG } from "../config/scene3DConfig"
import { MOCK_WELLS } from "../../../entities/well/model/well.mock"

import { useAppStore } from "../../../app/store/useAppStore"
import { useShallow } from "zustand/shallow"

import { WellMesh } from "./components/WellMesh"
import { ActiveDepthMarker } from "./components/ActiveDepthMarker/ActiveDepthMarker"
import { Fragment } from "react/jsx-runtime"

import styles from './Scene3D.module.css'

export const Scene3D = () => {
   const isHovered = useAppStore(state => !!state.hoveredWell)
   const [selectedWells, hiddenWells] = useAppStore(useShallow(state => [
      state.selectedWells,
      state.hiddenWells
   ]))

   const visibleWells = MOCK_WELLS.filter(well => 
      selectedWells.includes(well.id) && !hiddenWells.has(well.id)
   )

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
                  />
                  <ActiveDepthMarker trajectory={well.trajectory} wellId={well.id} logs={well.logs} />
               </Fragment>
            )}

         </Canvas>
      </div>
   )
}