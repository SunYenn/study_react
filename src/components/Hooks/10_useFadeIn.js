import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HookUseFadeIn() {

  const useFadeIn = (duration, delay) => {
    const element = useRef();
    useEffect(() => {
      if(element.current) {
        const {current} = element
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
        current.style.opacity = '1'
      }
    }, [])
    return { ref: element, style: { opacity: 0 } }
  }

  const fadeInH2 = useFadeIn(1, 2)
  const fadeInP = useFadeIn(5, 5)

  return (
    <div>
        <h2 {...fadeInH2}>Hello</h2>
        <p {...fadeInP}>lalalala</p>
    </div>
  )
}

export default HookUseFadeIn;
