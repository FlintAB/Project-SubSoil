import { memo } from "react"

import { useShallow } from "zustand/shallow"
import { useAppStore } from "../../../../app/store/useAppStore"

import { buildTrajectorySegments } from "../../lib/buildTrajectorySegments"
import { isDepthInsideSegment } from "../../lib/isDepthInsideSegment"
import { getSegmentColor } from "../../lib/getSegmentColor"

import { WellTrajectorySegment } from "./WellTrajectorySegment"

import type { WellMeshProps } from "../../model/types"

export const WellMesh = memo(({wellId, trajectory, logs, range}: WellMeshProps) => {
   const [setHoveredWell, setActiveWell, activeDepth, activeLog] = useAppStore(useShallow(state => [
      state.setHoveredWell,
      state.setActiveWell,
      state.activeDepth,
      state.activeLog
   ]))

   const isActive = useAppStore(state => state.activeWell === wellId)
   const isHovered = useAppStore(state => state.hoveredWell === wellId)

   const segments = buildTrajectorySegments(trajectory)

   const handleClick = () => setActiveWell(wellId)
   const handleOver = () => setHoveredWell(wellId)
   const handleOut = () => setHoveredWell(null)

   return (
      <>
         {segments.map((segment, index) => {
         const startDepth = segment.start.depth
         const endDepth = segment.end.depth

         const isCurrentDepthSegment = isDepthInsideSegment({
            activeDepth,
            startDepth,
            endDepth,
            isLastSegment: index === segments.length - 1,
         })
         
         const segmentColor = getSegmentColor({ segment, logs, property: activeLog ?? 'gammaRay', range })

            return (
               <WellTrajectorySegment 
                  key={index}
                  segment={segment}
                  color={segmentColor}

                  onClick={handleClick}
                  onPointerOver={handleOver}
                  onPointerOut={handleOut}

                  isHovered={isHovered}
                  isActive={isActive}
                  isCurrentDepthSegment={isCurrentDepthSegment}
               />
            )

         })}
      </>
   )
})