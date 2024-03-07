//Importar librerias
import React from "react";
import styled from "styled-components";

//Importar componentes
import Input from "./InputAtom";
import IconButtonCircle from "./IconButtonCircleAtom";
import IconButton from "./ IconButtonAtom";


//Estilos
const MainContainer = styled.div`
width: 100%;
height: 124px;

background-color: #D9D9D9;
`;

const InputContainer = styled.div`
width: auto;
height: 50%;

display: flex;
justify-content: space-around;
align-items: center;
`;

const PorfileIcon = styled.img`
width: 36px;
height: 36px;

border-radius: 100%;
`;

const ButtonsContainer = styled.div`
width: auto;
height: 50%;

display: flex;
justify-content: flex-end;
align-items: center;
gap: 1%;

padding-right: 1%;
`;

function CreatePost() {

    //Data
    const data = {
        PorfileIconSource: '/asets/porfile-photo.jpg',
        InputText: 'Crear Publicacion',
        Button1IconSource: '/asets/check_circle.png',

        Button2IconSource: '/asets/panorama.png',
        Button2Text: 'Contenido multimedia',
        
        Button3IconSource: '/asets/calendar_today.png',
        Button3Text: 'Eventos',

        Button4IconSource: '/asets/newsmode.png',
        Button4Text: 'Escribir Articulo',
    }

    return ( 
        <MainContainer>
            <InputContainer>
                <PorfileIcon src={data.PorfileIconSource} />
                <Input inputTxt={data.InputText} />
                <IconButtonCircle iconCircle={data.Button1IconSource}/>
            </InputContainer>

            <ButtonsContainer>
                <IconButton icon={data.Button2IconSource} children={data.Button2Text} />
                <IconButton icon={data.Button3IconSource} children={data.Button3Text} />
                <IconButton icon={data.Button4IconSource} children={data.Button4Text} />
            </ButtonsContainer>
        </MainContainer>
     );
}

export default CreatePost;