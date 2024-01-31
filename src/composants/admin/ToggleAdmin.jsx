import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ToggleAdmin({admin , setAdmin}) {

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
        
            setAdmin(!admin); 
                       }}
            colorOne="#fff"
            colorTwo="#292729"
            colorThree="#67b6b9"
        />
    );
}
const Switch = ({ isOn, handleToggle, colorOne, colorTwo, colorThree }) => {
    return (
        <>
            <input
                admin={isOn}
                onChange={handleToggle}
                className="switch-checkbox"
                text="Activer le mode admin"
                id={`switch`}
                type="checkbox"
            />
            <label
                style={{
                        background: isOn ? colorOne : colorTwo,
                        // color:isOn? colorOne : colorThree 
                    }}

                className="switch-label"
                htmlFor={`switch`}
            >
                {isOn ? "DÉSACTIVER LE MODE ADMIN" : "ACTIVER LE MODE ADMIN"}
                <span className={`switch-button`} />
            </label>
            
        </>
    );
};



