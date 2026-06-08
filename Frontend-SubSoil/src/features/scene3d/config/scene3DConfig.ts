import type { CameraProps } from "@react-three/fiber"

const CAMERA_CONFIG: CameraProps = {
   position: [5, 5, 5],
   fov: 60,
}

const LOG_LEGENDS = {
   gammaRay: {
      title: 'Gamma Ray',
      unit: 'API',
      ranges: [
         { color: 'blue', label: 'Низкие значения' },
         { color: 'lime', label: 'Средние значения' },
         { color: 'yellow', label: 'Высокие значения' },
         { color: 'red', label: 'Максимальные значения' },
      ],
   },

   resistivity: {
      title: 'Resistivity',
      unit: 'Ohm·m',
      ranges: [
         { color: 'blue', label: 'Низкие значения' },
         { color: 'lime', label: 'Средние значения' },
         { color: 'yellow', label: 'Высокие значения' },
         { color: 'red', label: 'Максимальные значения' },
      ],
   },
}

export {CAMERA_CONFIG, LOG_LEGENDS}