export function isDepthInsideSegment({
   activeDepth,
   startDepth,
   endDepth,
   isLastSegment,
}: {
   activeDepth: number | null
   startDepth: number
   endDepth: number
   isLastSegment: boolean
}) {
   if (activeDepth === null) return false

   return isLastSegment
      ? startDepth <= activeDepth && activeDepth <= endDepth
      : startDepth <= activeDepth && activeDepth < endDepth
}