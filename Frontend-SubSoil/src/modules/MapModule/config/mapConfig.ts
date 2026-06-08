import type { LatLngExpression } from "leaflet";

const defaultPosition: LatLngExpression = [55.75, 37.61];

const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

const URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' 

export {defaultPosition, ATTRIBUTION, URL}