import React, { useState, ChangeEvent } from 'react';
import Form from 'react-bootstrap/Form';

function HookUseInput() {
  const maxLen = (value) => value.length < 10 && !value.includes("@");
  const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    
    const onChange = (event) => {
      const newValue = event.target.value;
      if (validator(newValue)) {
        setValue(newValue);
      }
      console.log(value)
    };

    return { value, onChange };
  };

  const name = useInput("이름 : ", maxLen);

  return (
    <div>
      <Form.Control placeholder="Name" {...name} />
    </div>
  );
}

export default HookUseInput;
