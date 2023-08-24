import React, { useState, useCallback, useRef } from 'react';
import { MdAdd } from 'react-icons/md';

const TodoInsert = ({ onInsert }) => {

  const [value, setValue] = useState('');
  const input = useRef()

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      if (value) onInsert(value);
      else input.current.focus()
      setValue(''); // value 값 초기화

      // submit 이벤트가 발생시키는 새로고침 방지
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
        ref={input}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;