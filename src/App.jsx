{/*
import Notify from '@components/Notify/Notify'
import Socials from '@components/Socials/Socials'*/}
import Clock from '@components/Clock/Clock'
import CSFooter from '@components/CSFooter/CSFooter'
import Col from 'react-bootstrap/Col'
import Countdown from '@components/Countdown/Countdown'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'
import CSHeader from '@components/CSHeader/CSHeader'
import Notify from '@components/Notify/Notify'
import Socials from '@components/Socials/Socials'
import './App.css'

function App() {
    const currentTime = new Date()

  return (
      <Stack direction="vertical" gap={3} className="d-flex m-0 pt-3 align-items-center justify-content-center container-fluid">
        <CSHeader className="container-xxl"/>
          <Row className="container-fluid d-flex justify-content-between" id="main">
            <Col className="d-flex flex-column p-0" id="banner-column">
              <h1 className="py-3">Our new website is<br />on its way.</h1>
              <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 44)} />
              <h2 className="text-xl text-start py-3" id="launch">Get notified when we launch.</h2>
              <Notify />
              <Socials />
            </Col>
            <Col className="ps-5 m-0">
              <Clock />
            </Col>
          </Row>
        <CSFooter className="container-xxl"/>
      </Stack>
  )
}

export default App;