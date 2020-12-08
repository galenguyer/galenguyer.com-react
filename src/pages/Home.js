import "./styles/Home.scss";

export default function Home() {
    return (
        <div className="WhoAmI">
            <span className="Description">
                2018 Microsoft Office Security, 2019 Microsoft One Customer Voice Intern.
                <br />
                Software Engineering Student at the Rochester Institute of Technology.
                <br />
                Full Stack Developer, Systems Administrator, and DevOps Engineer.
            </span>

            <div className="Links">
                <a href="https://github.com/galenguyer" className="ProfileButton">
                    Github
                </a>
                <a href="https://cdn.galenguyer.com/doc/Galen-Guyer-Resume-latest.pdf" className="ProfileButton">
                    Resume
                </a>
            </div>
        </div>
    );
}
