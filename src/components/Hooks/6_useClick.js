import React, { useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';

function HookUseClick() {

  const potato = useRef();

  setTimeout(() => {
    if (potato.current) {
      potato.current.focus();
    }
  }, 3000);

  const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
      if (element.current) {
        element.current.addEventListener("click", onClick)
      }
      return () => {
        if (element.current) {
          element.current.removeEventListener("click", onClick)
        }
      }
    }, [])
    return element;
  }

  const sayHello = () => console.log("say hello")
  const title = useClick(sayHello)

  return (
    <div>
      <h2 ref={title}>Hello</h2>
      <Form.Control placeholder="Name" ref={potato} />
    </div>
  )
}

export default HookUseClick;
