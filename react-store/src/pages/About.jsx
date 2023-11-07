import { Link } from "react-router-dom";

export function About() {
    return (
        <>
            <h1>About us Page</h1>
            <h2>At Gym Supplements Store it is  our goal to provide every customer with the highest quality supplements to support your athletic endeavors!</h2>
            <h2>We were founded in 2017 and blah blah blah</h2>
            <h2>Enjoy all the products and be sure to contact us with any questions!</h2>
            <Link to="/Contact">
                <button>
                    Contact Us
                </button>
            </Link>
        </>
    )
}