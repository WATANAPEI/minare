import Link from 'next/link'
import styles from './Index.module.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Top | Minare',
  description: 'Admin top page of minare'
}

export default function Index() {
  return (
    <main className={styles.main}>
      <Link href="/admin">Admin page</Link>
    </main>
  )
}
