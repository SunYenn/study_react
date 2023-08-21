import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HookUseBeforeLeave() {

  const useBeforeLeave = (onBefore) => {

    // 밑 코드에서 문제 발생
    // if (typeof onBefore !== "function") {
    //   return
    // }
    
    const handle = (event) => {
      const {clientY} = event
      if (clientY <= 0){
        onBefore()
      }
    }
    useEffect(() => {
      document.addEventListener("mouseleave", handle)
      return () => document.removeEventListener("mouseleave", handle)
    }, [])
  }

  const onBefore = () => console.log("pls dont leave")
  useBeforeLeave(onBefore)

  return (
    <div>
        <h2>Hello</h2>
    </div>
  )
}

export default HookUseBeforeLeave;
