import type { ReactNode } from "react"
import type { Log, Well } from "../../../entities/well/types/types"

export type Units = 'API' | 'Ohm·m' | 'g/cm³' | '%'

export type SingleChartProps = {
   data: Record<string, number>[]
   wellIds: string[]
   syncId: string
   unit: Units
   property: keyof Omit<Log, 'depth'>
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
   selectedWellData: Well[]
   property: keyof Omit<Log, 'depth'>
}

export type ChartConfig = {
   title: string
   unit: Units
   property: keyof Omit<Log, 'depth'>
}