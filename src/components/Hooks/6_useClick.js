import React, { useEffect, useRef } from 'react';
import { Input } from 'antd';

function HookUseClick() {

  // useRef : 특정 DOM을 참조할 때 사용

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
      <Input placeholder="Name" ref={potato} />
    </div>
  )
}

export default HookUseClick;
