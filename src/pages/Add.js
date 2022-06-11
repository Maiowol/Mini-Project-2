// Add.js 게시글 작성 페이지
import React from 'react'
import styled from 'styled-components';

//components
import Header from '../components/Header';

function Add() {
    return (
        <>
            <Header />
            <WriteBox>
                <PostBlock>
                    <h1>게시글 작성</h1>
                    <h4>이미지 선택</h4>
                    <input type='file'></input>
                    <img src="" />
                    <textarea placeholder='내용을 입력해주세요'></textarea>
                    <button>완료하기</button>
                </PostBlock>
            </WriteBox>
        </>
    )
}

const WriteBox = styled.div`
width: 450px;
height: 600px;

background: white;
box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.09);

margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
margin-top: 50px;
margin-bottom: 32px;
display: flex;
flex-direction: column;
`;

const PostBlock = styled.div`
display: flex;
flex-direction: column;
align-items: center;

textarea {
    &:hover { 
        outline: 0.5px solid black;
    }
    width:80px;
    outline: none;
}

img {
    width: 300px;
    margin-top: 20px;
    
}

.picture {
   width: 300px;
   height: 200px;
}

textarea {
    width: 80%;
    height: 12.25em;
    border: 1px solid lightgray;
    resize: none;
    margin-top: 80px;
  }

  button {
      margin-top: 10px;   
  }
`;

export default Add;
