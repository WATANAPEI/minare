import Link from 'next/link'
import styles from './sidemenu.module.css'

export const SideMenu: React.FC = () => {
  return (
    <nav>
      <ul className={styles.listContainer}>
        <li className={styles.listItem}>
          <Link href="/admin/items">Items</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/admin/item/new">New Item</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/admin/users">Users</Link>
        </li>
      </ul>
    </nav>
  )
}
