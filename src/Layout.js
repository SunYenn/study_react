import './App.css'
import Nav from 'react-bootstrap/Nav';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {

  const navigate = useNavigate();

  const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };

  const goPage = (page) => {
    // articles 경로로 이동
    navigate(page, {
      replace: true,
    });
  };
  return (
    <div className='App'>
      <div className='App-header'>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link onClick={() => goPage('/Home/예은/coral')}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => goPage('/LifeCyle')}>LifeCyle</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => goPage('/Hooks')}>Hooks</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => goPage('/Immer')}>Immer</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => goPage('/Todo')}>Todo</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => goPage('/Board')}>Board</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className='Container'>
        <Outlet />
      </div>
    </div>

  );
};

export default Layout;