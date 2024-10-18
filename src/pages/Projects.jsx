import { useQuery, gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      name
      description
    }
  }
`;

function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {data.projects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
