import styled from "styled-components"
import { theme } from "../../theme"
import { GiCupcake } from "react-icons/gi";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { useContext, useState } from "react";
import { MenuContext } from "../Main";

export default function AddProduct() {
    const { menu, setMenu } = useContext(MenuContext);
    const [price, setPrice] = useState('');

    const [productName, setProductName] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productPrice, setProductPrice] = useState('');


    const [successMessage, setSuccessMessage] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'nameProduct') {
            setProductName(value);
        } else if (name === 'imgProduct') {
            setProductImage(value);
        } else if (name === 'priceProduct') {
            if (/^\d+(\.\d{0,2})?$/.test(value) || value === '') {
                setProductPrice(value);
              }
        }
    }



    const handleAddProduct = () => {

        const newProduct = {
            id: Date(), 
            title: productName,
            image: productImage,
            price: parseFloat(productPrice), 
        };

      
        setMenu([...menu, newProduct]);

       
        setProductName('');
        setProductImage('');
        setProductPrice('');
        console.log(menu);

        setSuccessMessage(true);

        setTimeout(() => {
            setSuccessMessage(false);
        }, 2000);
    }




    return (
        <AddStyleDiv>
            <img />
            <FormAddStyleDiv onSubmit={handleAddProduct}>

                <WrapperInputStyled>
                    <input type="text"
                        name="nameProduct"
                        id="nameProduct" 
                        value={productName}
                        onChange={handleInputChange}
                        placeholder="Nom de produit" />
                    {<GiCupcake />}
                </WrapperInputStyled>


                <WrapperInputStyled>
                    <input type="text" 
                    name="imgProduct" 
                    id="imgProduct" 
                    value={productImage}
                    onChange={handleInputChange}
                    placeholder="Lienb URL d'une image (ex: https://la-photo-de-mon-produit.png)" />
                    <BsFillCameraFill />
                </WrapperInputStyled>


                <WrapperInputStyled>
                    <input type="text" 
                    name="priceProduct" 
                    id="priceProduct" 
                    value={productPrice}
                    onChange={handleInputChange} 
                     placeholder="Price" />
                    <MdOutlineEuro />
                </WrapperInputStyled>
                <button > Ajouter un nouveau produit</button>
            </FormAddStyleDiv>

            {successMessage && (
                <SuccessMessage>Ajouté avec succès !</SuccessMessage>
            )}
        </AddStyleDiv>
    )
}

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
button{
        border-radius: ${theme.borderRadius.round};
        max-width: 200px;
        height: 20%;
        color: ${theme.colors.white};
        background-color: #48dc48;
        border: 1px solid  #48dc48;
  border-radius: ${theme.borderRadius.round};
    }
    /* svg{
        position: absolute;
  left: 10%;
  color: ${theme.colors.greyMedium};
  top: 18%;
    } */
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