import { Component } from "react";
import Brand from "./Brand";
import NavBar from "./NavBar";

export default function Header(props) {
    return (
        <header class="header" role="banner">
            <Brand />
            <NavBar />
        </header>
    );
}
