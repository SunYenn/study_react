import { Outlet, useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Hooks.css'

import HookUseState from '../components/Hooks/1_useState';
import HookUseInput from '../components/Hooks/2_useInput';
import HookUseTabs from '../components/Hooks/3_useTabs';
import HookUseEffect from '../components/Hooks/4_useEffect';
import HookUseTitle from '../components/Hooks/10_useFadeIn';
import HookUseClick from '../components/Hooks/6_useClick';
import HookUseConfirm from '../components/Hooks/7_useConfirm';
import HookUsePreventLeave from '../components/Hooks/8_usePreventLeave';
import HookUseBeforeLeave from '../components/Hooks/9_useBeforeLeave';
import HookUseFadeIn from '../components/Hooks/10_useFadeIn';
import HookUseNetwork from '../components/Hooks/11_useNetwork';
import HookUseScroll from '../components/Hooks/12_useScroll';
import HookUseFullscreen from '../components/Hooks/13_useFullscreen';
import HookUseAxios from '../components/Hooks/14_useAxios';

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };

  const goMain = () => {
    // articles 경로로 이동
    navigate('/', {
      replace: true,
    });
  };

  return (
    <div className='hook'>
      <div className='hook-nav'>
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link as={Link} to="/HookUseState">useState</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/HookUseInput">useInput</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/HookUseTabs">useTabs</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/HookUseEffect">useEffect</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/HookUseTitle">useTitle</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/HookUseClick">useClick</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/HookUseConfirm">useConfirm</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/HookUsePreventLeave">usePreventLeave</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/HookUseBeforeLeave">useBeforeLeave</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/HookUseFadeIn">useFadeIn</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/HookUseNetwork">useNetwork</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/HookUseScroll">useScroll</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/HookUseFullscreen">useFullscreen</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/HookUseAxios">useAxios</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
