import  { useEffect } from 'react'
import styles from './Clock.module.css'
import Col from 'react-bootstrap/Col'

const Clock = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      function r(el, deg) {
        el.setAttribute('transform', 'rotate(' + deg + ' 253 253)');
      }
      const d = new Date();
      r(document.getElementById('sec'), 6 * d.getSeconds());
      r(document.getElementById('min'), 6 * d.getMinutes());
      r(document.getElementById('hour'), 30 * (d.getHours() % 12) + d.getMinutes() / 2);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Col className="d-flex m-0 h-100">
      <svg
        className="m-5 p-3"
        viewBox="0 0 525 525"
        enableBackground="new 0 0 525 525"
      >
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="3" dy="3" stdDeviation="3" floodColor="#1cff28" floodOpacity="0.9" />
          </filter>
          <filter id="hover-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="3" dy="3" stdDeviation="3" floodColor="#cc0000" floodOpacity="0.9" />
          </filter>
        </defs>
        <g id={styles.clock}>
          <circle fill="none" stroke="#919597" strokeWidth="9" strokeMiterlimit="10" cx="253" cy="253" r="247.5" id="circle" />
          <circle fill="#919597" cx="253" cy="253" r="17.36" id="middle" />
          <line id="min" className="line" fill="none" stroke="#919597" strokeWidth="9" strokeMiterlimit="10" x1="253" y1="67.375" x2="253" y2="253" />
          <line id="hour" className="line" fill="none" stroke="#919597" strokeWidth="7" strokeMiterlimit="10" x1="253" y1="129.247" x2="253" y2="253" />
          <line id="sec" className="line" fill="none" stroke="#1c1c1e" strokeWidth="5" strokeMiterlimit="10" x1="253" y1="48.815" x2="253" y2="253" />
        </g>
      </svg>
    </Col>
  );
};

export default Clock;