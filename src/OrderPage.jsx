import Navbar from "./composants/layout/Navbar";
import styled from "styled-components"
import { theme } from "./theme"
import Main from "./composants/Main";
import { useState } from "react";

export default function OrderPage() {
    const [admin, setAdmin] = useState(false);
    
    return (

        < BodyStyle >
                <Main admin={admin} setAdmin={setAdmin}/>
        </BodyStyle >
    )
}
const BodyStyle = styled.div`
background-color: ${theme.colors.primary};
height: 92vh;
padding: 2rem;
`