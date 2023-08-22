import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const HookUseState = () => {
  const [item, setItem] = useState(0); // 숫자 값을 업데이트 시키는 객체
  const incrementItem = () => setItem(item + 1) // item을 1씩 증가 시킬 수 있도록 하는 함수
  const decrementItem = () => setItem(item - 1) // item을 1씩 감소 시킬 수 있도록 하는 함수

  return (
    <div>
        <p>{ item }</p>
        <Button variant="info" onClick={incrementItem}>Increment</Button>
        <Button variant="info" onClick={decrementItem}>Decrement</Button>
    </div>
  );
}

export default HookUseState;
