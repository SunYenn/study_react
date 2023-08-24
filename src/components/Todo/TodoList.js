import React, { useCallback } from 'react';

// 목록을 가상화하는 windowing 기법
// 사용자에게 실제로 보이지 않는는 컴포넌트는 렌더링 하지 않고 영역만 차지하고 있다가
// 스크롤이 되면 그 스크롤 위치에 있는 컴포넌트만 렌더링하여 보여주는 방식
// 대표적인 windowing 라이브러리가 react-window, react-virtralized
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );
  return (
    <List
      className="TodoList"
      width={512} // 전체 크기
      height={500} // 전체 높이
      rowCount={todos.length} // 항목 개수
      rowHeight={55} // 항목 높이
      rowRenderer={rowRenderer} // 항목을 렌더링할 때 쓰는 함수
      list={todos} // 배열
      style={{ outline: 'none' }} // List에 기본 적용되는 outline 스타일 제거
    />
  );
};

export default React.memo(TodoList);