import React, { useRef } from 'react'
import styled from 'styled-components';
import axios from "axios"
import { useParams } from 'react-router-dom';

function DetailBox(props) {

    const [comment_list, setCommentList] = React.useState([]);
    const comment_ref = useRef();

    const token = localStorage.getItem("token")

    let { postId } = useParams;

    const callSomethingAxios = () => {
        axios.post("http://localhost:5001/signup", {
            // http://dlckdals04.shop/" +postId
            "comment": comment_ref.current.value,
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(function (response) {
            console.log('댓글입력 완료!')
            const comment_data = {
                comment: comment_ref.current.value
            }

            setCommentList([...comment_list, comment_data]);

            comment_ref.current.value = "";
            console.log(response)
        })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <>
            <PhotoBox>
                {/* 유저닉네임, 제품명, 작성한 내용 */}
                <strong>nickname</strong>

                <div className='profile'>
                    <img src=
                        {props.state.existsposts && props.state.existsposts.map((posts, index) =>
                            posts.image
                        )} />
                </div>

                <div className='product'>제품명:
                    <div>{props.state.existsposts && props.state.existsposts.map((posts, index) =>
                        posts.product
                    )}</div></div>
                <div className='content'>자세한 내용:
                    <div>{props.state.existsposts && props.state.existsposts.map((posts, index) =>
                        posts.content
                    )}</div></div>

                <Btn>
                    <button>글수정</button>
                    <button>글삭제</button>
                </Btn>
            </PhotoBox>

            {/* 댓글, 댓글남기기 */}
            <CommentsBox>
                <strong>comments</strong>
                <div className='comments'>
                    {comment_list.map((c, idx) => {
                        return (
                            <div className='profile'
                                key={idx}>

                                {/* <p>{id}</p> */}
                                <text>{c.comment}</text>
                            </div>
                        );
                    })}
                </div>
                <input ref={comment_ref} placeholder="댓글을 입력하세요" ></input>
                <button onClick={callSomethingAxios}>댓글작성</button>

            </CommentsBox>
        </>
    )
};

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
flex-direction: column;
border: 1px solid #dee2e6;
 height: 300px;;
 padding-top: 10px;
 padding-bottom: 20px;
 padding-left: 7px;
 overflow-y: auto; 

.profile {
display:flex;
height: 50px;
padding-top: 10px;
padding-left: 7px;
overflow-y: auto; 

text {
padding-top: 10px;
padding-left: 7px;
}

`;

const Btn = styled.div`
margin-top: 50px;
`;

export default DetailBox;
