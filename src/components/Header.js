//로그인이 안됐을 때
import React from 'react'
import styled from 'styled-components';
import Modal from 'react-modal'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { actionCreators as userActions } from "../redux/modules/user";


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
    },).then(function (response) {
      alert("로그인이 완료되었습니다!")
      navigate('/');
      console.log(response)

    }).catch(function (error) {
      alert('로그인에 실패했습니다!')
    })
    
  };


  // if (res.ACCESS_TOKEN) {
  //   localStorage.setItem('login-token', res.ACCESS_TOKEN);
  //     }
  // handleLogin = () => {
  //   fetch(`${signAPI}/login`, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       "ID": id_ref.current.value,
  //       "password": pw_ref.current.value
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       if(res.ACCESS_TOKEN) {
  //           localStorage.setItem('loing-token', res.ACESS_TOKEN);
  //         }
  //   })
  // };
  

  
  
  return (
    <>
      <LoginBar>
        <div className='nav'>
          <div className='logo'>
            <a>네것내것</a>
          </div>
          <Btn>
            <button className='login' onClick={() => { navigate('/asdf') }}>메인2</button>
            <button className='login' onClick={() => setModalIsOpen(true)}>로그인</button>
            <button className='signup' onClick={() => { navigate('/signup') }}>회원가입</button>
          </Btn>
        </div>
      </LoginBar>

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
            <button>로그인</button>
            <button onClick={() => setModalIsOpen(false)}>닫기</button>
          </SignInBlock>
        </SignBox>

      </Modal>
    </>
  )
}

const LoginBar = styled.div`

display: flex;
margin: 0;
padding: 30px;
background: #ffffff;


.logo {
  font-family: 'LAB디지털';
  font-size: 30px;
}
`;

const Btn = styled.div`
display: flex;
justify-content: flex-end;

.login {
    margin-right: 10px;
    
}

.signup {
   margin-right: 10px;
}
`;


const SignBox = styled.div`
width: 450px;
height: 568px;

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
