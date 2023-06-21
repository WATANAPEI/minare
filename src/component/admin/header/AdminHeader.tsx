import styles from './adminheader.module.css'
import Logo from '/public/minare_logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { SearchBar } from './searchBar/SearchBar'
import { ConfigButton } from './config/ConfigButton'

export const AdminHeader: React.FC = () => {
  return (
    <nav className={styles.headerContainer}>
      <div className={styles.imageContainer}>
        <Link href="/">
          <Image src={Logo} alt="minare logo" width={120} height={40} />
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
