import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function HookUseConfirm() {

  const useConfirm = (message = '', onConfirm, onCancel) => {
    if(onConfirm && typeof onConfirm !== "function") {
      return
    }
    if(onCancel && typeof onCancel !== "function") {
      return
    }
    const confirmAction = () => {
      if(window.confirm(message)) {
        onConfirm()
      } else {
        onCancel()
      }
    }
    return confirmAction
  }

  const deleteWorld = () => console.log("Deleting the world...")
  const abort = () => console.log("Aborted")
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort)

  return (
    <div>
      <h2>Hello</h2>
      <Button onClick={confirmDelete}>Delete the world</Button>
    </div>
  )
}

export default HookUseConfirm;
