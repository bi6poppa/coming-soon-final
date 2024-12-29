import Countdown from '@components/Countdown/Countdown'
import ResizeComingSoon from '@components/ResizeComingSoon/ResizeComingSoon'
import Notify from '@components/Notify/Notify'
import Clock from '@components/Clock/Clock'
import Socials from '@components/Socials/Socials'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import CSHeader from '@components/CSHeader/CSHeader'
import CSFooter from '@components/CSFooter/CSFooter'
import './App.css'

function App() {
  const currentTime = new Date()

  return (
    <>
      <ResizeComingSoon />
      <CSHeader />
      <Container className="container-fluid vw-100" fluid>
        <Row className="max-vw-100" id="main">
          <Col id="banner-column">
            <h1 className="title-banner py-3">Our new website is<br />on its way.</h1>
            <div className="box-count box-count-square wow fadeInUp" id="countdown">
              <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 44)} />
            </div>
            <p className="text-xl" id="launch">Get notified when we launch.</p>
            <Notify />
            <Socials />
          </Col>
          <Col className="col-lg-5">
            <Clock />
          </Col>
        </Row>
        <CSFooter />
      </Container>
    </>
  )
}

export default App;