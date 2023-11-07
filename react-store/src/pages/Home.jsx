import { Link } from "react-router-dom";
import gymImage from "../../public/gym-equip.jpg"

export function Home() {
    return (
        <>
            <h1>Welcome to Gym Supplement Store</h1>
            <img src={gymImage}/>
            <Link to="/Products">
                <button>
                    View All products
                </button>
            </Link>
        </>
    )
}