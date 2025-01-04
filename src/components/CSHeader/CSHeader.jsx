import Container from 'react-bootstrap/Container'
import logo from '/lightSiteLogo.png'
import Coming from '../Coming/Coming'
import styles from '@components/CSHeader/CSHeader.module.css'

const Header = () => {
  return (
    <>
      <Container id={styles.header} fluid>
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