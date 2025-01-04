import { useState } from 'react';
import NotifyBtn from '@components/NotifyBtn/NotifyBtn'
import styles from './Notify.module.css'

const Notify = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (    
    <div className="form-notify container-fluid d-flex justify-content-between align-items-center" id={styles.form}>
      <form action="#">
        <input
          className="form-control"
          type="text"
          placeholder="< you@emailprovider.com >"
          id={styles.email}
          value={email}
          onChange={handleChange}
        />
        <NotifyBtn email={email} />
      </form>
    </div>
  )
}

export default Notify;