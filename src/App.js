import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'
import Layout from './Layout';
import Todo from './pages/Todo'
import Immer from './pages/Immer';
import Hooks from './pages/Hooks';

// react에선 JSX(JavaScript XML) 사용
// 하나의 DOM으로 구성되어야 함
// JSX안에서 javascript를 사용하려면 {} 사용

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Hooks />} />
        <Route path="/Hooks" element={<Hooks />} /> 
        <Route path="/Immer" element={<Immer />} />
        <Route path="/Todo" element={<Todo />} />
      </Route>
    </Routes>
  );
};

export default App;