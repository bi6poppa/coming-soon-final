import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '/bufflogo.png'
import styles from './CSFooter.module.css'

const CSFooter = () => {
    return (
        <>
            <Container id={styles.footer} fluid>
                <Row className="d-flex" id={styles.footLogo}>
                    <a href="#">
                        <img src={logo} alt="paydev logo" height="75" className="d-flex"/>
                    </a>
                    <p className="d-flex text-start lh-1 fs-6">&copy;2024 Payne<br />Development LLC</p>
                </Row>
                <Col className="text-end" id={styles.bizInfo}>706.834.0329<br />Augusta, GA 30907<br />Hours: 9:00 - 6:00 / Mon - Sat<br />support@paynedevelops.net</Col>
            </Container>            
        </>
    )
}

export default CSFooter;