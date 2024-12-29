import Container from 'react-bootstrap/Container'
import Logo2 from '../Logo2/Logo2'
import Coming from '../Coming/Coming'
import styles from '@components/CSHeader/CSHeader.module.css'

const Header = () => {
  return (
    <>
      <Container id={styles.header} fluid>
        <Coming />
        <a href="#">
          <Logo2 />
        </a>
      </Container>
    </>
  )
}

export default Header;