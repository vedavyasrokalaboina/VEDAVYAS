const projectData = [
  {
    title: "Thrust Vector Control using Jet Vanes",
    desc: "Designed and analysed a thrust vector control system using simulation-driven engineering methods.",
    img: "images/thrust-vector.png", // upload and import locally
  },
  {
    title: "SAE Aero Design Aircraft",
    desc: "Technical Lead for aerodynamic and structural analysis in competitive aircraft design.",
    img: "images/sae-aero.png",
  },
  {
    title: "Business Jet Analysis",
    desc: "Designed an 8-passenger business jet with aerodynamic performance evaluation.",
    img: "images/business-jet.png",
  },
  {
    title: "Bio-Inspired BWB Aircraft",
    desc: "Optimised a blended-wing-body concept using CFD and parametric study.",
    img: "images/bwb.png",
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectData.map((project) => (
          <div key={project.title} className="project-card">
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
