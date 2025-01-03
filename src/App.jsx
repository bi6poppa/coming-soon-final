{/*
import Notify from '@components/Notify/Notify'
import Socials from '@components/Socials/Socials'*/}
import Clock from '@components/Clock/Clock'
import CSFooter from '@components/CSFooter/CSFooter'
import Col from 'react-bootstrap/Col'
import Countdown from '@components/Countdown/Countdown'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import CSHeader from '@components/CSHeader/CSHeader'
import Notify from '@components/Notify/Notify'
import Socials from '@components/Socials/Socials'
import './App.css'

function App() {
    const currentTime = new Date()

  return (
    <div>
      <CSHeader />
      <Row id="main">
        <Col id="banner-column">
          <h1 className="py-3">Our new website is<br />on its way.</h1>
          <div className="box-count box-count-square wow fadeInUp" id="countdown">
            <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 44)} />
          </div>
          <h2 className="text-xl text-start py-3" id="launch">Get notified when we launch.</h2>
          <Notify />
          <Socials />
        </Col>
        <Col className="col-lg-5">
          <Clock />
        </Col>
        <CSFooter />
      </Row>
    </div>
  )
}

export default App;