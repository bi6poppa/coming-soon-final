import Container from 'react-bootstrap/Container'
import logo from '/darkSiteLogo.png'
import Coming from '../Coming/Coming'
import styles from '@components/CSHeader/CSHeader.module.css'

const Header = () => {
  return (
    <>
      <Container className="pt-1 pe-2" id={styles.header} fluid>
        <Coming />
        <a href="#">
          <img
            src={logo}
            height="4.0625rem"
            margin="0"
            padding="0"
            float="right"
          />
        </a>
      </Container>
    </>
  )
}

export default Header;