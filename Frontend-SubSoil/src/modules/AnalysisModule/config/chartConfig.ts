import type { ChartConfig } from "../model/types";

export const CHART_CONFIG: ChartConfig[] = [
   {title: 'Гамма-каротаж', unit: 'API', property: 'gammaRay'},
   {title: 'Удельное сопротивление', unit: 'Ohm·m', property: 'resistivity'},
   {title: 'Плотность', unit: 'g/cm³', property: 'density'},
   {title: 'Пористость', unit: '%', property: 'porosity'}
]

/** Палитра для различения скважин на графиках и в чекбоксах */
export const WELL_COLORS = [
   '#f59e0b',
   '#06b6d4',
   '#4ade80',
   '#c084fc',
   '#f472b6',
   '#60a5fa',
   '#facc15',
   '#fb7185',
]

export const getWellColor = (index: number) =>
   WELL_COLORS[index % WELL_COLORS.length]
