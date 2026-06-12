import { useWells } from "../../../entities/well/api/useWells"
import { useAppStore } from "../../../app/store/useAppStore"

import { CHART_CONFIG } from "../config/chartConfig"

import { mergeDataByProperty } from "../lib/mergeDataByProperty"

import { ChartPanel } from "./components/ChartPanel"
import { SingleChart } from "./components/SingleChart"

import styles from "./Analysis.module.css"

export const Analysis = () => {
   const { data: wells, isLoading, isError } = useWells()
   const selectedWells = useAppStore(state => state.selectedWells)

   if (isLoading) {
      return <div className={styles.state}>Загрузка скважин…</div>
   }

   if (isError) {
      return (
         <div className={`${styles.state} ${styles.stateError}`}>
            Ошибка при загрузке скважин
         </div>
      )
   }

   if (!wells) {
      return null
   }

   const selectedWellData = wells.filter((well) => selectedWells.includes(well.id))

   if (selectedWellData.length === 0) {
      return (
         <div className={styles.empty}>
            <h2 className={styles.emptyTitle}>Нет выбранных скважин</h2>
            <p className={styles.emptyText}>
               Вернитесь на карту и выберите одну или несколько скважин,
               чтобы построить графики каротажа.
            </p>
         </div>
      )
   }

   const depths = selectedWellData[0].logs.map((p) => p.depth)

   return (
      <div className={styles.root}>
         <header className={styles.header}>
            <span className={styles.eyebrow}>Каротажный анализ</span>
            <h1 className={styles.title}>Анализ скважин</h1>
            <p className={styles.meta}>
               Активных скважин: <strong>{selectedWells.length}</strong>
            </p>
         </header>

         <div className={styles.charts}>
            {CHART_CONFIG.map(data => {
               const mergedData = mergeDataByProperty({ depths, selectedWellData, property: data.property })
               return (
                  <ChartPanel key={data.property} title={data.title} unit={data.unit}>
                     <SingleChart data={mergedData} wellIds={selectedWells} syncId="well-analysis" unit={data.unit} property={data.property} />
                  </ChartPanel>
               )
            })}
         </div>
      </div>
   )
}
