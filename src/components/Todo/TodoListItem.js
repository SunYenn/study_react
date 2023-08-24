import React from 'react';
import cn from 'classnames';
// 리액트의 모든 아이콘
// https://react-icons.github.io/react-icons
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';

// 인수값은 Todo.js에서 받아옴
const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div
          // cn 함수를 통해 checked 변수 값에 따라 클래스 추가
          // 원형 : className={`checkbox${checked ? ' checked' : ''}`}
          className={cn('checkbox', { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);