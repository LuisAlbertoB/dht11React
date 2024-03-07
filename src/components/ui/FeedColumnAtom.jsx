import React from "react";
import styled from "styled-components";

import CreatePost from "./CreatePostAtom";
import FilterFeed from "./FilterFeedAtom";
import FeedBox from "../page/FeedBoxMolecule";

const MainContainer = styled.div`
width: 44%;
height: auto;

display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
`;

function FeedColumnAtom() {
    return ( 
        <MainContainer>
            <CreatePost />
            <FilterFeed />
            <FeedBox />
        </MainContainer>
     );
}

export default FeedColumnAtom;