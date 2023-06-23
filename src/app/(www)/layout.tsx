import '@/app/globals.css'
import styles from './RootLayout.module.css'
import { SideMenu } from '@/component/www/menu/Sidemenu'
import { BasicHeader } from '@/component/www/header/BasicHeader'
import { Footer } from '@/component/footer/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Minare',
    default: 'Minare'
  },
  description: 'Minare is ec site demo application.'
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
          <BasicHeader />
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
