import type { ReactNode } from "react"

export type Units = 'API' | 'Ohm·m' | 'g/cm³' | '%'

export type LogPoint = {
   depth: number
   gammaRay: number
   resistivity: number
}

export type WellLog = {
   wellId: string
   data: LogPoint[]
}

export type SingleChartProps = {
   data: Record<string, number>[]
   wellIds: string[]
   syncId: string
   unit: Units
}

export type ChartPanelProps = {
   title: string
   unit: Units
   children: ReactNode
}

export type ChartMouseData = {
   activeLabel?: number
}

export type mergeDataByPropertyProps = {
   depths: number[]
   selectedLogs: WellLog[]
   property: keyof Omit<LogPoint, 'depth'>
}

export type ChartConfig = {
   title: string
   unit: Units
   property: keyof Omit<LogPoint, 'depth'>
}