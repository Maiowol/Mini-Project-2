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
        <HomeCard onClick={() => { navigate('/detail') }}>
              <img src=
         'https://image.zdnet.co.kr/2020/02/25/jh7253_p8NqEoxVA8c2Y.jpg'/>

        
          <div className='content'>
            <strong>텍스트</strong>
            <h4>작성자</h4>
          </div>

          <div className='icons'>
          </div>    
        </HomeCard>
        <HomeCard onClick={() => { navigate('/detail') }}>
              <img src=
         'https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.large_2x.jpg'/>
            
          <div className='content'>
            <strong>텍스트</strong>
            <h4>작성자</h4>
          </div>

          <div className='icons'>
          </div>    
        </HomeCard>
        
        <HomeCard></HomeCard>
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
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
background-color: #fafafa;
`;

const HomeCard = styled.div`
// &:hover {
//     transform: scale(1.1); 
//     transition: 0.2s;  
// }
display: flex;
flex-direction: column;

width: 370px;
height: 390px;
overflow: hidden;

background: white;
box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.09);

margin: 0 auto;
margin-top: 70px;
cursor: pointer;

border: 1px solid white;

img {
  border-bottom: 2px solid rgba(223, 223, 223, 0.60);
}

.content {
  margin-top: 10px;
  margin-left: 10px;
}

.content_item {
  font-weight: normal;
  height: 50%;
}

.text{
  margin-left: 10px;
}

.line {
  border-bottom: 1px solid lightgray;
}

.icons {
  border-bottom: 1px solid rgba(223, 223, 223, 0.52);
}

`;


export default Main;
