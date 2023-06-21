import './globals.css'
import styles from './admin.module.css'
import { Metadata } from 'next'
import { SideMenu } from '@/app/(admin)/_components/menu/Sidemenu'
import { AdminHeader } from '@/app/(admin)/_components/header/AdminHeader'
import { Footer } from '@/component/footer/Footer'

export const metadata: Metadata = {
  title: 'Admin top page',
  description: 'Admin top page of minare'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={styles.body}>
        <div className={styles.adminHeader}>
          <AdminHeader />
        </div>
        <div className={styles.sidemenuContainer}>
          <SideMenu />
        </div>
        <div className={styles.mainContainer}>{children}</div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </body>
    </html>
  )
}
