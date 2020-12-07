export default function Brand(props) {
    return (
        <div className="brand">
            <h1 class="name">
                <a href={window.location.pathname === "/" ? "" : "/"}>Galen Guyer</a>
            </h1>
            <span className="description">Full-Stack Software Engineer</span>
        </div>
    );
}
