import {  Outlet } from "@tanstack/react-router"

import { Header } from "../shared/ui/Header/Header"

import styles from './App.module.css'

export const App = () => {
   return (
      <div className={styles['main-bg']}>      
         <Header />

         <Outlet />
      </div>
   )
}