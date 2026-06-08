import type { Well } from "../types/types";

export const MOCK_WELLS: Well[] = [

   {
      id: "well-1",
      name: "Well Alpha",
      lat: 55.10,
      lng: 37.10,

      trajectory: [
         { x: 0.00, y: 0, z: -0.08, depth: 0 },
         { x: 0.12, y: -1, z: 0.00, depth: 200 },
         { x: 0.24, y: -2, z: 0.08, depth: 400 },
         { x: 0.36, y: -3, z: -0.08, depth: 600 },
         { x: 0.48, y: -4, z: 0.00, depth: 800 },
         { x: 0.60, y: -5, z: 0.08, depth: 1000 },
         { x: 0.72, y: -6, z: -0.08, depth: 1200 },
         { x: 0.84, y: -7, z: 0.00, depth: 1400 },
         { x: 0.96, y: -8, z: 0.08, depth: 1600 },
         { x: 1.08, y: -9, z: -0.08, depth: 1800 }
      ],

      logs: [
         { depth: 0, gammaRay: 15, resistivity: 40 },
         { depth: 200, gammaRay: 25, resistivity: 60 },
         { depth: 400, gammaRay: 35, resistivity: 80 },
         { depth: 600, gammaRay: 45, resistivity: 100 },
         { depth: 800, gammaRay: 55, resistivity: 120 },
         { depth: 1000, gammaRay: 65, resistivity: 150 },
         { depth: 1200, gammaRay: 75, resistivity: 180 },
         { depth: 1400, gammaRay: 85, resistivity: 220 },
         { depth: 1600, gammaRay: 90, resistivity: 260 },
         { depth: 1800, gammaRay: 95, resistivity: 300 }
      ],
   },

   {
      id: "well-2",
      name: "Well Beta",
      lat: 55.20,
      lng: 37.20,

      trajectory: [
         { x: 3.00, y: 0, z: -0.08, depth: 0 },
         { x: 3.12, y: -1, z: 0.00, depth: 200 },
         { x: 3.24, y: -2, z: 0.08, depth: 400 },
         { x: 3.36, y: -3, z: -0.08, depth: 600 },
         { x: 3.48, y: -4, z: 0.00, depth: 800 },
         { x: 3.60, y: -5, z: 0.08, depth: 1000 },
         { x: 3.72, y: -6, z: -0.08, depth: 1200 },
         { x: 3.84, y: -7, z: 0.00, depth: 1400 },
         { x: 3.96, y: -8, z: 0.08, depth: 1600 },
         { x: 4.08, y: -9, z: -0.08, depth: 1800 }
      ],

      logs: [
         { depth: 0, gammaRay: 95, resistivity: 50 },
         { depth: 200, gammaRay: 88, resistivity: 70 },
         { depth: 400, gammaRay: 80, resistivity: 90 },
         { depth: 600, gammaRay: 72, resistivity: 110 },
         { depth: 800, gammaRay: 64, resistivity: 130 },
         { depth: 1000, gammaRay: 56, resistivity: 150 },
         { depth: 1200, gammaRay: 48, resistivity: 180 },
         { depth: 1400, gammaRay: 40, resistivity: 220 },
         { depth: 1600, gammaRay: 30, resistivity: 260 },
         { depth: 1800, gammaRay: 20, resistivity: 300 }
      ],
   },

   {
      id: "well-3",
      name: "Well Gamma",
      lat: 55.30,
      lng: 37.30,

      trajectory: [
         { x: -3.00, y: 0, z: -0.08, depth: 0 },
         { x: -2.88, y: -1, z: 0.00, depth: 200 },
         { x: -2.76, y: -2, z: 0.08, depth: 400 },
         { x: -2.64, y: -3, z: -0.08, depth: 600 },
         { x: -2.52, y: -4, z: 0.00, depth: 800 },
         { x: -2.40, y: -5, z: 0.08, depth: 1000 },
         { x: -2.28, y: -6, z: -0.08, depth: 1200 },
         { x: -2.16, y: -7, z: 0.00, depth: 1400 },
         { x: -2.04, y: -8, z: 0.08, depth: 1600 },
         { x: -1.92, y: -9, z: -0.08, depth: 1800 }
      ],

      logs: [
         { depth: 0, gammaRay: 35, resistivity: 100 },
         { depth: 200, gammaRay: 55, resistivity: 140 },
         { depth: 400, gammaRay: 80, resistivity: 200 },
         { depth: 600, gammaRay: 60, resistivity: 160 },
         { depth: 800, gammaRay: 30, resistivity: 120 },
         { depth: 1000, gammaRay: 20, resistivity: 90 },
         { depth: 1200, gammaRay: 45, resistivity: 140 },
         { depth: 1400, gammaRay: 70, resistivity: 210 },
         { depth: 1600, gammaRay: 90, resistivity: 280 },
         { depth: 1800, gammaRay: 65, resistivity: 180 }
      ],
   },

   {
      id: "well-4",
      name: "Well Delta",
      lat: 55.40,
      lng: 37.40,

      trajectory: [
         { x: 6.00, y: 0, z: -0.08, depth: 0 },
         { x: 6.12, y: -1, z: 0.00, depth: 200 },
         { x: 6.24, y: -2, z: 0.08, depth: 400 },
         { x: 6.36, y: -3, z: -0.08, depth: 600 },
         { x: 6.48, y: -4, z: 0.00, depth: 800 },
         { x: 6.60, y: -5, z: 0.08, depth: 1000 },
         { x: 6.72, y: -6, z: -0.08, depth: 1200 },
         { x: 6.84, y: -7, z: 0.00, depth: 1400 },
         { x: 6.96, y: -8, z: 0.08, depth: 1600 },
         { x: 7.08, y: -9, z: -0.08, depth: 1800 }
      ],

      logs: [
         { depth: 0, gammaRay: 45, resistivity: 20 },
         { depth: 200, gammaRay: 46, resistivity: 40 },
         { depth: 400, gammaRay: 47, resistivity: 60 },
         { depth: 600, gammaRay: 48, resistivity: 90 },
         { depth: 800, gammaRay: 49, resistivity: 120 },
         { depth: 1000, gammaRay: 50, resistivity: 150 },
         { depth: 1200, gammaRay: 51, resistivity: 180 },
         { depth: 1400, gammaRay: 52, resistivity: 220 },
         { depth: 1600, gammaRay: 53, resistivity: 260 },
         { depth: 1800, gammaRay: 54, resistivity: 320 }
      ],
   },

   {
      id: "well-5",
      name: "Well Epsilon",
      lat: 55.50,
      lng: 37.50,

      trajectory: [
         { x: -6.00, y: 0, z: -0.08, depth: 0 },
         { x: -5.88, y: -1, z: 0.00, depth: 200 },
         { x: -5.76, y: -2, z: 0.08, depth: 400 },
         { x: -5.64, y: -3, z: -0.08, depth: 600 },
         { x: -5.52, y: -4, z: 0.00, depth: 800 },
         { x: -5.40, y: -5, z: 0.08, depth: 1000 },
         { x: -5.28, y: -6, z: -0.08, depth: 1200 },
         { x: -5.16, y: -7, z: 0.00, depth: 1400 },
         { x: -5.04, y: -8, z: 0.08, depth: 1600 },
         { x: -4.92, y: -9, z: -0.08, depth: 1800 }
      ],

      logs: [
         { depth: 0, gammaRay: 20, resistivity: 300 },
         { depth: 200, gammaRay: 28, resistivity: 270 },
         { depth: 400, gammaRay: 36, resistivity: 240 },
         { depth: 600, gammaRay: 44, resistivity: 210 },
         { depth: 800, gammaRay: 52, resistivity: 180 },
         { depth: 1000, gammaRay: 60, resistivity: 150 },
         { depth: 1200, gammaRay: 68, resistivity: 120 },
         { depth: 1400, gammaRay: 76, resistivity: 90 },
         { depth: 1600, gammaRay: 84, resistivity: 60 },
         { depth: 1800, gammaRay: 92, resistivity: 30 }
      ],
   },

   {
      id: "well-6",
      name: "Well Zeta",
      lat: 55.60,
      lng: 37.60,

      trajectory: [
         { x: -6.00, y: 0, z: 2.92, depth: 0 },
         { x: -5.88, y: -1, z: 3.00, depth: 200 },
         { x: -5.76, y: -2, z: 3.08, depth: 400 },
         { x: -5.64, y: -3, z: 2.92, depth: 600 },
         { x: -5.52, y: -4, z: 3.00, depth: 800 },
         { x: -5.40, y: -5, z: 3.08, depth: 1000 },
         { x: -5.28, y: -6, z: 2.92, depth: 1200 },
         { x: -5.16, y: -7, z: 3.00, depth: 1400 },
         { x: -5.04, y: -8, z: 3.08, depth: 1600 },
         { x: -4.92, y: -9, z: 2.92, depth: 1800 }
      ],

      logs: [
         { depth: 0, gammaRay: 85, resistivity: 250 },
         { depth: 200, gammaRay: 87, resistivity: 255 },
         { depth: 400, gammaRay: 88, resistivity: 260 },
         { depth: 600, gammaRay: 89, resistivity: 265 },
         { depth: 800, gammaRay: 90, resistivity: 270 },
         { depth: 1000, gammaRay: 91, resistivity: 275 },
         { depth: 1200, gammaRay: 92, resistivity: 280 },
         { depth: 1400, gammaRay: 93, resistivity: 285 },
         { depth: 1600, gammaRay: 94, resistivity: 290 },
         { depth: 1800, gammaRay: 95, resistivity: 295 }
      ],
   },

   {
      id: "well-7",
      name: "Well Eta",
      lat: 55.70,
      lng: 37.70,

      trajectory: [
         { x: -3.00, y: 0, z: 2.92, depth: 0 },
         { x: -2.88, y: -1, z: 3.00, depth: 200 },
         { x: -2.76, y: -2, z: 3.08, depth: 400 },
         { x: -2.64, y: -3, z: 2.92, depth: 600 },
         { x: -2.52, y: -4, z: 3.00, depth: 800 },
         { x: -2.40, y: -5, z: 3.08, depth: 1000 },
         { x: -2.28, y: -6, z: 2.92, depth: 1200 },
         { x: -2.16, y: -7, z: 3.00, depth: 1400 },
         { x: -2.04, y: -8, z: 3.08, depth: 1600 },
         { x: -1.92, y: -9, z: 2.92, depth: 1800 }
      ],

      logs: [
         { depth: 0, gammaRay: 10, resistivity: 30 },
         { depth: 200, gammaRay: 12, resistivity: 35 },
         { depth: 400, gammaRay: 14, resistivity: 40 },
         { depth: 600, gammaRay: 15, resistivity: 45 },
         { depth: 800, gammaRay: 17, resistivity: 50 },
         { depth: 1000, gammaRay: 18, resistivity: 55 },
         { depth: 1200, gammaRay: 20, resistivity: 60 },
         { depth: 1400, gammaRay: 22, resistivity: 65 },
         { depth: 1600, gammaRay: 24, resistivity: 70 },
         { depth: 1800, gammaRay: 25, resistivity: 75 }
      ],
   },

   {
      id: "well-8",
      name: "Well Theta",
      lat: 55.80,
      lng: 37.80,

      trajectory: [
         { x: 0.00, y: 0, z: 2.92, depth: 0 },
         { x: 0.12, y: -1, z: 3.00, depth: 200 },
         { x: 0.24, y: -2, z: 3.08, depth: 400 },
         { x: 0.36, y: -3, z: 2.92, depth: 600 },
         { x: 0.48, y: -4, z: 3.00, depth: 800 },
         { x: 0.60, y: -5, z: 3.08, depth: 1000 },
         { x: 0.72, y: -6, z: 2.92, depth: 1200 },
         { x: 0.84, y: -7, z: 3.00, depth: 1400 },
         { x: 0.96, y: -8, z: 3.08, depth: 1600 },
         { x: 1.08, y: -9, z: 2.92, depth: 1800 }
      ],

      logs: [
         { depth: 0, gammaRay: 20, resistivity: 80 },
         { depth: 200, gammaRay: 25, resistivity: 90 },
         { depth: 400, gammaRay: 30, resistivity: 100 },
         { depth: 600, gammaRay: 35, resistivity: 110 },
         { depth: 800, gammaRay: 40, resistivity: 120 },
         { depth: 1000, gammaRay: 85, resistivity: 130 },
         { depth: 1200, gammaRay: 88, resistivity: 150 },
         { depth: 1400, gammaRay: 90, resistivity: 180 },
         { depth: 1600, gammaRay: 92, resistivity: 210 },
         { depth: 1800, gammaRay: 95, resistivity: 240 }
      ],
   },

   {
      id: "well-9",
      name: "Well Iota",
      lat: 55.90,
      lng: 37.90,

      trajectory: [
         { x: 3.00, y: 0, z: 2.92, depth: 0 },
         { x: 3.12, y: -1, z: 3.00, depth: 200 },
         { x: 3.24, y: -2, z: 3.08, depth: 400 },
         { x: 3.36, y: -3, z: 2.92, depth: 600 },
         { x: 3.48, y: -4, z: 3.00, depth: 800 },
         { x: 3.60, y: -5, z: 3.08, depth: 1000 },
         { x: 3.72, y: -6, z: 2.92, depth: 1200 },
         { x: 3.84, y: -7, z: 3.00, depth: 1400 },
         { x: 3.96, y: -8, z: 3.08, depth: 1600 },
         { x: 4.08, y: -9, z: 2.92, depth: 1800 }
      ],

      logs: [
         { depth: 0, gammaRay: 30, resistivity: 100 },
         { depth: 200, gammaRay: 35, resistivity: 120 },
         { depth: 400, gammaRay: 80, resistivity: 250 },
         { depth: 600, gammaRay: 40, resistivity: 140 },
         { depth: 800, gammaRay: 25, resistivity: 90 },
         { depth: 1000, gammaRay: 70, resistivity: 220 },
         { depth: 1200, gammaRay: 30, resistivity: 110 },
         { depth: 1400, gammaRay: 85, resistivity: 280 },
         { depth: 1600, gammaRay: 45, resistivity: 160 },
         { depth: 1800, gammaRay: 60, resistivity: 180 }
      ],
   },

   {
      id: "well-10",
      name: "Well Kappa",
      lat: 56.00,
      lng: 38.00,

      trajectory: [
         { x: 6.00, y: 0, z: 2.92, depth: 0 },
         { x: 6.12, y: -1, z: 3.00, depth: 200 },
         { x: 6.24, y: -2, z: 3.08, depth: 400 },
         { x: 6.36, y: -3, z: 2.92, depth: 600 },
         { x: 6.48, y: -4, z: 3.00, depth: 800 },
         { x: 6.60, y: -5, z: 3.08, depth: 1000 },
         { x: 6.72, y: -6, z: 2.92, depth: 1200 },
         { x: 6.84, y: -7, z: 3.00, depth: 1400 },
         { x: 6.96, y: -8, z: 3.08, depth: 1600 },
         { x: 7.08, y: -9, z: 2.92, depth: 1800 }
      ],

      logs: [
         { depth: 0, gammaRay: 15, resistivity: 20 },
         { depth: 200, gammaRay: 24, resistivity: 50 },
         { depth: 400, gammaRay: 33, resistivity: 80 },
         { depth: 600, gammaRay: 42, resistivity: 110 },
         { depth: 800, gammaRay: 51, resistivity: 140 },
         { depth: 1000, gammaRay: 60, resistivity: 170 },
         { depth: 1200, gammaRay: 69, resistivity: 200 },
         { depth: 1400, gammaRay: 78, resistivity: 230 },
         { depth: 1600, gammaRay: 87, resistivity: 260 },
         { depth: 1800, gammaRay: 96, resistivity: 290 }
      ],
   }
];
