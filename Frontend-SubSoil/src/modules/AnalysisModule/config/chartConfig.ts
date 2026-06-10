import type { ChartConfig } from "../model/types";

export const CHART_CONFIG: ChartConfig[] = [
   {title: 'Gamma-Ray-Analysis', unit: 'API', property: 'gammaRay'},
   {title: 'Resistivity-Analysis', unit: 'Ohm·m', property: 'resistivity'},
   {title: 'Density', unit: 'g/cm³', property: 'density'},
   {title: 'Porosity', unit: '%', property: 'porosity'}
]