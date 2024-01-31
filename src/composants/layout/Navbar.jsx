import Logo from "../Logo";
import Profile from "../Porfile";
import styled from "styled-components"
import { theme } from "../../theme"
import AdminRegroup from "../admin/AdminRegroup";

export default function Navbar({admin , setAdmin}) {

    return (
        <Nav>
            <Logo />
        <AdminRegroup admin={admin} setAdmin={setAdmin}/>
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2vw;
    box-shadow: -1px 13px 8px 0px rgb(0 0 0 / 34%);
    `