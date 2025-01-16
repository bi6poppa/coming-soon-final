import CSHeader from '@components/CSHeader/CSHeader'
import Countdown from '@components/Countdown/Countdown'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Clock from '@components/Clock/Clock'
import Notify from '@components/Notify/Notify'
import Socials from '@components/Socials/Socials'
import CSFooter from '@components/CSFooter/CSFooter'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const currentTime = new Date();

  return (
    <>  
        <Container className="p-0 m-0" fluid>
            <CSHeader />
            <Row className="blankRows"><br className="blankRows" /></Row>
            <Row className="p-0" id="row">
                <Col className="p-0 m-0 col-md-6">
                    <h1 id="website">Our new website<br />is on its way.</h1>
                    <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 44)} />
                    <h2 className="py-5" id="launch">Get notified when we launch.</h2>
                    <Notify />
                    <Socials />
                </Col>
                <Col className="p-0 m-0 col-md-6">
                    <Clock />
                </Col>
            </Row>
            <Row className="blankRows"><br className="blankRows" /></Row>
            <CSFooter />
        </Container>
    </>
  )
}

export default App;