import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
     <LoginBar>
      <div className='header'>
        <div className='header__login'>
          <button className='login'>로그인</button>
          <button className='signup'>회원가입</button>
        </div>
      </div>
    </LoginBar>
    )
}

const LoginBar = styled.div`
*{
  margin: 0;
}

.header {
  background-color: #fafafa;
  height: 100vh;
}

.header__login {
  background-color: white;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  object-fit: contain;
  display: flex;
  justify-content: flex-end;
  
}

.login {
    margin-right: 10px;
}

.signup {
   margin-right: 10px;
}

`;
  
  

export default Header;
