import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
import { theme } from "../../theme";
import { useAdminContext } from "../../OrderPage";

export default function ToggleAdmin() {
    const { admin, toggleAdmin } = useAdminContext();
    return (
        <Switch
            isOn={admin}
            handleToggle={() => 
                 {if (!admin) {
                    toast.info('🦄 Mode Admin Actif', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
        
                toggleAdmin(!admin); 
                       }}
        />
    );
}
const Switch = ({ isOn, handleToggle }) => {

    const LabelToggleStyle = styled.label`
         display: flex;
         align-items: center;
         justify-content: center;
         cursor: pointer;
         width: 180px;
         height: 35px;
         background: ${isOn ? theme.colors.white : theme.colors.background_dark};
         border-radius: 100px;
         position: relative;
         transition: background-color .2s;
         color: #67b6b9;
         font-size: 8px;
      border: 1px solid;
    `
    
    return (
        <>
            <InputToggleStyle
                admin={isOn}
                onChange={handleToggle}
                className="switch-checkbox"
                text="Activer le mode admin"
                id={`switch`}
                type="checkbox"
            />
            <LabelToggleStyle
                className="switch-label"
                htmlFor={`switch`}
            >
                {isOn ? "DÉSACTIVER LE MODE ADMIN" : "ACTIVER LE MODE ADMIN"}
                <SpanToggleStyle className={`switch-button`} />
            </LabelToggleStyle>
            
        </>
    );
};

const InputToggleStyle = styled.input`
height: 0;
width: 0;
visibility: hidden;
`
  
  
const SpanToggleStyle = styled.span`

content: '';
     position: absolute;
     left: 3px;
     width: 25px;
     height: 25px;
     border-radius: 45px;
     transition: 0.2s;
     background: #67b6b9;
     box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`