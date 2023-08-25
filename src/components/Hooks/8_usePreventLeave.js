import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HookUsePreventLeave() {

  const usePreventLeave = () => {

    // typescript : const listener = (event: Object) => {
    const listener = (event) => {
      event.preventDefault()
      event.returnValue = ''
    }
    const enablePrevent = () => window.addEventListener("beforeunload", listener)
    const disablePrevent = () => window.removeEventListener("beforeunload", listener)
    return { enablePrevent, disablePrevent }

  }

  const { enablePrevent, disablePrevent } = usePreventLeave()

  return (
    <div>
      <h2>Hi</h2>
      <button className='btn' onClick={enablePrevent}>protect</button>
      <button className='btn' onClick={disablePrevent}>unprotect</button>
    </div>
  )
}

export default HookUsePreventLeave;
