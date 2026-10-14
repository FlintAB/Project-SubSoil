import type { LatLngExpression } from "leaflet";

const defaultPosition: LatLngExpression = [55.75, 37.61];

const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'

const URL = "https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=cb1_4k5o_1_e633dcc2a25bb0085e332873"

export {defaultPosition, ATTRIBUTION, URL}
