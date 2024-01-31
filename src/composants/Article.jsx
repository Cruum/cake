import { fakeMenu } from "../services/fakeMenu.js";
import styled from "styled-components"
import { theme } from "./../theme"
import { formatPrice } from "../utils/maths.js";

export default function Article() {

    return (
        <>
            {fakeMenu.map((menu) => (
                <ArticleStyle key={menu.id}>
                    <img src="../../../src/assets/cupcake-item.png" alt="" />
                    <div>
                        <h3>{menu.title}</h3>
                        <BottomArticleStyle>
                            <p>{formatPrice (menu.price)}</p>
                            <ButtonStyle>Ajouter</ButtonStyle>
                        </BottomArticleStyle>
                    </div>
                </ArticleStyle>
            ))}
        </>
    );
}

const ArticleStyle = styled.div`

box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
border-radius: 15px;
padding: 1rem;
img{
    width: 100%;
}
h3{
    font-family: pacifico;
    padding-left: 0.5rem;
    font-weight: 400;
}
`

const ButtonStyle = styled.button`

border: 1px solid ${theme.colors.primary};
border-radius: ${theme.borderRadius.round};
width: 50%;
aspect-ratio: 1/0.5;
max-height: 40px;
text-align: center;
background-color: ${theme.colors.primary};  
color: ${theme.colors.white};

cursor: pointer;

`;

const BottomArticleStyle = styled.div`
display: flex;
    justify-content: space-around;
    align-items: center;
    p{
    color: ${theme.colors.primary};
}
    `