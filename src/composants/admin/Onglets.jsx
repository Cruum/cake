import AddProduct from "./AddProduct";
import ModifyProduct from "./ModifyProduct";
import Reduce from "./Reduce";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useReducer, useState } from "react";
import styled from "styled-components"
import { theme } from "../../theme";

export default function Onglets({adminMethod, setAdminMethod}) {
    const [isReduced, setIsReduced] = useState(true);

    const toggleReduce = () => {
        setIsReduced(!isReduced);
    };

    const toggleAdmonMethod = (e) => {
        setAdminMethod(e.target.id)
    }

    const ParentStyleOnglets = styled.div`
    position: relative;
    height: ${isReduced ? "25%" : "auto"};
    `


    return (
        <ParentStyleOnglets>


            <UlStyleOnglets>
                <LiStyleOnglets>
                    {isReduced ? <FiChevronDown onClick={toggleReduce} /> : <FiChevronUp onClick={toggleReduce} />}

                </LiStyleOnglets>

                <LiStyleOnglets id="add" onClick={toggleAdmonMethod}
                 style={{
                    background: adminMethod === 'add' ? 'black' : 'white',
                    color: adminMethod === 'add' ? 'white' : 'black',
                  }} >

                    <AiOutlinePlus />
                    Ajouter un produit
                </LiStyleOnglets>

                <LiStyleOnglets id="modify" onClick={toggleAdmonMethod}  style={{
            background: adminMethod === 'modify' ? 'black' : 'white',
            color: adminMethod === 'modify' ? 'white' : 'black',
          }}>
                    <MdModeEditOutline /> Modifier un produit
                </LiStyleOnglets>



            </UlStyleOnglets>


            {isReduced ? <ParentStyleBloc> {adminMethod == "add" ? <AddProduct /> : <ModifyProduct />} </ParentStyleBloc> : " "}


        </ParentStyleOnglets>
    )
}



const UlStyleOnglets = styled.ul`
display: flex;
    position: absolute;
    top: -63px;
    left: 100px;
    list-style: none;
    gap: 1rem;
    height: 30%;
    `

const LiStyleOnglets = styled.li`
background: white;

box-shadow: ${theme.shadows.subtle};
border: 1px solid ${theme.colors.greyLight};
border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
    padding: 1re;
    height: 47px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1rem;
`

const ParentStyleBloc = styled.div`
height: 150px;
`