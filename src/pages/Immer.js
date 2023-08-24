import React, { useRef, useCallback, useState } from 'react';
import produce from 'immer';
import '../styles/Immer.css'

// 리액트에서 배열이나 객체를 업데이트 해야 할 때에는 직접 수정하면 안되고 불변성을 지켜주며 업데이트 해주어야 함.
// const object = {
//   a: 1,
//   b: 2
// };

// 틀린 예
// object.b = 3;

// 맞는 예
// const nextObject = {
//   ...object,
//   b: 3
// };

// 마찬가지로 push, splice등의 함수를 사용하거나, n번째 항목을 직접 수정하면 안되고
// concat, filter, map 등의 함수를 사용해야 함.

// 그래서 immer 사용
function Immer() {

  // useState vs useRef
  
  // useStste : 변경 시 다시 렌더링을 트리거하는 상태 저장 값을 저장하는 데 사용
  // 상태 변수 변경시 구성 요소 다시 렌더링 됨.

  // useRef : 변경시 다시 렌더링을 트리거하지 않는 변경 가능한 값 저장하는 데 사용됨
  // 값을 변경해도 구성요소가 다시 렌더링 되지 않음
  // 일반적으로 UI에 영향을 안 주거나, 재렌더링을 할 필요가 없는 값에 사용.
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({ array: [], uselessValue: null });

  // input 수정을 위한 함수
  const onChange = useCallback(e => {

    // name : input의 name 속성
    // value : input의 value 속성 (form 항목 참조중)
    const { name, value } = e.target;
    setForm(

      // 한 항목만 변경할 수 있게 하는 immer의 기능
      produce(draft => {
        draft[name] = value;
      })
    );

  }, []);

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    e => {
      e.preventDefault(); // submit 실행되면서 발생하는 이벤트(새로고침) 방지
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