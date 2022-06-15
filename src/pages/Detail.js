//상세 페이지
import React,{useState} from 'react'
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';

//components
import Header2 from '../components/Header2';
import DetailBox from '../components/DetailBox';

import { useSelector, useDispatch } from "react-redux";
import { Container } from '@mui/material';
// import { actionCreators as comActions } from "../redux/modules/comment";
// import { actionCreators as postActions } from "../redux/modules/post";

function Detail(props) {

    const dispatch = useDispatch();
    const token = localStorage.getItem("token")

    const [product, setProduct] = useState(['애플','삼성','LG']);
    const [content, setContent] = useState(['Apple','Samsung','LG']);

    return (
        <>
            <Header2 />
            <DetailPage>
                <DetailBlock>
                 <DetailBox product={product}
                 content={content}
                 setProduct={setProduct}
                 setContent={setContent} />  
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

export default Detail;
