import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'
import Layout from './Layout';
import Todo from './pages/Todo'
import Immer from './pages/Immer';
import Hooks from './pages/Hooks';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Todo />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/Immer" element={<Immer />} />
        <Route path="/Hooks" element={<Hooks />} />
      </Route>
    </Routes>
  );
};

export default App;