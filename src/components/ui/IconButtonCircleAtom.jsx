import React from "react";
import styled from "styled-components";

const ButtonMain = styled.button`
width: 32px;
height: 32px;

display: flex;
justify-content: center;
align-items: center;

border-radius: 100%;
border: none;
`;

const IconMain = styled.img`
width: 24px;
height: 24px;
`;

function IconButtonCircle({ iconCircle }) {
    return ( 
        <ButtonMain>
            <IconMain src={ iconCircle } />
        </ButtonMain>
     );
}

export default IconButtonCircle;