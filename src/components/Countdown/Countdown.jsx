import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import styles from '@components/Countdown/Countdown.module.css'

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
    <>
      <Stack className={`${styles.dealsCountdown} d-flex justify-content-center`} direction="horizontal" gap={2}>
        <div className={styles.countdownSection}>
          <span className={`${styles.countdownAmount} fs-1 lh-16 mx-4 ${styles.timePart}`}>{timeParts.days}</span>
          <span className={`${styles.countdownPeriod} lh-14 font-xs`} id={styles.days}> days </span>
        </div>
        <div className={styles.countdownSection}>
          <span className={`${styles.countdownAmount} fs-1 lh-16 ${styles.timePart}`}>{timeParts.hours}</span>
          <span className={`${styles.countdownPeriod} lh-14 font-xs`} id={styles.hours}> hours </span>
        </div>
        <div className={styles.countdownSection}>
          <span className={`${styles.countdownAmount} fs-1 lh-16 ${styles.timePart}`}>{timeParts.minutes}</span>
          <span className={`${styles.countdownPeriod} lh-14 font-xs`} id={styles.minutes}> minutes </span>
        </div>
        <div className={styles.countdownSection}>
          <span className={`${styles.countdownAmount} fs-1 lh-16 ${styles.timePart}`}>{timeParts.seconds}</span>
          <span className={`${styles.countdownPeriod} lh-14 font-xs`} id={styles.seconds}> seconds </span>
        </div>
      </Stack>
    </>
  )
}

export default Countdown;