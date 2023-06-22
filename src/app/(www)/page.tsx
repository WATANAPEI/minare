import Link from 'next/link'
import styles from './Home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="./admin">Admin page</Link>
    </main>
  )
}
