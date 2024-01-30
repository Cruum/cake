import Navbar from "./composants/Navbar";
import styled from "styled-components"
import { theme } from "./theme"
import Main from "./composants/Main";

export default function OrderPage() {


    return (

        < BodyStyle >
                <Main />
        </BodyStyle >
    )
}
const BodyStyle = styled.div`
background-color: ${theme.colors.primary};
height: 92vh;
padding: 2rem;
`