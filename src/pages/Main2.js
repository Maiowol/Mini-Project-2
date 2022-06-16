// Main2.js 메인 페이지(로그인 o)
import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useDispatch, } from "react-redux";

//components
//Header: 로그인, 로그아웃 버튼
import Header from '../components/Header';

const logout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};

function Main() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const data = useSelector((state) => state.post.list)
  // console.log("state : " ,useSelector((state) => state))
  // console.log(data)
  
  const [state, setState] = React.useState("")


  React.useEffect(() => {
    axios
      .get("http://dlckdals04.shop/") // back-end server http://13.125.151.93/api/poststudy
      .then((response) => {
        setState(response.data.posts);
        console.log(response.data);
      })
      .catch((response) => {
        console.log(response);
      });
  }, []);

console.log(state)

  return (
    <>     
      <NavBar>
        <div className='logo'>
          <a onClick={() => { navigate('/') }}>네것내것</a>
        </div>
        <div className='button'>
          <Button variant="text"
            onClick={() => { navigate('/post') }}
          >게시글 작성
          </Button>
          <Button variant="text"
            onClick={logout}
          >로그아웃</Button>
        </div>
      </NavBar>

      <Container>
        {state&&state.map((posts,index) => 
          
          <HomeCard onClick={() => { navigate('/detail/'+posts.postId) }}>
            <div>
              <img src= {posts.image}/>
            </div>
            
            <div className='content'>
             <span>Product: <strong>{posts.product}</strong></span> 
               <p>ID: {posts.nickname}</p>
            </div>

            <div className='icons'>
            </div>    
        </HomeCard>
        )}  
      </Container>
    </>
  )
}

const Container = styled.div`
* {
  box-sizing: border-box;
}
display: grid;
grid-template-columns: repeat(auto-fit,400px);
gap: 3em;
justify-content: center;
align-items: center;
width: 100%;
position: relative;
background-color: #fafafa;
`;

const HomeCard = styled.div`
&:hover {
    transform: scale(1.1); 
    transition: 0.2s;  
}
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
  width: 100%;
  height: 300px;
  border-bottom: 2px solid rgba(223, 223, 223, 0.60);
}
.content {
  margin-top: 10px;
  margin-left: 10px;
}

p {
 margin-top: 25px;
 color: gray;
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


export default Main;