import { Link, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

export const App = () => {
   return (
      <>      
         <Link to="/">
            Map Page
         </Link>{' '}

         <Link to="/analysis">
            Analysis Page
         </Link>

         <div>Hello "__root"!</div>

         <Outlet />
         <TanStackRouterDevtools />
      </>
   )
}