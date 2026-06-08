import type { LogProperty } from "../../../entities/well/types/types"
import { COLOR_SCALE_CONFIG } from "../config/colorScaleConfig"

/**
 * Преобразует значение каротажного параметра в цвет HSL.
 *
 * Цвет вычисляется на основе непрерывной цветовой шкалы:
 * - минимальные значения отображаются синим цветом;
 * - средние значения проходят через зелёный и жёлтый;
 * - максимальные значения отображаются красным цветом.
 *
 * Алгоритм работы:
 * 1. Получает диапазон допустимых значений для выбранного типа каротажа.
 * 2. Нормализует значение в диапазон [0; 1].
 * 3. Ограничивает результат на случай выхода за границы шкалы.
 * 4. Преобразует нормализованное значение в оттенок HSL.
 * 5. Возвращает CSS-цвет в формате `hsl(...)`.
 *
 * Используется для цветовой визуализации сегментов траектории скважины в 3D-сцене.
 *
 * @param value Значение каротажного параметра.
 * @param property Тип каротажа (gammaRay, resistivity и др.).
 *
 * @returns Цвет в формате HSL.
 *
 * @example
 * getColorByLogValue(25, 'gammaRay') => hsl(180, 100%, 50%)
 *
 * @example
 * getColorByLogValue(100, 'gammaRay') => hsl(0, 100%, 50%)
 */
export function getColorByLogValue(value: number, property: LogProperty) {
   const { min, max } = COLOR_SCALE_CONFIG[property]

   // Нормализация значения в диапазон [0; 1]
   const normalized = (value - min) / (max - min)

   // Защита от выхода за пределы шкалы
   const clamped = Math.max( 0, Math.min(1, normalized) )

   // Преобразование значения в оттенок HSL: 240° (синий) → 0° (красный)
   const hue = 240 - clamped * 240

   return `hsl(${hue}, 100%, 50%)`
}