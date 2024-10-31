// projects.jsx
import { useQuery, gql } from "@apollo/client";
import ProjectCard from "../components/ProjectCard";

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      name
      description
      imageUrl
    }
  }
`;

function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My Portfolio Highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {data.projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
