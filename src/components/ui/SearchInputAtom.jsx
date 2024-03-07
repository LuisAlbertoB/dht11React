import React from "react";
import styled from "styled-components";

const Input = styled.input`
width: 334px;
height: 41px;
`;

function SearchInput({ txt }) {
    return ( 
        <Input type="text" placeholder={txt}></Input>
     );
}

export default SearchInput;