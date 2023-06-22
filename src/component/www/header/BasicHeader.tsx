import styles from './basicHeader.module.css'
import Logo from '/public/minare_logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export const BasicHeader: React.FC = () => {
  return (
    <nav className={styles.headerContainer}>
      <div className={styles.imageContainer}>
        <Link href="/">
          <Image src={Logo} alt="minare logo" width={120} height={40} />
        </Link>
      </div>
    </nav>
  )
}
