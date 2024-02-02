import Navbar from "./layout/Navbar";
import styled from "styled-components"
import { theme } from "./../theme"
import Menus from "./menus";
import Onglets from "./admin/Onglets";
import { createContext, useContext, useState } from "react";
import { useAdminContext } from "../OrderPage";

export const MenuContext = createContext([]);
export const AdminMethod = createContext('');
export const SelectedModify = createContext({ selectedModify: false, setSelectedModify: () => {} });

export default function Main() {
    const [adminMethod, setAdminMethod] = useState('add')
    const  [selectedModify, setSelectedModify ] = useState(false);
    const { admin, toggleAdmin } = useAdminContext();
    const [menu, setMenu] = useState([])


    return (
        <MenuContext.Provider value={{ menu, setMenu }}>
            <AdminMethod.Provider value={{ adminMethod, setAdminMethod }}>
                <SelectedModify.Provider value={{ selectedModify, setSelectedModify }} >
                    <ContainerStyle>
                        <Navbar admin={admin} setAdmin={toggleAdmin} />
                        <Menus />
                        {admin ? <Onglets adminMethod={adminMethod} setAdminMethod={setAdminMethod} /> : " "}
                    </ContainerStyle>
                </SelectedModify.Provider>
            </AdminMethod.Provider>
        </MenuContext.Provider>
    )
}



const ContainerStyle = styled.div`
background-color: ${theme.colors.white};
height: 100%;
border-radius: ${theme.borderRadius.extraRound};
box-shadow: inset 0px -1px 20px 3px rgb(0 0 0 / 34%);
display: flex;
    flex-direction: column;
`