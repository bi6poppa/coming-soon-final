import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import styles from './Notify.module.css'

function Notify() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = () => {
    window.location.href = `mailto:support@paynedevelops.net?subject=New%20Notification&body=Please%20add%20${email}%20to%20your%20HubSpot.`;

    window.open('https://8d7hwierqtx.typeform.com/to/JUp2hBgF', '_blank');
  };

  return (
    <Form id={styles.form} className="container-fluid">
      <Form.Group className="d-flex gap-2 row" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="enter email address" value={email} id={styles.email} className="col-md form-control" onChange={handleChange} />
        <Button email={email} type="submit" className="d-flex col-md-3 justify-content-center align-items-center" onClick={handleClick} id={styles.button}>Notify Me <i className="bi bi-arrow-right ps-2" id={styles.arrow} /></Button>
      </Form.Group>
      <Form.Text className="lh-5" id={styles.noShare}>we will never share this with anyone else.</Form.Text>
    </Form>
  )
}

export default Notify;