import Link from 'next/link'
import styles from './adminHome.module.css'

export default function AdminTop() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Here is admin home.</p>
      </div>
    </main>
  )
}
