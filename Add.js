// Add.js 게시글 작성 페이지
import React from 'react'
import styled from 'styled-components';


//components
import Header from '../components/Header';

function Add() {
    const file_ref = React.useState(null)
    const file_link_ref = React.useRef(null)
    const text_ref = React.useRef(null)
    const product_ref = React.useRef(null)
    const [imageSrc, setImageSrc] = React.useState('')

    //이미지 미리보기
    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
          reader.onload = () => {
            setImageSrc(reader.result);
            resolve();
          };
        });
    }

    // const formData = new FormData();
    //     if(fileInput.current){
    //         formData.append('image', file_ref.current.files[0])
    //         formData.append('product', product_ref.current.value)
    //         formData.append('content', text_ref.current.value)
    //         // for (var pair of formData.entries()){
    //         //     console.log(pair);
    //         //  }
    //     }


    return (
        <>
            <Header />
            <WriteBox>
                <PostBlock>
                    <h1>게시글 작성</h1>
                    <h4>이미지 미리보기</h4>                  
                    <input type="file" ref ={file_ref} onChange={(e) => {
                        encodeFileToBase64(e.target.files[0]);
                    }} />
                    <div className="picture">
                        {imageSrc && <img src={imageSrc} alt="preview-img" />}
                    </div>
                    <div className='item_name'>
                        품목명: <input ref={product_ref}type="text"></input>    
                    </div>
                                
                    <textarea ref={text_ref}placeholder='내용을 입력해주세요'></textarea>
                    <button>완료하기</button>
                </PostBlock>
            </WriteBox>
        </>
    )
}

const WriteBox = styled.div`
width: 450px;
height: 800px;

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
    width: 100%;
    height: 100%;
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

.item_name  {
    position: relative;
    top: 50px;
    right: 65px
}
`;



export default Add;
