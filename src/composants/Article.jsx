import { fakeMenu } from "../services/fakeMenu.js";
import styled from "styled-components"
import { theme } from "./../theme"
import { formatPrice } from "../utils/maths.js";
import { useAdminContext } from "../OrderPage.jsx";
import { MenuContext } from "./Main.jsx";
import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import ArticleShow from "./ArticleShow.jsx";

const EmptyMenuMessage = () => {
    const { admin } = useAdminContext();

    return (
        <div>
            {!admin ? (
                <div>
                    Victime de notre succès
                    <p>De nouvelles recettes sont en préparation, revenez vite!</p>
                </div>
            ) : (
                <div>
                    Il n'y a plus de produits disponibles?
                    <p>Cliquez ci-dessous pour les réinitialiser</p>
                    <button> Générer de nouveaux produits</button>
                </div>
            )}
        </div>
    );
};



export default function Article() {
    const { menu, setMenu } = useContext(MenuContext);

    return (
        <>
            {!menu || menu.length === 0 ? (
                <EmptyMenuMessage />
            ) : (
                menu.map((menuItem) => (
                    <ArticleShow key={menuItem.id} menuItem={menuItem} />
                  ))
            )}



        </>
    );
}
