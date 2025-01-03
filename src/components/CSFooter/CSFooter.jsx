import Row from 'react-bootstrap/Row'
import logo from '/bufflogo.png'
import styles from './CSFooter.module.css'

const CSFooter = () => {
    return (
        <>
            <Row>
                <div className="d-flex align-items-end justify-content-between w-100" id={styles.footer}>
                    <div>
                        <a href="#">
                            <img src={logo} alt="paydev logo" height="75" className="my-0 py-0"/>
                        </a>
                        <p className="lh-1 fs-6 pt-2">&copy;2024 Payne<br />Development LLC</p>
                    </div>
                    <p className="text-end">706.834.0329<br />Augusta, GA 30907<br />Hours: 9:00 - 6:00 / Mon - Sat<br />support@paynedevelops.net</p>
                </div>
            </Row>
        </>
    )
}

export default CSFooter;