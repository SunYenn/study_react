import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

function HookUseEffect() {

  const sayHello = () => {
    console.log('hello')
  }

  const [number, setNumber] = useState(0) // 숫자 값을 변환 시키는 객체
  const [anumber, setAnumber] = useState(0)

  // useEffect(() => { sayHello() })
  useEffect(sayHello, [number]) // number값이 변할 때마다 sayHello 호출

  return (
    <div>
      <h2>hello</h2>
      <Button variant='primary' onClick={() => setNumber(number + 1)}>{number}</Button>
      <Button variant='primary' onClick={() => setAnumber(anumber + 1)}>{anumber}</Button>
    </div>
  )
}


export default HookUseEffect;