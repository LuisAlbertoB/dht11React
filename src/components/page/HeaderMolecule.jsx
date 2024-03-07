//Importar libreria
import React from "react";
import styled from "styled-components";

//Importar componentes
import Logo from "../ui/LogoAtom";
import SearchInput from "../ui/SearchInputAtom";
import IconButton from "../ui/ IconButtonAtom";

//Estilos
const HeaderContainer = styled.div`
  width: 100%;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #D9D9D9;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 4px;
  margin: 4px;
`;

function Header( ) {
  
  //Control de información
  const data = {
  input1Text: 'Buscar...',  

  button1Text: 'Inicio',
  button2Text: 'Grupos',
  button3Text: 'Articulos',
  button4Text: 'Comunicados',
  button5Text: 'Mi perfil',
  button6ImgSource: "/asets/settings.png",
  };

    return (
        <HeaderContainer>
            <MenuContainer>
                <Logo />
                <SearchInput txt={data.input1Text} />
                <IconButton children={data.button1Text} />
                <IconButton children={data.button2Text} />
                <IconButton children={data.button3Text} />
                <IconButton children={data.button4Text} />
            </MenuContainer>

            <MenuContainer>
                <IconButton children={data.button5Text} />
                <IconButton icon={data.button6ImgSource} />
            </MenuContainer>
        </HeaderContainer>
    );
}

export default Header;