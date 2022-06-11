// Main.js 메인 페이지(로그인X)
import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

//components
//Header: 로그인, 로그아웃 버튼
import Header from '../components/Header';


function Main() {
  const navigate = useNavigate();
  return (
    <>
    
      <Header />
      <Container>
        <HomeCard onClick={()=>{navigate('/detail')}}>
          <img src='https://velog.velcdn.com/images%2Fjini_eun%2Fpost%2F107f5cfb-e97c-4c4c-b997-06098062e5b3%2Fimage.png'/>
          <h4><strong></strong></h4>
          </HomeCard>
           
        <HomeCard></HomeCard>
        <HomeCard></HomeCard>
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
display: flex;
flex-direction: row;
`;

const HomeCard = styled.div`
&:hover {
    transform: scale(1.1); 
    transition: 2s;  
}

width: 350px;
height: 350px;

min-width: 20%; 
min-hight: 20%;

background: #d3d3d3;
box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.09);

margin-top: 50px;
margin-bottom: 32px;
margin-left: 100px;
display: flex;
flex-direction: column;
cursor: pointer;
`;


export default Main;
