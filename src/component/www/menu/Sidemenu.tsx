import Link from 'next/link'
import styles from './sidemenu.module.css'

export const SideMenu: React.FC = () => {
  return (
    <nav>
      <ul className={styles.listContainer}>
        <li className={styles.listItem}>
          <Link className={styles.link} href="/cart">
            <h3>Cart</h3>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link className={styles.link} href="/items">
            <h3>Search</h3>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link className={styles.link} href="/account">
            <h3>Account Service</h3>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
