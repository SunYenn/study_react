import './App.css'
import { Tabs } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {

  const navigate = useNavigate();

  const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };

  const goPage = (key) => {
    const item = items.find(item => item.key === key)
    navigate(item.path, {
      replace: true,
    });
  };

  const items = [
    {
      key: '1',
      label: 'Home',
      path: '/Home/예은/coral'
    },
    {
      key: '2',
      label: 'LifeCyle',
      path: '/LifeCyle'
    },
    {
      key: '3',
      label: 'Hooks',
      path: '/Hooks'
    },
    {
      key: '4',
      label: 'Immer',
      path: '/Immer'
    },
    {
      key: '5',
      label: 'Todo',
      path: 'Todo'
    },
    {
      key: '6',
      label: 'Board',
      path: 'Board'
    },
  ];

  return (
    <div className='App'>
      <div className='App-header'>
        <Tabs defaultActiveKey="1" items={items} onChange={goPage} />
      </div>
      <div className='Container'>
        <Outlet />
      </div>
    </div>

  );
};

export default Layout;