import { Metadata } from 'next'
import styles from './UserList.module.css'

export const metadata: Metadata = {
  title: 'User list'
}

const UserList: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Here is user list.</p>
      </div>
    </main>
  )
}

export default UserList
