import React, { useState, useEffect } from 'react';

function HookUseEffect() {

  const sayHello = () => {
    console.log('hello')
  }

  const [number, setNumber] = useState(0) // 숫자 값을 변환 시키는 객체
  const [anumber, setAnumber] = useState(0)

  // useEffect : 특정 작업을 실행할 수 있도록 하는 Hook
  // useEffect(() => { sayHello() })
  useEffect(sayHello, [number]) // number값이 변할 때마다 sayHello 호출

  return (
    <div>
      <h2>hello</h2>
      <button className='btn' variant='primary' onClick={() => setNumber(number + 1)}>{number}</button>
      <button className='btn' onClick={() => setAnumber(anumber + 1)}>{anumber}</button>
    </div>
  )
}


export default HookUseEffect;