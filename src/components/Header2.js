// Header2.js 로그인 됐을 때 (+로그아웃 버튼)
import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';

function Header2() {
  const navigate = useNavigate();

  return (
    <NavBar>
       <div className='logo'>
            <a onClick={()=>{navigate('/')}}>네것내것</a>
          </div>
          {/* <ul className='product'>
            <li><a>samsung</a></li>
            <li><a>lg</a></li>
            <li><a>apple</a></li>
            <li><a>others</a></li>
          </ul> */}
          <div className='button'>
          <button variant="text" onClick={()=>{navigate('/post')}}>게시글 작성</button>
          <button variant="text" onClick={()=>{navigate('/')}}>로그아웃</button>
          </div>
    </NavBar>
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
