import React from "react";
import styled from "styled-components";

const ButtonMain = styled.button`
width: auto;
height: 41px;

display: flex;
align-items: center;
justify-content: center;
`;

const IconMain = styled.img`
margin: auto;
padding: auto;
`;

function IconButton({ icon, children }) {
    return ( 
        <ButtonMain>
            <IconMain src={icon} />
            <p>{children}</p>
        </ButtonMain>
     );
}

export default IconButton;