import Image, { StaticImageData } from 'next/image'
import style from './summaryCard.module.css'

type SummaryCardType = {
  img: StaticImageData
  description: string
  kpi: string
}
export const SummaryCard: React.FC<SummaryCardType> = ({
  img,
  description,
  kpi
}) => {
  return (
    <section className={style.cardFrame}>
      <div className={style.iconCell}>
        <Image src={img} alt={description} width={128} height={128} />
      </div>
      <div className={style.descriptionCell}>
        <h3>{description}</h3>
      </div>
      <div className={style.kpiCell}>
        <div className={style.kpiText}>{kpi}</div>
      </div>
    </section>
  )
}
