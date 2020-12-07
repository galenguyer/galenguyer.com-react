import Brand from "./Brand";
import NavBar from "./NavBar";
import './Header.scss';

export default function Header(props) {
    return (
        <header class="Header" role="banner">
            <Brand />
            <NavBar />
        </header>
    );
}
