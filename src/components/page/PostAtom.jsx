//Importar librerias
import React from "react";
import styled from "styled-components";

//Importar componentes
import HeaderPost from "../ui/Post/HeaderPostAtom";

//Estilos
const MainContainer = styled.div`
width: 100%;

display: flex;
flex-direction: column;
align-items: flex-start;
flex-wrap: nowrap;

position: relative;
margin: 0 auto;
background: #d9d9d9;
`;

function Post({ porfileIcon, userName, date, postTxtContent, postImgContent }) {
    return ( 
       <MainContainer>
        <HeaderPost porfileIcon={porfileIcon} userName={userName} date={date} />
        <label>{postTxtContent}</label>
        <img src={postImgContent} />
       </MainContainer>
     );
}

export default Post;