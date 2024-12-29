import Row from 'react-bootstrap/Row'
import logo from '/bufflogo.png'
import styles from './CSFooter.module.css'

const CSFooter = () => {
    return (
        <>
            <Row>
                <div className="d-flex align-items-center justify-content-between pe-4 w-100">
                    <div>
                        <a href="#">
                            <img src={logo} alt="paydev logo" height="75" className="my-0 py-0"/>
                        </a>
                        <p className="lh-1 fs-6 pt-2 mb-3" id={styles.logo}>&copy;2024 Payne<br />Development LLC</p>
                    </div>
                    <p className="text-end pe-3 pb-3" id={styles.bizInfo}>Augusta, GA 30907<br />Hours: 9:00 - 6:00 / Mon - Sat<br/>706.834.0329<br />support@paynedevelops.net</p>
                </div>
            </Row>
        </>
    )
}

export default CSFooter;