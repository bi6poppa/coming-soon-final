import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'

import styles from './Countdown.module.css'

const msInSecond = 1000
const msInMinute = 60 * 1000
const msInAHour = 60 * msInMinute
const msInADay = 24 * msInAHour

const getPartsofTimeDuration = (duration) => {
  const days = Math.floor(duration / msInADay)
  const hours = Math.floor((duration % msInADay) / msInAHour)
  const minutes = Math.floor((duration % msInAHour) / msInMinute)
  const seconds = Math.floor((duration % msInMinute) / msInSecond)

  return { days, hours, minutes, seconds }
}

const Countdown = (endDateTime) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const timeout = setTimeout(() => {
      const date = new Date()
      setTime(date.toLocaleTimeString())
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [time])

  const now = Date.now() //number of milliseconds from beginning of time

  const future = new Date(endDateTime.endDateTime)

  const timeDif = future.getTime() - now
  const timeParts = getPartsofTimeDuration(timeDif)

  return (
    <Container className="d-flex justify-content-center align-items-center pt-2" id="styles.countdown" fluid>
      <Row id={styles.counters}>
        <Col className={`d-flex flex-column align-items-center ${styles.countCol} p-0 m-0`} id={styles.days}>
          <Row className={`${styles.countdownAmount} fs-1 lh-1 ${styles.timePart}`}>{timeParts.days}</Row>
          <Row className={`${styles.countdownPeriod} ${styles.day}`}>days</Row>  
        </Col>
        <Col className={`d-flex flex-column align-items-center ${styles.countCol} p-0 m-0`} id={styles.hours}>
          <Row className={`${styles.countdownAmount} fs-1 lh-1 ${styles.timePart}`}>{timeParts.hours}</Row>
          <Row className={`${styles.countdownPeriod} font-xs ${styles.hour}`}>hours</Row>
        </Col>
        <Col className={`d-flex flex-column align-items-center ${styles.countCol} p-0 m-0`} id={styles.min}>
          <Row className={`${styles.countdownAmount} fs-1 lh-1 ${styles.timePart}`}>{timeParts.minutes}</Row>
          <Row className={`${styles.countdownPeriod} font-xs ${styles.mins}`} id={styles.bigMin}>minutes</Row>
        </Col>
        <Col className={`d-flex flex-column align-items-center ${styles.countCol} p-0 m-0`} id={styles.sec}>
          <Row className={`${styles.countdownAmount} fs-1 lh-1 ${styles.timePart}`}>{timeParts.seconds}</Row>
          <Row className={`${styles.countdownPeriod} font-xs ${styles.secs}`} id={styles.bigSec}>seconds</Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Countdown;