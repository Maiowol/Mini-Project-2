// Main2.js 메인 페이지(로그인 상태)
import React from 'react'
import styled from 'styled-components'
import { Navigate, useNavigate } from 'react-router-dom';

//components
import Header2 from '../components/Header2';

function Main2() {
  const navigate = useNavigate();

  return (
    <>
      <Header2 />
      <Container>
        <HomeCard onClick={() => { navigate('/postid') }}>
          <div className='foto'>
            <img src=
            'https://velog.velcdn.com/images%2Fjini_eun%2Fpost%2F107f5cfb-e97c-4c4c-b997-06098062e5b3%2Fimage.png' />
          </div>
          <div className='text'>
            <h4><strong>텍스트</strong></h4>
          </div>
        </HomeCard>
        <HomeCard />
        <HomeCard />

      </Container>

      <Container>
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </Container>

      <Container>
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </Container>

    </>
  )
}

const Container = styled.div`
* {
  box-sizing: border-box;
}
display: flex;
flex-wrap: wrap;
width: 100%;
position: relative;
`;

const HomeCard = styled.div`
// &:hover {
//     transform: scale(1.1); 
//     transition: 2s;  
// }

width: 350px;
height: 380px;

background: #d3d3d3;
box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.09);

margin-top: 50px;
margin-bottom: 32px;
margin-left: 100px;
display: flex;
flex-direction: column;
cursor: pointer;

.foto {
  width: 100%;
  height: 57%;
}

.text{
  margin-left: 10px;
}
`;



export default Main2;
