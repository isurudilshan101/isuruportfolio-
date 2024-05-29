import Image from "next/image";
import { FaGithub, FaEye } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="border border-white rounded-lg mb-8 md:h-72">
      <div className="flex flex-col md:flex-row items-center ">
        <div className="w-full ml-2 md:w-1/2 h-full">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <div className="h-36">
              <p className="text-white mb-4 ">{project.description}</p>{" "}
            </div>

            <div className="flex flex-wrap mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-500 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-900"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-900"
            >
              <FaEye className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
