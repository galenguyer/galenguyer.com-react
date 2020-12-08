import "./styles/Footer.scss";

export default function Footer() {
    return (
        <div class="Footer">
            <a class="Card" href="https://github.com/galenguyer">
                <span>
                    <i class="fab fa-github"></i> <span class="val">galenguyer</span>
                </span>
            </a>
            <a class="Card" href="mailto:galen@galenguyer.com">
                <span>
                    <i class="fas fa-envelope"></i> <span class="val">galen@galenguyer.com</span>
                </span>
            </a>
            <a class="Card" href="https://linkedin.com/in/galenguyer">
                <span>
                    <i class="fab fa-linkedin"></i> <span class="val">galenguyer</span>
                </span>
            </a>
            <div style={{ width: "100%", textAlign: "center", display: "block" }}>
                <div class="Copy">
                    &copy; 2020 Galen Guyer (
                    <a href="https://github.com/galenguyer/galenguyer.github.io">
                        <i class="fab fa-github"></i> Source)
                    </a>
                </div>
            </div>
        </div>
    );
}
