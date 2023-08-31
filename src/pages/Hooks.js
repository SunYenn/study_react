import React, { useState } from 'react';
import '../styles/Hooks.css'
import HookList from '../components/Hooks/HookList';
import { Menu } from 'antd';

const { Item } = Menu;

const Layout = () => {
  const [activeTab, setActiveTab] = useState('useState');

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  // const hookTabs = [
  //   'useState', 'useInput', 'useTabs', 'useEffect', 'useTitle', 'useClick',
  //   'useConfirm', 'usePreventLeave', 'useBeforeLeave', 'useFadeIn', 'useNetwork',
  //   'useScroll', 'useFullscreen', 'useAxios', 'useCallback'
  // ];

  // 리액트 16.8 이전 버전에서는 함수형 컴포넌트에서는 상태를 관리할 수 없었지만,
  // Hook 이라는 기능이 도입되면서 함수형 컴포넌트에서도 상태를 관리할 수 있게됨.

  const hookTabs = [
    'useState', 'useInput', 'useTabs', 'useEffect', 'useTitle', 'useClick',
    'useConfirm', 'useBeforeLeave', 'useNetwork',
    'useScroll', 'useFullscreen', 'useAxios', 'useCallback'
  ];


  return (
    <div className='hook'>
      <Menu 
        mode="inline" 
        selectedKeys={[activeTab]}
        style={{
          width: 256,
        }}
      >
        {hookTabs.map(tab => (
          <Item key={tab} onClick={() => handleTabSelect(tab)}>
            {tab}
          </Item>
        ))}
      </Menu>
      <div className='hook-main'>
        <HookList activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Layout;
