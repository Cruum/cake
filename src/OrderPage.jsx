import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function OrderPage() {
    
    const { name } = useParams()
    const navigate = useNavigate();

    const handleDeco = () =>{
        navigate(`/`)
    }
    return (

        < div >
        {/* <Link to={"/"}> */}
<p>{name}</p>
            <button onClick={handleDeco}>Déconnexion</button>

        {/* </Link> */}
        </div >
    )
}