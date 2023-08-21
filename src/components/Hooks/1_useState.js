import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const HookUseState = () => {
  const [item, setItem] = useState(0);
  const incrementItem = () => setItem(item + 1)
  const decrementItem = () => setItem(item - 1)

  return (
    <div>
        <p>{ item }</p>
        <Button variant="info" onClick={incrementItem}>Increment</Button>{' '}
        <Button variant="info" onClick={decrementItem}>Decrement</Button>
    </div>
  );
}

export default HookUseState;
