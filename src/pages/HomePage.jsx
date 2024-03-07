//Importar librerias
import React from "react";
import styled from "styled-components";

//Importar componentes
import Header from "../components/page/HeaderMolecule";
import PorfileSnippet from "../components/ui/PorfileSnipedAtom";
import FeedColumnAtom from "../components/ui/FeedColumnAtom";

//Estilos
const MainContainer = styled.div`
width: 98%;
height: auto;

display: flex;
align-items: center;
flex-direction: column;
`;

const MainFrame = styled.div`
width: 100%;
height: auto;

display: flex;

padding-top: 1%;
`;


function Home() {
    return (
        <MainContainer>
            <Header />

            <MainFrame>
                {/* <PorfileSnippet imgBannerSource="/asets/banner.jpeg" /> */}
                <PorfileSnippet />
                <FeedColumnAtom />
            </MainFrame>
        </MainContainer>
     );
}

export default Home;