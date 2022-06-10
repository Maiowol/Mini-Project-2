import React from 'react'
import styled from 'styled-components'

function Header2() {
  return (
    <SignOut>
      <div className='header'>
      <div className='header__signout'>
        <button className='signout'>로그아웃</button>
      </div>
    </div>
    </SignOut>
  )
}

const SignOut = styled.div`
*{
  margin: 0;
}

.header {
  background-color: #fafafa;
  height: 100vh;
}

.header__signout {
  background-color: white;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  object-fit: contain;
  display: flex;
  justify-content: flex-end;
  
}

.signout {
    margin-right: 10px;
}

`;

export default Header2;
