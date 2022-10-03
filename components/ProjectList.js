// /components/ProjectList.js
import Link from "next/link";
import { getDate, removeHTMLTags } from "../utils/utils";
import ProjectCategories from "./ProjectCategories";

export default function ProjectList({ project }) {
  const jsxCategories = project.projectCategories.map((category, index) => {
    return <ProjectCategories category={category} key={index} />;
  });

  return (
    <div className="max-w-sm md:mx-2 rounded overflow-hidden shadow-lg mt-5 bg-white">
      <img
        className="w-full h-48 object-cover bg-white"
        src={project.projectImage.source_url}
        alt={project.projectImage.alt_text}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-teal-900 text-xl mb-2">
          <p>
            {project.projectStatus[0] === "completed" ? (
              <span className="text-green-400 bg-zinc-900 px-3">Completed</span>
            ) : (
              <span className="text-rose-500 bg-zinc-900 px-3">
                In Progress
              </span>
            )}
          </p>
          <p>{project.projectName}</p>
        </div>
        <p className="text-zinc-700 text-base">
          {removeHTMLTags(project.projectDescription)}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p>{jsxCategories} </p>
      </div>
    </div>
  );
}
