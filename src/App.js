import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'
import Layout from './Layout';
import Home from './pages/Home'
import Todo from './pages/Todo'
import Immer from './pages/Immer';
import Hooks from './pages/Hooks';
import Board from './pages/Board';
import LifeCyle from './pages/LifeCycle';

// react에선 JSX(JavaScript XML) 사용
// 하나의 DOM으로 구성되어야 함
// JSX안에서 javascript를 사용하려면 {} 사용

const App = () => {

  return (
    <Routes>
      {/* 바깥 쪽에 감싸주며 이 내부에 다른 요소들이 렌더링 될 수 있도록 함 */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Home/:name/:color" element={<Home />} /> 
        <Route path="/Hooks" element={<Hooks />} /> 
        <Route path="/Immer" element={<Immer />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/Board" element={<Board />} />
        <Route path="/LifeCyle" element={<LifeCyle />} />
      </Route>
    </Routes>
  );
};

export default App;