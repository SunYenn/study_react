import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

function HookUseEffect() {

  const sayHello = () => {
    console.log('hello')
  }

  const [number, setNumber] = useState(0)
  const [anumber, setAnumber] = useState(0)

  // useEffect(() => { sayHello() })
  useEffect(sayHello, [number])

  return (
    <div>
      <h2>hello</h2>
      <Button variant='primary' onClick={() => setNumber(number + 1)}>{number}</Button>
      <Button variant='primary' onClick={() => setAnumber(anumber + 1)}>{anumber}</Button>
    </div>
  )
}


export default HookUseEffect;