//Importar librerias
import React from "react";
import styled from "styled-components";

//styles
const FilteringContainer = styled.div`
width: 99%;
height: 40px;

display: flex;
align-items: center;
justify-content: flex-end;
gap: 1%;

padding-right: 1%;
`;

const FilterLabel = styled.label`
color: #929292;
font-size: 14px;
`;

const FilterButton = styled.button`
width: 140px;
height: 20px;

border-radius: 25%;
`;

function FilterFeed() {
    return ( 
       <FilteringContainer>
            <FilterLabel>Filtrar por</FilterLabel>
            <FilterButton />
            <FilterButton />
       </FilteringContainer> 
     );
}

export default FilterFeed;