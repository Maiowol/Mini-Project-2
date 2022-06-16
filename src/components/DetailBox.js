import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function DetailBox(props) {
    const navigate = useNavigate()
    const [comment_list, setCommentList] = React.useState([]);
    const [nickname, setNickname] = React.useState([]);
    const comment_ref = useRef();
    const token = localStorage.getItem("token")

    // useEffect(() => {
    //     Commentview();
    //   }, []);

    // 게시물 삭제
    const postDelete = () => {
        axios.delete("http://dlckdals04.shop/" + props.state.existsposts[0].postId,
            {
                headers: { 'Authorization': `Bearer ${token}` }
            }).then(function (response) {
                console.log(response)
                alert("삭제가 완료됐습니다!")
                navigate('/')
            }).catch(function (error) {
                alert("본인이 작성한 게시물만 삭제할 수 있습니다.")
                console.log(error.response.data.errorMessage)
                console.log(error)
            })
    }

    //댓글 입력
    const callSomethingAxios = () => {
        axios.post("http://dlckdals04.shop/" + props.postId, {
            // http://dlckdals04.shop/" +postId
            "comment": comment_ref.current.value,
        }, { headers: { 'Authorization': `Bearer ${token}` }, }
        ).then(function (response) {
            console.log('댓글 입력이 완료되었습니다!')
            console.log(response)
            const comment_data = {
                comment: response.data.targetpost.comment,
                nickname: response.data.targetpost.nickname
            }

            setCommentList([...comment_list, comment_data]);

            comment_ref.current.value = "";
            console.log(response)
        })
            .catch(function (error) {
                alert("로그인 후 이용 가능한 기능입니다.");
                console.log(error);
                console.log(error.response.data.errorMessage)
            })
    }

    const Commentview = () => {
        axios.get("http://dlckdals04.shop/" + props.postId).then(function (response) {
            setCommentList([...response.data]);
            setNickname([...response.data]);
        }
        ).catch(function (error) {
            console.log(error);
            console.log(error.response.data.errorMessage)
        })
    }

    //게시물 수정
    const insert_btn = async () => {
        let product = prompt('수정할 제품을 입력해주세요!')
        let content = prompt('수정할 내용을 입력해주세요!')
        let put_comment = {
            'product': product,
            'content': content,

        };

        await axios
            .put("http://dlckdals04.shop/" + props.state.existsposts[0].postId, put_comment, {
                headers: { 'Authorization': `Bearer ${token}` },
            }).then((res) => {
                alert('수정이 성공되었습니다.')
                window.location.reload()
            }).catch((err) => {
                alert(err.response.data.message)
                window.location.reload()
            })

    }

    return (
        <>
            <PhotoBox>
                {/* 유저닉네임, 제품명, 작성한 내용 */}
                <div className='id_title'>

                    <strong>ID: {props.state.existsposts &&
                        props.state.existsposts.map((posts, index) => posts.nickname)}</strong>
                </div>

                <div className='profile'>
                    <img src=
                        {props.state.existsposts &&
                            props.state.existsposts.map((posts, index) =>
                                posts.image
                            )} />
                </div>

                <div className='product'>
                    <div className='product_title'
                    >제품명: </div>
                    <div className='product_content'
                    ><strong>{props.state.existsposts &&
                        props.state.existsposts.map((posts, index) =>
                            posts.product
                        )}</strong></div></div>

                <div className='content'>
                    <div className='content_title'
                    >자세한 내용: </div>
                    <div className='content_content'
                    ><strong>{props.state.existsposts &&
                        props.state.existsposts.map((posts, index) =>
                            posts.content
                        )}</strong></div></div>
                <div>
                    <Button onClick={insert_btn} variant="outlined"
                    >글수정</Button>
                    <Button onClick={postDelete} variant="outlined"
                    >글삭제</Button>
                </div>
            </PhotoBox>

            {/* 댓글, 댓글남기기 */}

            <CommentsBox>
                <strong>comments</strong>
                <div className='comments_'>
                    <div className='comments__'>
                        {comment_list.map((c, idx) => {
                            return (
                                <div className='profile'
                                    key={idx}>
                                    <strong>{c.nickname}</strong>
                                    <text>{c.comment}</text>
                                </div>
                            );
                        })}
                    </div>
                </div>
                    <input ref={comment_ref} />
                <Button onClick={callSomethingAxios} variant="outlined"
                >댓글작성</Button>
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
border-radius: 20px;

strong {
    margin-top: 10px;
    margin-bottom: 10px;
}

.product {
 margin-top: 10px;
 margin-bottom: 30px;
}

.product_title {
    color: gray;
    margin-bottom: 4px;
    font-family: 'OTWelcomeRA';
}

.product_content {
    font-family: 'OTWelcomeRA';
}

.content_title{
    color: gray;
    margin-bottom: 4px;
    font-family: 'OTWelcomeRA';
}

.content_content{
   
    margin-bottom: 20px;
}

.id_title{
display: flex; 
}

img {
    height: 250px;
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
border-radius: 20px;
background-color: 	#f0f8ff;

strong{
    margin-top: 10px;
    margin-bottom: 10px;
}

.comments_ {
display: flex;
flex-direction: column;
border: 2.5px solid white;
 height: 345px;;
 padding-top: 5px;
 padding-bottom: 20px;
 padding-left: 7px;
 overflow-y: auto; 

.profile {
display:flex;
padding-left: 7px;
overflow-y: auto;

strong {
 font-weigth: bolder;
 padding-left: 7px;
 padding-top: 15px;
}

text {
margin-top: 27px;
margin-left: 10px;
font-size: 14px;
}

.comment__btn {
    position: relative;
    top: 20px;
}

input {
    width: 10px;
    outline:none;
    border:none;
 
}

`;


export default DetailBox;
