import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header';


function Login() {
  return (
    <div>
         <>  
        <Header />
        <SignBox>
            <SignInBlock>
            <h1>로그인</h1>
            <p>아이디</p>
            <input type="text" id="id" placeholder="이메일 형식을 입력하세요"/>
            <p>비밀번호</p>
            <input type="password" pw="pw" placeholder="비밀번호를 입력하세요" />
            {/* 1. 시작점 */}
            <button>로그인</button>
        </SignInBlock>    
        </SignBox>
        </>
    </div>
  )
}

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

export default Login;
