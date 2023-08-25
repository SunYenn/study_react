import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import '../styles/Hooks.css'
import HookList from '../components/Hooks/HookList';

const Layout = () => {
  const [activeTab, setActiveTab] = useState('useState');

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  const hookTabs = [
    'useState', 'useInput', 'useTabs', 'useEffect', 'useTitle', 'useClick',
    'useConfirm', 'usePreventLeave', 'useBeforeLeave', 'useFadeIn', 'useNetwork',
    'useScroll', 'useFullscreen', 'useAxios', 'useCallback'
  ];

  return (
    <div className='hook'>
      <div className='hook-nav'>
        <Nav variant="pills">
          {hookTabs.map(tab => (
            <Nav.Item key={tab}>
              <Nav.Link
                active={activeTab === tab}
                onClick={() => handleTabSelect(tab)}
              >
                {tab}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>
      <div className='hook-main'>
        <HookList activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Layout;
