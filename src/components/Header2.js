// Header2.js 로그인 됐을 때 (+로그아웃 버튼)
import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';

function Header2() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <NavBar>
        <div className='logo'>
          <a onClick={() => { navigate('/') }}>네것내것</a>
        </div>
        <div className='button'>
          <Button variant="text"
            onClick={() => { navigate('/post') }}
          >게시글 작성
          </Button>
          <Button variant="text"
            onClick={logout}
          >로그아웃</Button>
        </div>
      </NavBar>
      {/* <Main/> */}
      <Outlet />
    </>
  )
}

const NavBar = styled.div`
*{
  margin:0;
}

a {
  text-decoration: none; 
}
display: flex;
justify-content: space-between;
align-tiems: center;
background-color: white;
padding: 8px 12px;


.logo {
  font-size: 30px;
  font-family: 'LAB디지털';
}

.product {
  display: flex;
  list-style: none;
  padding-left: 0;
}

.product li {
  padding: 8px; 12px;
}

.button {
  display: flex;
}

.post {
  padding-right: 10px;
}

.signout {
  padding-right: 10px;
}

@media screen and (max-width: 768px) {
  .product {
    flex-direction: column;
  }
}

`;

export default Header2;
