import { Well } from "../types/well.types";

export const wells: Well[] = [
   {
      id: "скв-101",
      name: "Скважина 101",

      lat: 55.7900,
      lng: 37.6200,

      trajectory: [
         { depth: 0, x: 0.0, y: 0, z: 0.0 },
         { depth: 250, x: 0.1, y: -2, z: 0.1 },
         { depth: 500, x: 0.3, y: -4, z: 0.2 },
         { depth: 750, x: 0.5, y: -6, z: 0.3 },
         { depth: 1000, x: 0.8, y: -9, z: 0.4 },
      ],

      logs: [
         {
            depth: 0,
            gammaRay: 22,
            resistivity: 85,
            density: 2.12,
            porosity: 0.34,
         },
         {
            depth: 250,
            gammaRay: 30,
            resistivity: 102,
            density: 2.18,
            porosity: 0.31,
         },
         {
            depth: 500,
            gammaRay: 42,
            resistivity: 126,
            density: 2.24,
            porosity: 0.28,
         },
         {
            depth: 750,
            gammaRay: 57,
            resistivity: 148,
            density: 2.31,
            porosity: 0.24,
         },
         {
            depth: 1000,
            gammaRay: 68,
            resistivity: 171,
            density: 2.38,
            porosity: 0.21,
         },
      ],
   },

   {
      id: "скв-102",
      name: "Скважина 102",

      lat: 55.7558,
      lng: 37.6176,

      trajectory: [
         { depth: 0, x: 2.0, y: 0, z: 0.5 },
         { depth: 250, x: 2.2, y: -2, z: 0.7 },
         { depth: 500, x: 2.5, y: -4, z: 0.9 },
         { depth: 750, x: 2.9, y: -6, z: 1.2 },
         { depth: 1000, x: 3.4, y: -8, z: 1.5 },
      ],

      logs: [
         {
            depth: 0,
            gammaRay: 18,
            resistivity: 65,
            density: 2.05,
            porosity: 0.39,
         },
         {
            depth: 250,
            gammaRay: 25,
            resistivity: 82,
            density: 2.11,
            porosity: 0.35,
         },
         {
            depth: 500,
            gammaRay: 36,
            resistivity: 101,
            density: 2.17,
            porosity: 0.31,
         },
         {
            depth: 750,
            gammaRay: 49,
            resistivity: 129,
            density: 2.25,
            porosity: 0.27,
         },
         {
            depth: 1000,
            gammaRay: 63,
            resistivity: 160,
            density: 2.33,
            porosity: 0.23,
         },
      ],
   },

   {
      id: "скв-103",
      name: "Скважина 103",

      lat: 55.7200,
      lng: 37.6150,

      trajectory: [
         { depth: 0, x: -2.0, y: 0, z: 1.0 },
         { depth: 250, x: -1.7, y: -2, z: 1.1 },
         { depth: 500, x: -1.3, y: -4, z: 1.3 },
         { depth: 750, x: -0.8, y: -6, z: 1.6 },
         { depth: 1000, x: -0.2, y: -8, z: 2.0 },
      ],

      logs: [
         {
            depth: 0,
            gammaRay: 28,
            resistivity: 95,
            density: 2.18,
            porosity: 0.29,
         },
         {
            depth: 250,
            gammaRay: 39,
            resistivity: 118,
            density: 2.24,
            porosity: 0.27,
         },
         {
            depth: 500,
            gammaRay: 52,
            resistivity: 145,
            density: 2.30,
            porosity: 0.24,
         },
         {
            depth: 750,
            gammaRay: 70,
            resistivity: 182,
            density: 2.39,
            porosity: 0.20,
         },
         {
            depth: 1000,
            gammaRay: 86,
            resistivity: 225,
            density: 2.48,
            porosity: 0.17,
         },
      ],
   },
]
