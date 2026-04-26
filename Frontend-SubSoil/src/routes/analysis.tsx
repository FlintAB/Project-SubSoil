import { createFileRoute } from '@tanstack/react-router'
import { AnalysisPage } from '../pages/AnalysisPage/AnalysisPage'

export const Route = createFileRoute('/analysis')({
   component: AnalysisPage,
})
