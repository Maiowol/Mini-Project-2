//상세 페이지
import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios"

//components
import DetailBox from '../components/DetailBox';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


function Detail(props) {
  let { postId } = useParams()
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate('/');
    window.location.reload();
  };

  const [state, setState] = React.useState("")
  const [product, setProduct] = React.useState(['애플', '삼성', 'LG']);
  const [content, setContent] = React.useState(['Apple', 'Samsung', 'LG']);

  React.useEffect(() => {
    axios
      .get("http://dlckdals04.shop/" + postId)
      .then((response) => {
        setState(response.data);
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
          <a onClick={() => { navigate('/') }}
          >네것내것</a>
        </div>
        <div className='button'>
          <Button variant="text" onClick={() => { navigate('post') }}
          >게시글 작성</Button>
          <Button variant="text" onClick={logout}
          >로그아웃</Button>
        </div>
      </NavBar>
      <DetailPage>
        <DetailBlock>
          <DetailBox
            state={state}
          />
        </DetailBlock>
      </DetailPage>
    </>
  )
}


const DetailPage = styled.div`
width: 850px;
height: 600px;

background: white;
box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.09);

margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
margin-top: 50px;
margin-bottom: 32px;
display: flex;
flex-direction: column;
`;

const DetailBlock = styled.div`
margin: auto;
  display: flex;
  align-items: center;

textarea {
&:hover { 
outline: 0.5px solid black;
}
width:80px;
}

img {
width: 300px;

}

.picture {
width: 300px;
height: 200px;
}

textarea {
width: 40%;
height: 50%;
border: 1px solid lightgray;
resize: none;
margin: 0 auto;
outline: none;
}

button {
margin-top: 10px;   
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

export default Detail;
