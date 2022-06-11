import React from 'react'
import styled from 'styled-components';



//components
import Header2 from '../components/Header2';

function Detail() {
    return (
        <>
            <Header2 />
            <DetailBox>
                <DetailBlock>
                    <Img src='' />
                    <PostBox>
                        {/* 유저닉네임, 제품명, 작성한 내용 */}
                        <div className='nickname'></div>
                        <div className='product'></div>
                        <div className='content'></div>
                        <button>글 삭제</button>
                    </PostBox>
                    <CommentsBox>
                       {/* 댓글, 댓글남기기 */}
                       <strong>comments</strong>

                    </CommentsBox>


                </DetailBlock>
            </DetailBox>

        </>
    )
}

const DetailBox = styled.div`
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
margin-top: 20px;

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

const Img = styled.div`

`;

const PostBox = styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid lightgray;
padding: 0 1em;
margin: 1em;
width: 400px;
height: 500px;
`;

const CommentsBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid lightgray;
padding: 0 1em;
margin: 1em;
width: 300px;
height: 500px;

strong{
    margin-top: 10px;
}
`;


export default Detail;
