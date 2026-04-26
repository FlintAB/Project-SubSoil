import { createRootRoute } from '@tanstack/react-router'
import { App } from '../app/App'

export const Route = createRootRoute({ 
   component: App, 
   notFoundComponent: () => <div>404 Not Found</div>, 
})