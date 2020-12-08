import "./styles/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <div className="Footer">
            <a className="Card" href="https://github.com/galenguyer">
                <span>
                    <FontAwesomeIcon icon={faGithub} /> <span className="val">galenguyer</span>
                </span>
            </a>
            <a className="Card" href="mailto:galen@galenguyer.com">
                <span>
                    <FontAwesomeIcon icon={faEnvelope} /> <span className="val">galen@galenguyer.com</span>
                </span>
            </a>
            <a className="Card" href="https://linkedin.com/in/galenguyer">
                <span>
                    <FontAwesomeIcon icon={faLinkedin} /> <span className="val">galenguyer</span>
                </span>
            </a>
            <div style={{ width: "100%", textAlign: "center", display: "block" }}>
                <div className="Copy">
                    &copy; 2020 Galen Guyer (
                    <a href="https://github.com/galenguyer/galenguyer.github.io">
                        <FontAwesomeIcon icon={faGithub} /> Source)
                    </a>
                </div>
            </div>
        </div>
    );
}
