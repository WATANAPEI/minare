import Link from 'next/link'
import styles from './footer.module.css'

export const Footer: React.FC = () => {
  return (
    <nav>
      <p>common footer</p>
      <Link href="/">Back to top page</Link>
    </nav>
  )
}
