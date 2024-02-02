import styled from "styled-components"
import { theme } from "./../theme"
import { formatPrice } from "../utils/maths.js";
import { useAdminContext } from "../OrderPage.jsx";
import { AdminMethod, MenuContext, SelectedModify } from "./Main.jsx";
import { useContext } from "react";
import { TiDelete } from "react-icons/ti";


export default function ArticleShow({menuItem}){
    const {menu, setMenu } = useContext(MenuContext);
    const { admin } = useAdminContext();
    const {adminMethod, setAdminMethod} = useContext(AdminMethod);
    const {selectedModify, setSelectedModify} = useContext(SelectedModify)


    const handleDelete = () => {
        console.log(menu);
        // const menuCopy = [...menu];
        const menuCopyUpdate = menu.filter((item) => item.id !== menuItem.id);
        setMenu(menuCopyUpdate);
      };
    
      const handleOnclickModify = (e) => {
        console.log(e.target);
        console.log(e.target.name);
        console.log(e.target.value);
        if (e.target.tagName.toLowerCase() === 'svg') {
          handleDelete();
          return;


        } else {
          setAdminMethod('modify');
          setSelectedModify(true)
        }
      }


      const ArticleStyle = styled.div`

      box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
      border-radius: 15px;
      padding: 1rem;
      position: relative;
      img{
          width: 100%;
      }
      h3{
          font-family: pacifico;
          padding-left: 0.5rem;
          font-weight: 400;
      }
      svg{
          font-size: x-large;
          float: inline-end;
      }
      &:hover{ 
        background-color:  ${admin ? theme.colors.primary : "white"};
        
      }
      &:hover p{ 
        color:  ${admin ? "white" : theme.colors.primary};
        
      }
      &:hover button{ 
        color:  ${admin ?  theme.colors.primary : "white"};
        background-color:  ${admin ? "white" : theme.colors.primary};
      }
      `
      
      return (
        <ArticleStyle onClick={handleOnclickModify}>
          {admin ? <TiDelete /> : " "}
          <img src="../../../src/assets/cupcake-item.png" alt="" />
          <div>
            <h3>{menuItem.title}</h3>
            <BottomArticleStyle>
              <p>{formatPrice(menuItem.price)}</p>
              <ButtonStyle>Ajouter</ButtonStyle>
            </BottomArticleStyle>
          </div>
        </ArticleStyle>
      );
}




const BottomArticleStyle = styled.div`
display: flex;
    justify-content: space-around;
    align-items: center;
    p{
    color: ${theme.colors.primary};
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