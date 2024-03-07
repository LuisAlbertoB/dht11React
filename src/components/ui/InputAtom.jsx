import React from "react";
import styled from "styled-components";

const MainInput = styled.input`
width: 80%;
height: 41px;`;

function Input({ inputTxt }) {
    return ( 
        <MainInput type="text" placeholder={inputTxt} />
     );
}

export default Input;