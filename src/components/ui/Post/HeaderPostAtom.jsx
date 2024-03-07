import React from "react";
import styled from "styled-components";

import IconButton from "../ IconButtonAtom";

//Estilos
const MainContainer = styled.div`
width: 99%;
height: auto;

display: flex;
align-items: flex-start;
justify-content: space-between;
flex-wrap: nowrap;

position: relative;
margin: 0 auto;
`;

const Frame1 = styled.div`
width: 160px;

display: flex;
align-items: flex-start;
flex-wrap: nowrap;
flex-shrink: 0;
gap: 15px;

position: relative;
`;

const Frame2 = styled.div`
width: 160px;

display: flex;
align-items: center;
flex-wrap: nowrap;
flex-shrink: 0;
gap: 10px;

position: relative;
z-index: 1;
`;

const PorfileIcon = styled.img`
width: 36px;

flex-shrink: 0;
position: relative;
height: 36px;
z-index: 2;
border-radius: 50%;
`;

const Frame3 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
flex-wrap: nowrap;
flex-shrink: 0;
gap: 3px;

position: relative;
z-index: 3;
`;

const UserName = styled.h4`margin: 0`;

const DatePost = styled.p`margin: 0`;

function HeaderPost({ porfileIcon, userName, date }) {
    return ( 
        <MainContainer>
        <Frame1>
            <Frame2>
                <PorfileIcon src={porfileIcon} />
                <Frame3>
                    <UserName>{userName}</UserName>
                    <DatePost>{date}</DatePost>
                </Frame3>
            </Frame2>
        </Frame1>
        <IconButton icon={"/asets/more_horiz.png"} />
    </MainContainer>
     );
}

export default HeaderPost;