// filepath: /src/components/ThemeSwitch/ThemeSwitch.jsx
import React, { useState, useEffect } from 'react';
import styles from './ThemeSwitch.module.css';

const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(true); // Default to dark mode

  useEffect(() => {
    // Check the initial theme from localStorage or prefers-color-scheme
    const storedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (prefersDarkScheme ? 'dark' : 'light');
    setIsDark(initialTheme === 'dark');
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const handleChange = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div id="blind">
      <div className={styles.myThemeSwitch} id="myThemeSwitch">
        <div className={styles.switchInput}>
          <div className={styles.switchKnob} id="switchKnob">
            <div className={styles.circle} id="circle" onClick={handleChange}/>
            <i
              className={`bi bi-sun ${styles.sun}`}
              onClick={handleChange}
              style={{ display: isDark ? 'block' : 'none' }}
            />
            <i
              className={`bi bi-moon-stars ${styles.moon}`}
              id="top-moon"
              onClick={handleChange}
              style={{ display: isDark ? 'none' : 'block' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitch;