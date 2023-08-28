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

  const hookTabs = [
    'useState', 'useInput', 'useTabs', 'useEffect', 'useTitle', 'useClick',
    'useConfirm', 'usePreventLeave', 'useBeforeLeave', 'useNetwork',
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
