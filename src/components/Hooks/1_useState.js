import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const HookUseState = () => {

  // item : 현재 상태 값 변수
  // setItem : 상태 값을 갱신해주는 Setter 함수
  // useState()의 인수 : item의 초기값. Number 타입.
  const [item, setItem] = useState(0); 

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
