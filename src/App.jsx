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
  const currentTime = new Date();

  return (
      <Stack direction="vertical" gap={1} className="d-flex justify-content-center container-fluid mt-3" id="stack">
          <CSHeader className="container-xxl"/>
          <Row className="container-fluid d-flex align-items-center" id="main">
              <Col className="d-flex flex-column justify-content-center m-0 p-0" id="banner-column">
                  <h1 className="pb-3 m-0" id="website">Our new website is<br />on its way.</h1>
                  <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 44)} />
                  <h2 className="text-xl text-start pb-3" id="launch">Get notified when we launch.</h2>
                  <Notify />
                  <Socials />
              </Col>
              <Col className="d-flex align-items-center">
                  <Clock />
              </Col>
          </Row>
          <CSFooter className="container-xxl"/>
      </Stack>
  );
}

export default App;