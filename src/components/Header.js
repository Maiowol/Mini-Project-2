//로그인이 안 됐을 때
import React from 'react'
import styled from 'styled-components';
import Modal from 'react-modal'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';


import Button from '@mui/material/Button';
import { AiFillApple } from "react-icons/ai";

function Header(props) {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const id_ref = React.useRef(null);
  const pw_ref = React.useRef(null);

  // const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

  const callSomethingAxios = () => {
    axios.post('http://dlckdals04.shop/login', {
      "ID": id_ref.current.value,
      "password": pw_ref.current.value
    }, )
          .then(function (response) {
      alert("로그인이 완료되었습니다!")
      navigate('/');
      localStorage.setItem('access_token', response.data.token);

      console.log(response)

    }).catch(function (error) {
      alert('로그인에 실패했습니다!')
    })
  };  
  
  return (
    <>
    <NavBar>
       <div className='logo'>
            <a onClick={()=>{navigate('/')}}>네것내것</a>
          </div>
          {/* <ul className='product'>
            <li><a>samsung</a></li>
            <li><a>lg</a></li>
            <li className='apple'><a><AiFillApple /></a></li>
            <li><a>others</a></li>
          </ul> */}
          <div className='button'>
          {/* <button className='post' onClick={()=> { navigate('/asdf') }}>메인2</button> */}
          
          <Button variant="text" className='post' 
          onClick={()=> setModalIsOpen(true)}>
            로그인</Button>

          <Button variant="text" className='signout' 
          onClick={()=>{navigate('/signup')}}>
            회원가입</Button>
         
          </div>
    </NavBar>

      <Modal isOpen={modalIsOpen} style={modalstyle}>
        <SignBox>
          <SignInBlock>
            <h1>로그인</h1>
            <p>아이디</p>
            <input ref={id_ref}
              type="text" id="id" placeholder="아이디를 입력하세요" />
            <p>비밀번호</p>
            <input ref={pw_ref}
              type="password" pw="pw" placeholder="비밀번호를 입력하세요" />
            {/* 1. 시작점 */}
          <Button variant="outlined" onClick={callSomethingAxios}>
            로그인</Button>
            <button onClick={() => setModalIsOpen(false)}>닫기</button>
          </SignInBlock>
        </SignBox>

      </Modal>
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

.apple {
  margin-top: 3px;
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


const SignBox = styled.div`
width: 440px;
height: 470px;

background: white;
box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.09);

margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
margin-top: 50px;
margin-bottom: 32px;
display: flex;
flex-direction: column;
`;

const SignInBlock = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h1 {
    margin-top: 40px;
    margin-bottom: 40px;
}

p {
    margin: 7px;
    padding-right: 200px;
}

input {
    &:hover { 
        outline: 1.5px solid black;
    }
    width: 250px;
    height: 35px;
    border: 2px solid lightgray;
    outline: none;
}

button {
    width: 100px;
    margin-top: 30px;
   
}
`;

// Modal 스타일 (기본default값임)
const modalstyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    zIndex: 10,
  },
  content: {
    background: "#fafafa",
    overflow: "auto",
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    WebkitOverflowScrolling: "touch",
    borderRadius: "14px",
    outline: "none",
    zIndex: 10,
  },
};


export default Header;
