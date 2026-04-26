import { Link, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import { useAppStore } from "./store/useAppStore"

export const App = () => {
   const activeWell = useAppStore((state) => state.activeWell)
   const setActiveWell = useAppStore((state) => state.setActiveWell)

   return (
      <>      
         <Link to="/">
            Map Page
         </Link>{' '}

         <Link to="/analysis">
            Analysis Page
         </Link>

         <div>Hello "__root"!</div>

         <div>
            <p>ActiveWell: {activeWell}</p>
            <button onClick={() => setActiveWell('well-1')}>Set ActiveWell</button>
         </div>

         <Outlet />
         <TanStackRouterDevtools />
      </>
   )
}