import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HookUseBeforeLeave() {

  const [h2color, seth2Color] = useState('black')

  // typescript : const useBeforeLeave = (onBefore: Function) => {
  const useBeforeLeave = () => {

    // typescript : const handle = (event: Object) => {
    const handle = (event) => {
      const {clientY} = event
      if (clientY <= 0){
        onOut()
      } else {
        onIn()
      }
    }
    useEffect(() => {
      document.addEventListener("mouseleave", handle)
      return () => document.removeEventListener("mouseleave", handle)
    }, [])
  }

  const onOut = () => seth2Color('red')
  const onIn = () => seth2Color('blue')
  useBeforeLeave()

  return (
    <div>
        <h2 style={{ color : h2color }}>Hello</h2>
    </div>
  )
}

export default HookUseBeforeLeave;
