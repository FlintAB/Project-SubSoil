import type { Well } from "../types/types";

export const MOCK_WELLS: Well[] = [
   {
      id: "well-1",
      name: "Well Alpha",

      lat: 55.75,
      lng: 37.61,

      trajectory: [
         { x: 0, y: 0, z: 0, depth: 0 },
         { x: 0.2, y: -2, z: 0.1, depth: 500 },
         { x: 0.5, y: -4, z: 0.3, depth: 1000 },
         { x: 0.7, y: -6, z: 0.5, depth: 1500 },
      ],

      logs: [
         { depth: 0, gammaRay: 35, resistivity: 120 },
         { depth: 500, gammaRay: 42, resistivity: 135 },
         { depth: 1000, gammaRay: 55, resistivity: 150 },
         { depth: 1500, gammaRay: 48, resistivity: 170 },
      ],
   },

   {
      id: "well-2",
      name: "Well Beta",

      lat: 55.80,
      lng: 37.80,

      trajectory: [
         { x: 3, y: 0, z: 0, depth: 0 },
         { x: 3.2, y: -2, z: 0.4, depth: 500 },
         { x: 3.5, y: -4, z: 0.8, depth: 1000 },
         { x: 3.8, y: -6, z: 1.1, depth: 1500 },
      ],

      logs: [
         { depth: 0, gammaRay: 25, resistivity: 110 },
         { depth: 500, gammaRay: 30, resistivity: 125 },
         { depth: 1000, gammaRay: 38, resistivity: 145 },
         { depth: 1500, gammaRay: 45, resistivity: 160 },
      ],
   },

   {
      id: "well-3",
      name: "Well Gamma",

      lat: 55.10,
      lng: 36.80,

      trajectory: [
         { x: -3, y: 0, z: 0, depth: 0 },
         { x: -2.7, y: -2, z: -0.2, depth: 500 },
         { x: -2.4, y: -4, z: -0.4, depth: 1000 },
         { x: -2.1, y: -6, z: -0.6, depth: 1500 },
      ],

      logs: [
         { depth: 0, gammaRay: 60, resistivity: 100 },
         { depth: 500, gammaRay: 72, resistivity: 120 },
         { depth: 1000, gammaRay: 80, resistivity: 135 },
         { depth: 1500, gammaRay: 76, resistivity: 140 },
      ],
   },

   {
      id: "well-4",
      name: "Well Delta",

      lat: 55.80,
      lng: 38.80,

      trajectory: [
         { x: 6, y: 0, z: 0, depth: 0 },
         { x: 6.2, y: -2, z: -0.3, depth: 500 },
         { x: 6.5, y: -4, z: -0.5, depth: 1000 },
         { x: 6.8, y: -6, z: -0.7, depth: 1500 },
      ],

      logs: [
         { depth: 0, gammaRay: 45, resistivity: 130 },
         { depth: 500, gammaRay: 52, resistivity: 145 },
         { depth: 1000, gammaRay: 60, resistivity: 165 },
         { depth: 1500, gammaRay: 58, resistivity: 180 },
      ],
   },
]