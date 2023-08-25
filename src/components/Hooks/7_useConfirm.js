import React from 'react';
import { message } from 'antd';

function HookUseConfirm() {

  // typescript : const useConfirm = (message = '', onConfirm: Function, onCancel: Function) => {
  const useConfirm = (content = '', onConfirm, onCancel) => {
    if (onConfirm && typeof onConfirm !== "function") {
      return
    }
    if (onCancel && typeof onCancel !== "function") {
      return
    }
    const confirmAction = () => {
      if (window.confirm(content)) {
        onConfirm()
      } else {
        onCancel()
      }
    }
    return confirmAction
  }

  const deleteWorld = () => message.warning("Deleting the world...", 1.5)
  const abort = () => message.warning("Aborted", 1.5)
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort)

  return (
    <div>

      <h2>Hello</h2>
      <button className='btn' onClick={confirmDelete}>Delete the world</button>

    </div>
  )
}

export default HookUseConfirm;
