import { SummaryCard } from '@/component/ui/SummaryCard'
import styles from './adminTop.module.css'
import SalesIcon from '/public/sales.svg'
import NewItemIcon from '/public/new.svg'
import CarrierIcon from '/public/carrier.svg'

export default function AdminTop() {
  return (
    <main className={styles.main}>
      <h2>
        <p className={styles.kpiSectionTitle}>KPI</p>
      </h2>
      <div className={styles.kpiSectionList}>
        <SummaryCard img={SalesIcon} description="sales/week" kpi="$200" />
        <SummaryCard img={NewItemIcon} description="new item" kpi="400" />
        <SummaryCard img={CarrierIcon} description="ship" kpi="134" />
      </div>
    </main>
  )
}
