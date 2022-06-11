//SignUp.js 회원가입 페이지
import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header';

function SignUp() {
  return (
    <>
    <Header />
    <SignBox>
    <SignUpBlock>
        <h1>회원가입</h1>
       
        <label>아이디</label>
        <input type="text" id="id" 
        placeholder="이메일 형식을 입력하세요" />
        
        <label>닉네임</label>
        <input type="text" id="name" 
        placeholder="닉네임을 입력하세요" />
        
        <label>비밀번호</label>
        <input type="password" id="pw" 
        placeholder="비밀번호를 입력하세요" />
        
        <label>비밀번호 확인</label>
        <input type="password" id="pw_check" 
        placeholder="비밀번호를 다시 입력하세요" />
        
        <button>회원가입</button>
    </SignUpBlock>
    </SignBox>
   
</>
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

const SignUpBlock = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap" rel="stylesheet"); 
*{
    font-family: 'Gowun Dodum', sans-serif;
}  
display: flex;
flex-direction: column;
align-items: center;

h1 {
    margin-top: 40px;
    margin-bottom: 40px;
}

label {
    text-align: left ;
}

input {
    &: hover {
       outline: 1.5px solid #696969; 
    }
    width: 250px;
    height: 35px;
    margin-bottom: 8px;
    border: 2px solid lightgray;
    outline: none;
}

button {
    width: 100px;
    margin-top: 30px; 
}

`;


export default SignUp
