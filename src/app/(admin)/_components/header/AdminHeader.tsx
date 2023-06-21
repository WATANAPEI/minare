import styles from './adminheader.module.css'
import Logo from '/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { SearchBar } from './searchBar/SearchBar'
import { ConfigButton } from './config/ConfigButton'

export const AdminHeader: React.FC = () => {
  return (
    <nav className={styles.headerContainer}>
      <div className={styles.imageContainer}>
        <Link href="/">
          <Image src={Logo} alt="minare logo" width={60} height={60} />
        </Link>
      </div>
      <div className={styles.searchBarContainer}>
        <SearchBar />
      </div>
      <div className={styles.configContainer}>
        <ConfigButton />
      </div>
    </nav>
  )
}
