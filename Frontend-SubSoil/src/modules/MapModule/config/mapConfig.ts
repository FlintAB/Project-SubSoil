import type { LatLngExpression } from "leaflet";

const defaultPosition: LatLngExpression = [55.75, 37.61];

const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'

const URL = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"

export {defaultPosition, ATTRIBUTION, URL}