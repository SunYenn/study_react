import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import '../styles/Hooks.css'

import HookUseState from '../components/Hooks/1_useState';
import HookUseInput from '../components/Hooks/2_useInput';
import HookUseTabs from '../components/Hooks/3_useTabs';
import HookUseEffect from '../components/Hooks/4_useEffect';
import HookUseTitle from '../components/Hooks/5_useTitle';
import HookUseClick from '../components/Hooks/6_useClick';
import HookUseConfirm from '../components/Hooks/7_useConfirm';
import HookUsePreventLeave from '../components/Hooks/8_usePreventLeave';
import HookUseBeforeLeave from '../components/Hooks/9_useBeforeLeave';
import HookUseFadeIn from '../components/Hooks/10_useFadeIn';
import HookUseNetwork from '../components/Hooks/11_useNetwork';
import HookUseScroll from '../components/Hooks/12_useScroll';
import HookUseFullscreen from '../components/Hooks/13_useFullscreen';
import HookUseAxios from '../components/Hooks/14_useAxios';
import HookUseCallback from '../components/Hooks/15_useCallback';

const Layout = () => {

  const [activeTab, setActiveTab] = useState('useState');

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='hook'>
      <div className='hook-nav'>
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link
              active={activeTab === 'useState'}
              onClick={() => handleTabSelect('useState')}
            >
              useState
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={activeTab === 'useInput'}
              onClick={() => handleTabSelect('useInput')}
            >
              useInput
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={activeTab === 'useTabs'}
              onClick={() => handleTabSelect('useTabs')}
            >
              useTabs
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={activeTab === 'useEffect'}
              onClick={() => handleTabSelect('useEffect')}
            >
              useEffect
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={activeTab === 'useTitle'}
              onClick={() => handleTabSelect('useTitle')}
            >
              useTitle
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={activeTab === 'useClick'}
              onClick={() => handleTabSelect('useClick')}
            >
              useClick
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={activeTab === 'useConfirm'}
              onClick={() => handleTabSelect('useConfirm')}
            >
              useConfirm
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={activeTab === 'usePreventLeave'}
              onClick={() => handleTabSelect('usePreventLeave')}
            >
              usePreventLeave
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={activeTab === 'useBeforeLeave'}
              onClick={() => handleTabSelect('useBeforeLeave')}
            >
              useBeforeLeave
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={activeTab === 'useFadeIn'}
              onClick={() => handleTabSelect('useFadeIn')}
            >
              useFadeIn
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={activeTab === 'useNetwork'}
              onClick={() => handleTabSelect('useNetwork')}
            >
              useNetwork
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={activeTab === 'useScroll'}
              onClick={() => handleTabSelect('useScroll')}
            >
              useScroll
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={activeTab === 'useFullscreen'}
              onClick={() => handleTabSelect('useFullscreen')}
            >
              useFullscreen
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={activeTab === 'useAxios'}
              onClick={() => handleTabSelect('useAxios')}
            >
              useAxios
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={activeTab === 'useCallback'}
              onClick={() => handleTabSelect('useCallback')}
            >
              useCallback
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className='hook-main'>
        {activeTab === 'useState' ? <HookUseState /> : null}
        {activeTab === 'useInput' ? <HookUseInput /> : null}
        {activeTab === 'useTabs' ? <HookUseTabs /> : null}
        {activeTab === 'useEffect' ? <HookUseEffect /> : null}
        {activeTab === 'useTitle' ? <HookUseTitle /> : null}
        {activeTab === 'useClick' ? <HookUseClick /> : null}
        {activeTab === 'useConfirm' ? <HookUseConfirm /> : null}
        {activeTab === 'usePreventLeave' ? <HookUsePreventLeave /> : null}
        {activeTab === 'useBeforeLeave' ? <HookUseBeforeLeave /> : null}
        {activeTab === 'useFadeIn' ? <HookUseFadeIn /> : null}
        {activeTab === 'useNetwork' ? <HookUseNetwork /> : null}
        {activeTab === 'useScroll' ? <HookUseScroll /> : null}
        {activeTab === 'useFullscreen' ? <HookUseFullscreen /> : null}
        {activeTab === 'useAxios' ? <HookUseAxios /> : null}
        {activeTab === 'useCallback' ? <HookUseCallback /> : null}
      </div>
    </div>
  );
};

export default Layout;
