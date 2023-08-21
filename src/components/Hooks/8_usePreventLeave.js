import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function HookUsePreventLeave() {

  const usePreventLeave = () => {
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
      <h2>Hello</h2>
      <Button onClick={enablePrevent}>protect</Button>
      <Button onClick={disablePrevent}>unprotect</Button>
    </div>
  )
}

export default HookUsePreventLeave;
