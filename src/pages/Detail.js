//상세 페이지
import React from 'react'
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';

//components
import Header2 from '../components/Header2';

function Detail() {
    return (
        <>
            <Header2 />
            <DetailBox>
                <DetailBlock>

                    {/* 유저닉네임, 제품명, 작성한 내용 */}
                    <PhotoBox>
                        <strong>nickname</strong>

                        <div className='profile'>
                            <img src=
                                'https://newsimg.sedaily.com/2021/02/01/22ID302VAD_16.jpg' />
                        </div>

                        <div className='product'>제품명:
                            <div> </div></div>
                        <div className='content'>자세한 내용:
                            <div> </div></div>

                    </PhotoBox>

                    {/* 댓글, 댓글남기기 */}
                    <CommentsBox>
                        <strong>comments</strong>
                        <div className='comments'>
                            <div className='profile'>
                                <Avatar
                                    className='post__avatar'
                                    alt='U'
                                    src='/static/images/avatar/1.jpg'
                                />
                                <text>아이디값</text>
                            </div>
                        </div>
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


const PostBox = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
border: 1px solid lightgray;
padding: 0 1em;
margin: 1em;
width: 400px;
height: 500px;

strong {
    display:flex;
    flex-direction: row;
    margin-top: 20px;
    margin-left: 50px;
    }
`;


const PhotoBox = styled.div`
display: flex;
flex-direction: column;
border: 1px solid lightgray;
padding: 0 1em;
margin: 1em;
width: 300px;
height: 500px;

strong {
    margin-top: 10px;
    margin-bottom: 10px;
}

.product {
 margin-top: 10px;
 margin-bottom: 40px;
}
`;


const CommentsBox = styled.div`
display: flex;
flex-direction: column;
border: 1px solid lightgray;
padding: 0 1em;
margin: 1em;
width: 300px;
height: 500px;

strong{
    margin-top: 10px;
    margin-bottom: 10px;
}

.comments {
display: flex;
flex-direction: row;
border: 1px solid #dee2e6;
 height: 300px;;
 padding-top: 10px;
 padding-bottom: 20px;
 padding-left: 7px;
 overflow-y: auto; 

.profile {
display:flex;
flex-direction: row;
height: 50px;
padding-top: 10px;
padding-left: 7px;
overflow-y: auto; 

text {
padding-top: 10px;
padding-left: 7px;
}
`;

export default Detail;
