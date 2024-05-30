import projects from '../Developer/Projects/projects.json';
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div>
      <section>
        <h1>Dashboard</h1>
        <ul>
          <li>
            <h1>Number of projects</h1>
            <p>{projects.length}</p>
          </li>
          <li>
            <h1>Number of commercial projects</h1>
            <p>{projects.filter(project => project.status === "projects").length}</p>
          </li>
          <li>
            <h1>Number of pet projects</h1>
            <p>{projects.filter(project => project.status === "new").length}</p>
          </li>
        </ul>
      </section>
      <h1>All Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <img src={project.imgSrc} alt={project.imgAlt} />
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <button>Open</button>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
