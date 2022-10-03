import ProjectList from "../components/ProjectList";
import { getProjects } from "../utils/wordpress";

export default function Projects({ projects }) {
  const jsxProjects = projects.map((project) => {
    let projectData = project.acm_fields;
    return <ProjectList project={projectData} key={project.id} />;
  });
  return (
    <div className="flex flex-col mt-10 layout">
      <h1 className="text-4xl pb-1">Projects</h1>
      <div className="h-1 w-auto bg-gradient-to-r from-teal-300 to-teal-50"></div>
      <div className="flex md:flex-row justify-evenly flex-wrap">
        {jsxProjects}
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
    revalidate: 10,
  };
}
