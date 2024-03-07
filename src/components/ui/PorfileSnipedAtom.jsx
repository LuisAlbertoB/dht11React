//Importar Librerias
import React from "react";
import styled from "styled-components";

//Estilos
const MainContainer = styled.div`
width: 28%;
height: auto;
`;

const SnippetMain = styled.div`
width: 340px;
height: 268px;

display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;

background-color: #D9D9D9;
border-radius: 10px;
`;

const BannerImg = styled.div`
width: 340px;
height: 125px;

/* background-image: url(${props => props.imgBannerSource}); */
background-image: url('/asets/banner.jpeg');
background-size: cover;
background-repeat: no-repeat;
background-position: center center;

border-radius: 10px 10px 0 0;
`;

const PorfilePhoto = styled.img`
width: 60px;
height: 60px;

border-radius: 100%;
`;

const PorfileInfo = styled.div`
width: 240px;
height: 141px;

display: flex;

border: 1px solid;
`;

function PorfileSnippet({ imgBannerSource }) {

    return ( 
        <MainContainer>
            <SnippetMain>
                <BannerImg />

                <PorfilePhoto src="/asets/porfile-photo.jpg" />
                <PorfileInfo>
                    <p>.</p>
                </PorfileInfo>
            </SnippetMain>
        </MainContainer>
     );
}

export default PorfileSnippet;