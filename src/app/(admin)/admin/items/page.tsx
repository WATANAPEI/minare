import { Metadata } from 'next'
import styles from './ItemList.module.css'

export const metadata: Metadata = {
  title: 'Item list'
}

const ItemList: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Here is item detail.</p>
      </div>
    </main>
  )
}

export default ItemList
