import styled from "styled-components"
import { theme } from "../../theme"
import { SelectedModify } from "../Main.jsx"
import { useContext, useEffect, useState } from "react"
import { GiCupcake } from "react-icons/gi";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";


export default function ModifyProduct(){
    const {selectedModify, setSelectedModify} = useContext(SelectedModify)
    
    const [formData, setFormData] = useState({
        nameProduct: "",
        imgProduct: "",
        priceProduct: "",
      });
    
    //   useEffect(() => {
    //     if (selectedModify) {
    //       // Mettez à jour le formulaire avec les informations du produit sélectionné
    //       setFormData({
    //         nameProduct: selectedModify.title,
    //         imgProduct: selectedModify.image,
    //         priceProduct: selectedModify.price.toString(),
    //       });
    //     }
    //   }, [selectedModify]);

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      


    return (
        <>
          {selectedModify ? (
                       <AddStyleDiv>
                       <img src="Aucun image" alt="Aucun image" />
                       <FormAddStyleDiv>
                         <WrapperInputStyled>
                           <input
                             type="text"
                             name="nameProduct"
                             id="nameProductModify"
                             value={formData.nameProduct}
                             onChange={handleInputChange}
                             placeholder="Nom de produit"
                           />
                           {<GiCupcake />}
                         </WrapperInputStyled>
             
                         <WrapperInputStyled>
                           <input
                             type="text"
                             name="imgProductModify"
                             id="imgProduct"
                             value={formData.imgProduct}
                             onChange={handleInputChange}
                             placeholder="Lienb URL d'une image (ex: https://la-photo-de-mon-produit.png)"
                           />
                           <BsFillCameraFill />
                         </WrapperInputStyled>
             
                         <WrapperInputStyled>
                           <input
                             type="text"
                             name="priceProductModify"
                             id="priceProduct"
                             value={formData.priceProduct}
                             onChange={handleInputChange}
                             placeholder="Price"
                           />
                           <MdOutlineEuro />
                         </WrapperInputStyled>

                       </FormAddStyleDiv>
                     </AddStyleDiv>
          ) : (<BottomArticleStyle>
              Cliquer sur un produit pour le modifier
            </BottomArticleStyle>

          )}
        </>
      );
    }
       


const BottomArticleStyle = styled.div`
    font-family: pacifico;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 3rem;
    font-weight: 400;
    `



const AddStyleDiv = styled.div`
display: flex;
    gap: 1rem;
    margin: 1rem 3rem;
    height: 100%;
    align-items: flex-start;
    img{
        width: 200px;
    border: black 1px dashed;
    aspect-ratio: 1/0.5;
    }
`

const FormAddStyleDiv = styled.form`
display: flex;
flex-direction: column;
    height: 100%;
    gap: 0.5rem;
    width: 100%;
    input{
        height: 30px;
        width: 100%;
        max-width: 400px;
  background-color: ${theme.colors.greyLight};
  color: ${theme.colors.greyMedium};
  border: 1px solid ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.round};
  padding: 0 3rem;
}
`
const WrapperInputStyled = styled.div`
position: relative;
svg{
    position: absolute;
  left: 3%;
  color: ${theme.colors.greyMedium};
  top: 18%;
}
`

const SuccessMessage = styled.div`
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    text-align: center;
    opacity: 0.8;
`;