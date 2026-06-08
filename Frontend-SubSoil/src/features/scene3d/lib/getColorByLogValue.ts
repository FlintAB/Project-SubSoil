/**
 * Преобразует значение каротажного параметра
 * в цвет HSL на основе глобального диапазона.
 *
 * Цветовая шкала:
 *
 * blue   → low values
 * green  → medium values
 * yellow → high values
 * red    → maximum values
 *
 * @param value Значение каротажа.
 * @param min Минимальное значение шкалы.
 * @param max Максимальное значение шкалы.
 *
 * @returns Цвет в формате hsl(...)
 */
export function getColorByLogValue(value: number, min: number, max: number) {
   // Нормализация значения в диапазон [0; 1]
   const normalized = (value - min) / (max - min)

   // Защита от выхода за пределы шкалы
   const clamped = Math.max( 0, Math.min(1, normalized) )

   // Преобразование значения в оттенок HSL: 240° (синий) → 0° (красный)
   const hue = 240 - clamped * 240

   return `hsl(${hue}, 100%, 50%)`
}