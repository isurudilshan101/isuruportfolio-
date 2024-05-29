import ProjectCard from "../components/project/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Cargo web site",
      description: "This is web site for cargo. Responsive web site",
      image: "/projects_img/cargoproject.png",
      technologies: ["React", "Tailwind Css"],
      githubLink: "https://github.com/username/project1",
      liveLink: "https://cargohub.netlify.app/",
    },
    {
      title: "Project 2",
      description:
        "This is the movie application which is basically showing each movies related to the popularity, ",
      image: "/project1.png",
      technologies: ["Tech 3", "Tech 4"],
      githubLink: "https://github.com/username/project2",
      liveLink: "https://project2.com",
    },
    // Add more projects as needed
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
