import Container from 'react-bootstrap/Container'
import logo from '/lightFinal.png'
import Coming from '../Coming/Coming'
import styles from './CSHeader.module.css'

const Header = () => {
  return (
    <>
      <Container className="pe-2" id={styles.header} fluid>
        <Coming />
        <a href="#">
          <img
            src={logo}
            id={styles.logo}
            alt="paydev logo"
          />
        </a>
      </Container>
    </>
  )
}

export default Header;