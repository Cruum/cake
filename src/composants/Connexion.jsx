import { useState } from "react"

export default function Connexion({name, setName}) {


    const handleClickName =  (event) => {
        event.preventDefault()
        alert("Bonjour " + name)
        setName("")
    }

    const handleChangeName = (event) =>{
        if(event.target.name == "name") setName(event.target.value);
           }


    return (
        <div>
            <h2>Connectez-vous</h2>
            <form action="" onSubmit={ handleClickName }>

                <input type="text" placeholder="Entrez votre prénom..." name="name" value={name} onChange = {handleChangeName} required/>

                <button> Accédez à votre espace </button>

            </form>
        </div>
    )
}