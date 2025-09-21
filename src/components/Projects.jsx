import "./project.css";
import budgexapp from "../assets/budgex.png";
import github from "../assets/github-noborders.png";
import sawaed from "../assets/sawaed.png";
import momsweather from "../assets/momsweather.png";
function Projects() {
  return (
    <div className="projects" id="Projects" >
      <h1>Featured Projects:</h1>
      <h3 className="projects-desc">
        Here are some of my recent projects that showcase my skills and passion
        for development
      </h3>
      <section className="projects">
        <div className="projects-grid">
          <div className="card project-card">
            <img src={budgexapp} alt="code" className="project-thumbnail" />
            <div className="card-body">
              <h3 className="project-title">Budgex App</h3>
              <p className="project-info">
                It's a financial app used to control your expenses and
                transformations
              </p>
              <a href="https://github.com/shahdzeiad96/Moms-Weather" className="repo-btn">
                Code <img src={github} alt="code" className="github-icon" />
              </a>
              <p className="skill-used">Html/css</p>
              <p className="skill-used">JavaScript</p>
              <p className="skill-used">Django</p>
              <p className="skill-used">MySql</p>
              <p className="skill-used">Tailwind Css</p>
            </div>
          </div>
          <div className="card project-card">
            <img
              src={momsweather}
              alt="momsweather"
              className="project-thumbnail"
            />
            <div className="card-body">
              <h3 className="project-title">Moms Weather</h3>
              <p className="project-info">
                A weather forecast web application designed for mothers, helping
                them choose suitable clothing for their children based on the
                weather.
              </p>
              <a href="https://github.com/shahdzeiad96/Moms-Weather" className="repo-btn">
                Code <img src={github} alt="code" className="github-icon" />
              </a>
              <p className="skill-used">Html/css</p>
              <p className="skill-used">JavaScript</p>
              <p className="skill-used">Github pages</p>
            </div>
          </div>
          <div className="card project-card">
            <img src={sawaed} alt="" className="project-thumbnail" />

            <div className="card-body">
              <h3 className="project-title">Sawaed - سواعد</h3>
              <p className="project-info">
                A Palestinian platform that connects handymen with customers,
                enabling them to showcase their services and get hired easily.
              </p>
              <a href="https://github.com/shahdzeiad96/Sawa-ed" className="repo-btn">
                Code <img src={github} alt="" className="github-icon" />
              </a>
              <p className="skill-used">Html/css</p>
              <p className="skill-used">Django</p>
              <p className="skill-used">MySql</p>
              <p className="skill-used">AWS</p>
              <p className="skill-used">Bootsrap</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Projects;
