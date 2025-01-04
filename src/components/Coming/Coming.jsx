import Button from 'react-bootstrap/Button'
import styles from './Coming.module.css'

const Coming = () => {
  return (
    <Button className="btn btn-round py-3 px-4" id={styles.comingSoon}>Coming Soon</Button>
  )
}

export default Coming;