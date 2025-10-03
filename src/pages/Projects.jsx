import ProjectCard from '../components/ProjectCard.jsx';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="section projects">
      <div className="section__header">
        <h2>Projects</h2>
        <p>Una selezione di progetti curati con amore per i dettagli e focus sulle persone.</p>
      </div>
      <div className="projects__grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
