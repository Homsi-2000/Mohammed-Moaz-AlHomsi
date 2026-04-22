import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="p-8 text-white max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="text-gray-400 mb-6">{project.role} • {project.sector}</p>

      <h2 className="text-xl font-semibold mt-6">Overview</h2>
      <p className="mt-2 text-gray-300">{project.overview}</p>

      <h2 className="text-xl font-semibold mt-6">What I Did</h2>
      <ul className="list-disc ml-6 mt-2">
        {project.actions.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6">Outputs</h2>
      <ul className="list-disc ml-6 mt-2">
        {project.outputs.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6">Results</h2>
      <ul className="list-disc ml-6 mt-2">
        {project.results.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}