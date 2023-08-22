import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Nav from 'react-bootstrap/Nav';
import './App.css'
import Todo from './pages/Todo'
import Immer from './pages/Immer';
import Hooks from './pages/Hooks';

const App = () => {

  const [activeTab, setActiveTab] = useState('todo');

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='App'>
      <div className='App-header'>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link
              active={activeTab === 'todo'}
              onClick={() => handleTabSelect('todo')}
            >
              Todo
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={activeTab === 'immer'}
              onClick={() => handleTabSelect('immer')}
            >
              Immer
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={activeTab === 'hooks'}
              onClick={() => handleTabSelect('hooks')}
            >
              Hooks
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className='Container'>
        {activeTab === 'todo' ? <Todo /> : null}
        {activeTab === 'immer' ? <Immer /> : null}
        {activeTab === 'hooks' ? <Hooks /> : null}
      </div>
    </div>
    
  );
};

export default App;