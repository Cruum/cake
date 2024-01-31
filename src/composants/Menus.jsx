import Article from "./Article";
import styled from "styled-components"
import { theme } from "./../theme"

export default function Menus() {

    return (
        <MenuStyle>
            <Article />
        </MenuStyle>

    )
}
const MenuStyle = styled.div`
display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 18%);
    gap: 2rem 5rem;
    padding: 50px 50px 150px;
    justify-content: space-around;
    grid-row-gap: 60px;
    overflow-y: scroll;
    flex: 1;
`