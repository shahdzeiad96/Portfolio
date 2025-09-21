import "./Skills.css";
function Skills() {
  const frontend = [
    { name: "React", level: "50%" },
    { name: "TypeScript", level: "65%" },
    { name: "JavaScript", level: "90%" },
    { name: "HTML/CSS", level: "95%" },
    { name: "Tailwind CSS", level: "90%" },
    { name: "Next.js", level: "40%" },
  ];

  const tools = [
    { name: "Git/GitHub", level: "75%" },
    { name: "Figma", level: "70%" },
    { name: "Ionic", level: "80%" },
    { name: "Django", level: "85%" },
    { name: "Flask", level: "75%" },
    { name: "Node.js", level: "70%" },
  ];

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <div key={index} className="skill">
        <div className="skill-header">
          <h4>{skill.name}</h4>
          <span>{skill.level}</span>
        </div>
        <div className="skill-bar">
          <div className="skill-progress" style={{ width: skill.level }}></div>
        </div>
      </div>
    ));

  return (
    <div className="skills-section">
      <h1>Skills & Technologies</h1>
      <h3>Here are the technologies and tools I use to bring ideas to life</h3>
      <section className="skills">
        <div className="skills-group">
          <h2>Frontend Technologies</h2>
          {renderSkills(frontend)}
        </div>

        <div className="skills-group">
          <h2>Tools & Frameworks</h2>
          {renderSkills(tools)}
        </div>
      </section>
      <section className="working">
        <h2>Currently Learning:</h2>
        <p>I'm always expanding my skillset. Currently diving deeper into:</p>
        <div className="new-skills">
          <p className="new-skill">Laravel</p>
          <p className="new-skill">MERN</p>
        </div>
      </section>
    </div>
  );
}

export default Skills;
