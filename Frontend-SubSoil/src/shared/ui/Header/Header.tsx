import { Link } from "@tanstack/react-router"

import styles from './Header.module.css'

const LINKS = [
   {link: '/', name: 'Карта'},
   {link: '/analysis', name: 'Анализ'},
   {link: '/scene3d', name: '3D-сцена'},
]

export const Header = () => (
   <header className={styles.container}>

      <nav className={styles.nav}>
         {LINKS.map(({link, name}) => (
            <Link 
            key={link} 
            to={link}
            className={styles.link}
            activeProps={{className: styles.activeLink}}
            >
               {name}
            </Link>
         ))}
      </nav>

   </header>
)