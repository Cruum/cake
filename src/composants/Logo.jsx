import styled, { css } from 'styled-components'
import { theme } from "../theme"

export default function Logo() {

    return (
        <Logos>
        <h1>Cake <img src="../../../src/assets/cupcake.png" alt="" /> Nest</h1>
        </Logos>
    )
}

const Logos = styled.div` 
h1{
        font-size: ${theme.fonts.size.P5};
        color: ${theme.colors.primary};
        text-transform: uppercase;
    }
    img{
        width: ${theme.fonts.size.P4};
    }
`