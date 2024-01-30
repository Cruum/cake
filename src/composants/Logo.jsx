import styled, { css } from 'styled-components'
import { theme } from "../theme"
import {  Navigate } from "react-router-dom"
export default function Logo() {
    const reloadPage = () => {
        window.location.reload();
      };
    return (

        <Logos>
        <h1 onClick={reloadPage}> Cake <img src="../../../src/assets/cupcake.png" alt="" /> Nest </h1>
        </Logos>
    )
}

const Logos = styled.div` 
    h1{
        font-size: ${theme.fonts.size.P3};
        color: ${theme.colors.primary};
        text-transform: uppercase;
        cursor: pointer;
    }
    img{
        width: ${theme.fonts.size.P4};
    }
`