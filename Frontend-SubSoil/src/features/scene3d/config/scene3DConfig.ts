import type { CameraProps } from "@react-three/fiber"

const CAMERA_CONFIG: CameraProps = {
   position: [5, 5, 5],
   fov: 60,
}

const RANGES_FOR_LOG_LEGENDS = [
   { color: 'blue', label: 'Низкие значения' },
   { color: 'lime', label: 'Средние значения' },
   { color: 'yellow', label: 'Высокие значения' },
   { color: 'red', label: 'Максимальные значения' },
]

const LOG_LEGENDS = {
   gammaRay: {
      title: 'Gamma Ray',
      unit: 'API',
      ranges: RANGES_FOR_LOG_LEGENDS
   },

   resistivity: {
      title: 'Resistivity',
      unit: 'Ohm·m',
      ranges: RANGES_FOR_LOG_LEGENDS
   },

   density: {
      title: 'Density',
      unit: 'g/cm³',
      ranges: RANGES_FOR_LOG_LEGENDS
   },

   porosity: {
      title: 'Porosity',
      unit: '%',
      ranges: RANGES_FOR_LOG_LEGENDS
   }
}

export {CAMERA_CONFIG, LOG_LEGENDS}