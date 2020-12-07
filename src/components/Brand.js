import './Brand.scss';

export default function Brand(props) {
    return (
        <div className="Brand">
            <h1 class="Name">
                <a href={window.location.pathname === "/" ? "" : "/"}>Galen Guyer</a>
            </h1>
            <span className="Description">Full-Stack Software Engineer</span>
        </div>
    );
}
