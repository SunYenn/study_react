import React, { useRef, useCallback, useState } from 'react';
import produce from 'immer';
import '../styles/Immer.css'

function Immer() {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

  // input 수정을 위한 함수
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setForm(
      produce(draft => {
        draft[name] = value;
      })
    );
  }, []);

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };

      // array 에 새 항목 등록
      setData(
        produce(draft => {
          draft.array.push(info);
        })
      );

      // form 초기화
      setForm({
        name: '',
        username: ''
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  // 항목을 삭제하는 함수
  const onRemove = useCallback(
    id => {
      setData(
        produce(draft => {
          draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
        })
      );
    },
    []
  );

  return (
    <div>
      <form onSubmit={onSubmit} style={{ display: 'flex'}}> 
        <input
          className='inputTxt'
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          className='inputTxt'
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button className='btn' type="submit">등록</button>
      </form>
      <div>
        <ul className='immerList'>
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              <p>아이디 : {info.username}</p>
              <p>이름 : {info.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default Immer;