import React, { useState } from 'react';
import { Input } from 'antd';

function HookUseInput() {
  const maxLen = (value) => value.length < 10 && !value.includes("@"); // value값이 10자 미만, @포함되지 않도록

  // typescript : const useInput = (initialValue: string, validator: (value: string) => boolean) => {
  const useInput = (initialValue, validator) => {

    // typescript : const [value, setValue] = useState<string>(initialValue);
    const [value, setValue] = useState(initialValue);
    
    // typescript : const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const onChange = (event) => {
      const newValue = event.target.value;
      if (validator(newValue)) { // 유효성 검사에 통과해야만 setValue 실행
        setValue(newValue);
      }
      console.log(value)
    };

    return { value, onChange };
  };

  const name = useInput("이름 : ", maxLen);

  return (
    <div>
      {/*  {...name} : useInput에서 반환된 name 객체의 모든 속성(name, onchange)을 Form.Control의 개별 props로 확산 */}
      <Input placeholder="Name" {...name} />
      <p>{ name.value }</p>
    </div>
  );
}

export default HookUseInput;
