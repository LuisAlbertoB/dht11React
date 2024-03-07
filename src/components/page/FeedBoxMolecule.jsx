//Importar librerias
import React from "react";
import styled from "styled-components";

//Importar componentes
import Post from "./PostAtom";

//Estilos
const MainContainer = styled.div`
width: 100%;
height: auto;
`;

function FeedBox() {

//Data
const data = {
    IconUserSource: '/asets/porfile-photo.jpg',
    UserName: 'Luis Alberto Batalla González',
    Date: '03/06/24',

    PostContentText: 'lorem impus lorem impus lorem impus lorem impus lorem impus',
    PostContentImgSource: '/asets/Rectangle 24.png'
}

    return ( 
        <MainContainer>
            <Post porfileIcon={data.IconUserSource} 
                    userName={data.UserName} 
                    date={data.Date} 
                    postTxtContent={data.PostContentText} 
                    postImgContent={data.PostContentImgSource} />
        </MainContainer>
     );
}

export default FeedBox;