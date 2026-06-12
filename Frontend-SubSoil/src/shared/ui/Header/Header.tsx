import { Link } from "@tanstack/react-router"

import styles from './Header.module.css'

const LINKS = [
   { link: '/', name: 'Карта' },
   { link: '/analysis', name: 'Анализ' },
   { link: '/scene3d', name: '3D-сцена' },
]

export const Header = () => (
   <header className={styles.container}>

      <Link to="/" className={styles.brand}>
         <span className={styles.logo} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
               <path
                  d="M12 2 5 6v6c0 4 3 7 7 8 4-1 7-4 7-8V6l-7-4Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
               />
               <path
                  d="M12 7v10M8.5 9.5 12 12l3.5-2.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               />
            </svg>
         </span>
         <span className={styles.brandText}>
            Sub<span className={styles.brandAccent}>Soil</span>
         </span>
         <span className={styles.brandTag}>Well Analytics</span>
      </Link>

      <nav className={styles.nav}>
         {LINKS.map(({ link, name }) => (
            <Link
               key={link}
               to={link}
               className={styles.link}
               activeProps={{ className: `${styles.link} ${styles.activeLink}` }}
               activeOptions={{ exact: link === '/' }}
            >
               {name}
            </Link>
         ))}
      </nav>

   </header>
)
