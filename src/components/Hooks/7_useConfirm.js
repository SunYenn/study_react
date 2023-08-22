import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

function HookUseConfirm() {

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('')

  // typescript : const useConfirm = (message = '', onConfirm: Function, onCancel: Function) => {
  const useConfirm = (message = '', onConfirm, onCancel) => {
    if (onConfirm && typeof onConfirm !== "function") {
      return
    }
    if (onCancel && typeof onCancel !== "function") {
      return
    }
    const confirmAction = () => {
      if (window.confirm(message)) {
        onConfirm()
        setShow(true)
      } else {
        onCancel()
        setShow(true)
      }
    }
    return confirmAction
  }

  const deleteWorld = () => setMessage("Deleting the world...")
  const abort = () => setMessage("Aborted")
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort)

  return (
    <div>

      <Toast onClose={() => setShow(false)} show={show} delay={1500} autohide>
        <Toast.Body>
          { message }
        </Toast.Body>
      </Toast>

      <h2>Hello</h2>
      <Button onClick={confirmDelete}>Delete the world</Button>

    </div>
  )
}

export default HookUseConfirm;
