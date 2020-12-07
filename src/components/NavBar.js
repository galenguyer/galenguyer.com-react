import { Link } from "react-router-dom";
import "./styles/NavBar.scss";

export default function NavBar(props) {
    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
    );
}
