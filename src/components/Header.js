import Brand from "./Brand";
import NavBar from "./NavBar";
import "./styles/Header.scss";

export default function Header(props) {
    return (
        <header className="Header" role="banner">
            <Brand />
            <NavBar />
        </header>
    );
}
