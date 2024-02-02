import Profile from "../Porfile";
import ToggleAdmin from "./ToggleAdmin";
import styled from "styled-components"
import { theme } from "../../theme"

export default function AdminRegroup() {

    return (
        <AdminStyle>
            <ToggleAdmin />
            <Profile />
        </AdminStyle>

    )
}

const AdminStyle = styled.div`
display: flex;
    gap: 1rem;
    `