import { createFileRoute } from '@tanstack/react-router'
import { MapPage } from '../pages/MapPage/MapPage'

export const Route = createFileRoute('/')({
   component: MapPage,
})