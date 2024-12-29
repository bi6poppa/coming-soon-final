import styles from './Socials.module.css'

const Socials = () => {
  return (    
    <div className="box-socials-coming-soon d-flex justify-content-start mt-3" id={styles.social}>
      <a className="icon-facebook pe-5 me-3" rel="noopener" target="_blank" href="https://www.facebook.com/csraswag"><i className={`${styles.bi} bi-facebook top-socials`} /></a>
      <a className="icon-instagram pe-5 me-3" rel="noopener" target="_blank" href="https://www.instagram.com/csraswag"><i className={`${styles.bi} bi-instagram top-socials`} /></a>
      <a className="icon-github pe-5 me-3" rel="noopener" target="_blank" href="https://github.com/bi6poppa"><i className={`${styles.bi} bi-github top-socials`} /></a>
      <a className="icon-behance pe-5" rel="noopener" target="_blank" href="https://www.behance.net/galleries"><i className={`${styles.bi} bi-behance top-socials`} /></a>
  </div>
  )
}

export default Socials;