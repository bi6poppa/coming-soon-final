import styles from './Socials.module.css'
import Stack from 'react-bootstrap/Stack'

const Socials = () => {
  return (    
    <Stack direction="horizontal" gap={5} className="box-socials-coming-soon d-flex container-xxl mt-2 ms-5" id={styles.socials}>
      <a className="icon-facebook ps-3" rel="noopener" target="_blank" href="https://www.facebook.com/csraswag"><i className={`${styles.bi} bi-facebook top-socials`} /></a>
      <a className="icon-instagram" rel="noopener" target="_blank" href="https://www.instagram.com/csraswag"><i className={`${styles.bi} bi-instagram top-socials`} /></a>
      <a className="icon-github" rel="noopener" target="_blank" href="https://github.com/bi6poppa"><i className={`${styles.bi} bi-github top-socials`} /></a>
      <a className="icon-behance " rel="noopener" target="_blank" href="https://www.behance.net/galleries"><i className={`${styles.bi} bi-behance top-socials`} /></a>
  </Stack>
  )
}

export default Socials;