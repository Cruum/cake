import Navbar from "./composants/layout/Navbar";
import styled from "styled-components"
import { theme } from "./theme"
import Main from "./composants/Main";
import { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export const useAdminContext = () => {
  return useContext(AdminContext);
};

const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(false);
  
    const toggleAdmin = () => {
      setAdmin((prevAdmin) => !prevAdmin);
    };
  
    return (
      <AdminContext.Provider value={{ admin, toggleAdmin }}>
        {children}
      </AdminContext.Provider>
    );
  };

  export default function OrderPage() {
    return (
      <AdminProvider>
        <BodyStyle>
          <Main />
        </BodyStyle>
      </AdminProvider>
    );
  }




const BodyStyle = styled.div`
background-color: ${theme.colors.primary};
height: 92vh;
padding: 2rem;
`