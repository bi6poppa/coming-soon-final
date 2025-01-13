import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '/darkFinal.png'
import styles from './CSFooter.module.css'

const CSFooter = () => {
    return (
        <Container id={styles.footer} fluid>
            <Row className="d-flex align-items-end mb-0 pb-0" id={styles.footLogo}>
              <Col className="d-flex flex-column justify-content-end m-0 p-0">
                <a href="#">
                  <img src={logo} alt="paydev logo" height="60" className="d-flex" id={styles.footLogo}/>
                </a>
                <p className="mb-0 fs-6" id={styles.bizName}>&copy;csra swag LLC</p>
              </Col>
              <Col className="text-end p-0 d-flex align-items-center text-nowrap justify-content-end" id={styles.bizInfo}>
                706.834.0329<br />Augusta, GA 30907<br />hello@brandthecsra.com<br />Hours: 9:00 - 6:00 / Mon - Sat
              </Col>
            </Row>
        </Container>
    );
}

export default CSFooter;