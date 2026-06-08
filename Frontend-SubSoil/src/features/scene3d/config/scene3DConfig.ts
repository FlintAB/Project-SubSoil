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
         { color: 'blue', label: '0 - 40' },
         { color: 'yellow', label: '40 - 70' },
         { color: 'red', label: '70+' },
      ],
   },

   resistivity: {
      title: 'Resistivity',
      unit: 'Ohm·m',
      ranges: [
         { color: 'blue', label: '0 - 120' },
         { color: 'yellow', label: '120 - 150' },
         { color: 'red', label: '150+' },
      ],
   },
}

export {CAMERA_CONFIG, LOG_LEGENDS}