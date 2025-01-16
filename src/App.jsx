import CSHeader from '@components/CSHeader/CSHeader'
import Countdown from '@components/Countdown/Countdown'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Clock from '@components/Clock/Clock'
import Notify from '@components/Notify/Notify'
import Socials from '@components/Socials/Socials'
import CSFooter from '@components/CSFooter/CSFooter'
import Nav from 'react-bootstrap/Nav'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const currentTime = new Date();

  return (
    <>  
        <Container className="p-0 m-0" fluid>
            <CSHeader />
            <Row className="py-4" id="row">
                <Col className="p-0 m-0 col-md-6">
                    <h1 id="website" className="pb-3">Our new website<br />is on its way.</h1>
                    <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 44)} />
                    <h3 className="mt-3 pt-3 pb-2 mb-0" id="request">Need to submit a design request?</h3>
                    <Row className="w-75">
                        <Nav.Link className="justify-content-center fs-3 align-items-center" id="formLink" href="requestform.html">• Click Here •</Nav.Link>
                    </Row>
                    <h2 className="pt-3 mb-3 pb-3" id="launch">Get notified when we launch.</h2>
                    <Notify />
                    <Socials />
                </Col>
                <Col className="p-0 m-0 col-md-6">
                    <Clock />
                </Col>
            </Row>
            <CSFooter />
        </Container>
    </>
  )
}

export default App;