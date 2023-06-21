import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function adminHome() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Here is admin home.
          <br />
          Check it out.
          <Link href="/">Back to Home</Link>
        </p>
        <div></div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}></div>
    </main>
  )
}
