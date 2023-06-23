import '@/app/globals.css'
import styles from './RootLayout.module.css'
import { Metadata } from 'next'
import { SideMenu } from '@/component/admin/menu/Sidemenu'
import { AdminHeader } from '@/component/admin/header/AdminHeader'
import { Footer } from '@/component/footer/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | Minare admin',
    default: 'Minare admin'
  }
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
