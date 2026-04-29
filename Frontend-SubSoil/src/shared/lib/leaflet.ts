import  L  from 'leaflet';
import  defaultMarkerSVG  from '../assets/markers/defaultMarker.svg'
import  selectedMarkerSVG  from '../assets/markers/selectedMarker.svg'

export const defaultMarker = new L.Icon({
   iconUrl: defaultMarkerSVG,
   iconRetinaUrl: defaultMarkerSVG,
   iconSize: [35, 35],
   iconAnchor: [17, 35],
   popupAnchor: [-0, -35],
})

export const selectedMarker = new L.Icon({
   iconUrl: selectedMarkerSVG,
   iconRetinaUrl: selectedMarkerSVG,
   iconSize: [35, 35],
   iconAnchor: [17, 35],
   popupAnchor: [-0, -35],
})