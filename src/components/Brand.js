import { Link } from "react-router-dom";
import "./styles/Brand.scss";

export default function Brand(props) {
    return (
        <div className="Brand">
            <h1 className="Name">
                <Link to="/">Galen Guyer</Link>
            </h1>
            <span className="Description">Full-Stack Software Engineer</span>
        </div>
    );
}
