import ProjectCard from "../components/project/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Cargo web site",
      description:
        "Effortlessly manage your cargo logistics with our responsive website, accessible from any device. Streamline operations and enhance efficiency with our user-friendly interface.",
      image: "/projects_img/cargoproject.png",
      technologies: ["React", "Tailwind Css"],
      githubLink: "https://github.com/username/project1",
      liveLink: "https://cargohub.netlify.app/",
    },
    {
      title: "Simple ToDo APP",
      description:
        "Efficiently manage tasks with ease through our intuitive interface, enabling seamless addition, deletion, and completion tracking for enhanced productivity.",
      image: "/projects_img/todoproject.png",
      technologies: ["React Js", "TypeScript", "Tailwind Css", "Ant Design"],
      githubLink: "https://github.com/username/project2",
      liveLink: "https://easytasker.netlify.app/",
    },
    {
      title: "Project 2",
      description:
        "Efficiently manage tasks with ease through our intuitive interface, enabling seamless addition, deletion, and completion tracking for enhanced productivity.",
      image: "/projects_img/todoproject.png",
      technologies: ["React Js", "TypeScript", "Tailwind Css"],
      githubLink: "https://github.com/username/project2",
      liveLink: "https://project2.com",
    },
  ];

  return (
    <div className="container mx-auto   p-8 ">
      <h1 className="text-4xl font-bold text-left mb-8">Projects</h1>
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
