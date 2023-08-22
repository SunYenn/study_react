import React, { useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';

function HookUseClick() {

  // typescript : const potato = useRef<HTMLInputElement | null>(null);
  const potato = useRef();

  setTimeout(() => {
    if (potato.current) {
      potato.current.focus();
    }
  }, 2000);

  const useClick = (onClick) => {
    // typescript : const element = useRef<HTMLInputElement | null>(null);
    const element = useRef();
    useEffect(() => {
      if (element.current) {
        element.current.addEventListener("click", onClick)
      }
      return () => { // 메모리 낭비 방지 위한, event 삭제
        if (element.current) {
          element.current.removeEventListener("click", onClick)
        }
      }
    }, [])
    return element;
  }

  const sayHello = () => console.log("say hello")
  const title = useClick(sayHello) // useClick의 반환된 element는 useRef()

  return (
    <div>
      <h2 ref={title}>Hello</h2>
      <Form.Control placeholder="Name" ref={potato} />
    </div>
  )
}

export default HookUseClick;