import { useState,useEffect } from 'react'

const ResizeComingSoon = () => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Remove overflow: hidden from the body
      document.body.style.overflow.hidden === true ? setIsHidden(false) : '';

      // Update text content for #hours, #days, #minutes, and #seconds
      const minutes = document.getElementById('minutes')
      const seconds = document.getElementById('seconds')

      if (minutes) minutes.textContent = 'Min'
      if (seconds) seconds.textContent = 'Sec'
    }

    window.addEventListener('resize', handleResize)

    // Initial call to handle resize on mount
    handleResize()

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return null
}

export default ResizeComingSoon;