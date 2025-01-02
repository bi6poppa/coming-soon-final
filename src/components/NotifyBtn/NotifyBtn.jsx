import { useState, useEffect } from 'react'
import styles from './NotifyBtn.module.css'

const NotifyBtn = ({ email }) => {

  const [isHovered, setIsHovered] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    setIsDark(currentTheme === 'dark');

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = html.getAttribute('data-theme');
          setIsDark(newTheme === 'dark');
        }
      });
    });

    observer.observe(html, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    window.location.href = `mailto:support@paynedevelops.net?subject=New%20Notification&body=Please%20add%20${email}%20to%20your%20HubSpot.`;

    window.open('https://8d7hwierqtx.typeform.com/to/JUp2hBgF', '_blank');
  };

  const buttonStyle = isDark
    ? {
      backgroundColor: isHovered ? 'var(--sp-green)' : 'var(--sp-dark)',
      color: isHovered ? 'var(--sp-dark)' : 'var(--sp-green)',
      boxShadow: isHovered ? '0px 0px 20px rgba(145, 149, 151, 0.9)' : 'var(--sp-green-shadow)',
      transition: 'boxShadow 1s ease-in-out, color 1s ease-in-out, backgroundColor 1s ease-in-out',
    }
  : {
    backgroundColor: isHovered ? 'var(--sp-dark)' : 'var(--sp-green)',
    color: isHovered ? 'var(--fface-red)' : 'var(--sp-dark)',
    boxShadow: isHovered ? 'var(--fface-shadow)' : 'rgba(0, 0, 0, 0.75) 0px 2px 20px 4px',
    opacity: 0.9,
    transition: 'backgroundColor 0.3s ease-in-out',
  };

  const iconStyle = isDark
    ? {
      color: isHovered ? 'var(--sp-dark)' : 'var(--sp-green)',
      transition: 'color 1s ease-in-out',
      }
    : {
      color: isHovered ? 'var(--fface-red)' : 'var(--sp-dark)',
    }

  {/*const buttonStyle = {
    backgroundColor: isHovered ? '#1cff28' : '#1c1c1e',
    color: isHovered ? '#1c1c1e' : '#1cff28',
    boxShadow: isHovered ? '2px 2px 15px 3px #000000' : '0px 0px 10px 0px #1cff28',
  };

  const iconStyle = {
    color: isHovered ? '#1c1c1e' : '#1cff28',
    paddingLeft: '10px',
  };*/}

  return (    
    <button
      className="btn mx-4"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
      style={buttonStyle}
      id={styles.notify}
    >
      Notify Me
        <i className="bi bi-arrow-right ps-2" style={iconStyle} id={styles.icon}/>
    </button>
  )
}

export default NotifyBtn;