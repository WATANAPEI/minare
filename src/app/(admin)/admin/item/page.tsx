import styles from './ItemDetail.module.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Item detail'
}

const ItemDetail: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Here is item detail.</p>
      </div>
    </main>
  )
}

export default ItemDetail
