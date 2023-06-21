import styles from './configButton.module.css'

export const ConfigButton: React.FC = () => {
  return (
    <button className={styles.configButton}>
      <h3>Config</h3>
    </button>
  )
}
