import React, { useRef, useState, useCallback } from 'react';
import '../styles/Todo.css'
import TodoTemplate from '../components/Todo/TodoTemplate';
import TodoInsert from '../components/Todo/TodoInsert';
import TodoList from '../components/Todo/TodoList';

function createTodoContents() {
  const array = [];
  for (let i = 0; i <= 10; i++) {
    array.push({
      id: i,
      text: `할 일 ${i + 1}`,
      checked: false,
    });
  }
  return array;
}

const Todo = () => {
  const [todos, setTodos] = useState(createTodoContents);

  // 고유 값으로 사용 될 id
  // UI에 보여주지 않아 렌더링 필요X, 내부적으로만 사용하는 코드이므로 useRef() 사용
  const nextId = useRef(todos.length);

  // TodoInsert.js에서 항목 추가로 사용
  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos => todos.concat(todo));
    nextId.current += 1; // nextId 1 씩 더하기
  }, []);

  // TodoListItem.js에서 항목 제거로 사용
  const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);

  // TodoListItem.js 에서 체크박스 동작으로 사용
  const onToggle = useCallback(id => {
    setTodos(todos =>
      // todos를 순회하며 id가 일치하는 아이템의 shecked 값 반전 시키기
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default Todo;