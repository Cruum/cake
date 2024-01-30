import Navbar from "./Navbar";
import styled from "styled-components"
import { theme } from "./../theme"

export default function Main() {

    return (
        <ContainerStyle>
            <Navbar />
        </ContainerStyle>
    )
}



const ContainerStyle = styled.div`
background-color: ${theme.colors.white};
height: 100%;
border-radius: ${theme.borderRadius.extraRound};
box-shadow: inset 0px -1px 20px 3px rgb(0 0 0 / 34%);
`