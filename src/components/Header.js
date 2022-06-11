import React from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  
  return (
    <LoginBar>
      {/* Main2로 넘어가게 임의로 만들어 둠 */}
      <button className='login' onClick={() => { navigate('/asdf') }}>메인2</button>

      <button className='login' onClick={() => { navigate('/login') }}>로그인</button>
      <button className='signup' onClick={() => { navigate('/signup') }}>회원가입</button>
    </LoginBar>
  )
}

const LoginBar = styled.div`
display: flex;
justify-content: flex-end;
margin: 0;
border-bottom: 1px solid lightgray;
background-color: white;
padding: 30px;

.login {
    margin-right: 10px;
}

.signup {
   margin-right: 10px;
}
`;


export default Header;
