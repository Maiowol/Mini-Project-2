//로그인이 안 됐을 때
import React from 'react'
import styled from 'styled-components';
import Modal from 'react-modal'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { actionCreators as userActions } from "../redux/modules/user"
import Button from '@mui/material/Button';
import axios from "axios"

function Header(props) {
  const navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const dispatch = useDispatch()

  const id_ref = React.useRef(null);
  const pw_ref = React.useRef(null);

  const login = () => {
    dispatch(userActions.loginDB(id, pwd));
    navigate('/');
  };

  const checkID = () => {
    const id_value = Array.from(id_ref.current.value)
    if (id_value == "") {
      alert('아이디를 입력해주세요!')
      document.getElementById('id').focus()
    } else if (id_value.length < 4) {
      alert('4자리 이상 12자리 이하의 아이디를 적어주세요.')
      document.getElementById('id').focus()
    } else if (id_value.length > 12) {
      alert('4자리 이상 12자리 이하의 아이디를 적어주세요.')
    } else {
      checkPW()
    }
  };

  const checkPW = () => {
    const pw_value = Array.from(pw_ref.current.value)
    if (pw_value == "") {
      alert('비밀번호를 입력해주세요.')
    } else if (pw_value.length < 4) {
      alert('4자리 이상 12자리 이하의 비밀번호를 적어주세요.')
    } else if (pw_value.length > 12) {
      alert('4자리 이상 12자리 이하의 비밀번호를 적어주세요.')
      document.getElementById('pw').focus()
    } else {
      login()
    }
  };

  const callSomethingAxios = () => {
    axios.post("http://dlckdals04.shop/login", {
      "ID": id_ref.current.value,
      "password": pw_ref.current.value,

    }).then(function (response) {
      window.alert(`${id}님 환영합니다!`)
      localStorage.setItem("token", response.data.token);
      setModalIsOpen(false)
      window.location.reload();
    })
      .catch(function (error) {
        alert("로그인을 다시 해주세요")
        console.log(error);
      })
  }

  return (
    <>
      <NavBar>
        <div className='logo'>
          <a onClick={() => { navigate('/') }}
          >네것내것</a>
        </div>

        <div className='button'>
          <Button variant="text"
            className='post'
            onClick={() => setModalIsOpen(true)}
          >로그인</Button>

          <Button variant="text"
            className='signout'
            onClick={() => { navigate('/signup') }}
          >회원가입</Button>
        </div>
      </NavBar>

      <Modal isOpen={modalIsOpen}
        style={modalstyle}>
        <SignBox>
          <SignInBlock>
            <h1>로그인</h1>

            <input ref={id_ref} id="id"
              onChange={(e) => {
                setId(e.target.value);
              }} type="text" placeholder="아이디를 입력하세요" />

            <input ref={pw_ref} id="pw" type="password"
              onChange={(e) => {
                setPwd(e.target.value);
              }} placeholder="비밀번호를 입력하세요" />

            <div class="btn">
              <div class="close">
                <Button onClick={() => setModalIsOpen(false)}
                  variant="outlined">닫기</Button>
              </div>

              <div className='login'>
                <Button onClick={callSomethingAxios}
                  variant="outlined">로그인</Button>
              </div>

            </div>



          </SignInBlock>
        </SignBox>
      </Modal>
    </>
  )
}

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
  cursor:pointer;
}

.product {
  display: flex;
  list-style: none;
  padding-left: 0;
}

.product li {
  padding: 8px; 12px;
}

.apple {
  margin-top: 3px;
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


const SignBox = styled.div`
width: 440px;
height: 470px;

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

input {
    &:hover { 
        outline: 1.5px solid lightgray;
    }
    background: #f0f8ff;
    border: none;
    outline: none;
    width: 250px;
    height: 45px;
    border: none;
    outline: none;
    margin-bottom: 10px;
    border-radius: 8px;
}

input::placeholder {
  padding-left: 8px;
}

.btn {
  display:flex;
    margin: 0 auto;
    margin-top: 30px; 
    margin-bottom: 10px;
}

`;

// Modal 스타일 (기본default값임)
const modalstyle = {

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    zIndex: 10,
  },
  content: {
    background: "aliceblue",
    overflow: "auto",
    top: '40px',

    left: '40px',
    right: '40px',
    bottom: '40px',
    WebkitOverflowScrolling: "touch",
    borderRadius: "14px",
    outline: "none",
    zIndex: 10,
  },
};


export default Header;
