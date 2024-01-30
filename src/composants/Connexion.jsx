import { useState } from "react"
import { json, useNavigate } from "react-router-dom"
import styled, { css } from 'styled-components'
import { theme } from "../theme"
import background from "../../src/assets/tarts.jpg"
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import Logo from "./Logo"

export default function Connexion() {


    const [name, setName] = useState()
    const navigate = useNavigate();

    const handleClickName = (event) => {
        event.preventDefault()
        // alert("Bonjour " + name)
        setName("")
        navigate(`/OrderPage/${name}`)
    }

    const handleChangeName = (event) => {
        if (event.target.name == "name") setName(event.target.value);
    }


    return (
        <ParentWrapper>
           <Logo/>
            <Wrapper>
                <div>
                    <h2>Bienvenue chez nous!</h2>
                </div>
                <Hr />
                <h2>Connectez-vous</h2>
                <Form action="" onSubmit={handleClickName}>
                    <WrapperInputStyled>
                    <Input type="text" placeholder="Entrez votre prénom..." name="name" value={name} onChange={handleChangeName} required />
                    {<IoPersonCircleOutline />}
                    </WrapperInputStyled>
                    <Button type="submit">Mon espace {<IoIosArrowForward />}</Button>


                </Form>
            </Wrapper>
        </ParentWrapper>
    )
}

const ParentWrapper = styled.main`
display: flex;
    justify-content: space-around;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    height: 100vh;
    background-color: antiquewhite;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${background}); 
    background-size: cover;
    background-position: center; 
    color: ${theme.colors.white};
    `

const Wrapper = styled.article`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
font-size: ${theme.fonts.size.P4};
h2{
    font-family: pacifico;
}
`
const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
width: 25%;
max-width: 400px;
min-width: 250px;
`
// .button{

// styled.input 
// ${ theme.borderRadius};
// height: 40px;

// } 
const CommonStyle = css`
border: 1px solid black;
border-radius: ${theme.borderRadius.round};
height: 50px;
text-align: center;
width: 500px;
`;


const Input = styled.input`

${CommonStyle};
border: 1px solid ${theme.colors.greyMedium};

&::before {
    content: url(${IoPersonCircleOutline}); 
    margin-right: 8px; 
  }
  `;

const Button = styled.button`
${CommonStyle};
background-color: ${theme.colors.primary};  
color: ${theme.colors.white};
font-size: ${theme.fonts.size.P1};
font-weight: ${theme.fonts.weights.regular};
cursor: pointer;
display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
`;

const Hr = styled.hr`
color: ${theme.colors.primary};
width: 100%;
padding: 0;
margin: 0;
border: 1px solid;
`

const WrapperInputStyled = styled.div `
position: relative;
svg{
    position: absolute;
  left: 10%;
  color: ${theme.colors.greyMedium};
  top: 18%;
}
`