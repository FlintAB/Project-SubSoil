import { ParsedLAS } from "../types/las.types"
import { Well } from "../types/well.types"


type Props = {
   parsedLAS: ParsedLAS
   fileName: string
}

export function mapParsedLasToWell({ parsedLAS,fileName }: Props): Well {

   const logs = parsedLAS.data.map(row => ({
      depth: row.DEPT,

      gammaRay: row.GR,
      resistivity: row.RT,

      density: row.RHOB,
      porosity: row.NPHI,
   }))

   const trajectory = parsedLAS.trajectory.map(point => ({
      depth: point.depth,

      x: point.x,
      y: point.y,
      z: point.z,
   }))

   return {
      id:
         parsedLAS.wellInfo.wellName ??
         fileName.replace('.las', ''),

      name:
         parsedLAS.wellInfo.wellName ??
         fileName.replace('.las', ''),

      lat: parsedLAS.lat ?? 0,
      lng: parsedLAS.lng ?? 0,

      trajectory,
      logs,
   }
}