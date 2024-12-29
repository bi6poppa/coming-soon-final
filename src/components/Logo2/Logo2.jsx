import { useState, useEffect } from 'react';
import styles from '@components/Logo2/Logo2.module.css';
import lightLogo from '/lightSiteLogo.png'; // Adjust path if necessary
import darkLogo from '/darkSiteLogo.png'; // Adjust path if necessary

const Logo2 = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateIsDark = () => {
      const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(darkMode);
    };

    updateIsDark();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateIsDark);

    return () => {
      mediaQuery.removeEventListener('change', updateIsDark);
    };
  }, []);

  return (
    <img
      src={isDark ? lightLogo : darkLogo}
      alt="paydev logo"
      className="py-2"
      id={styles.logo}
    />
  )
}

export default Logo2;