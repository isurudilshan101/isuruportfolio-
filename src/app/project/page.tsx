import ProjectCard from "../components/project/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description:
        "This is the movie application which is basically showing each movies related to the popularity, year wise ect, also we can search what ever we need and if you have an account you can create a wish list if you want. In there you can delete, view each movies.",
      image: "/project1.png",
      technologies: ["React", "Tailwind Css"],
      githubLink: "https://github.com/username/project1",
      liveLink: "https://project1.com",
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
    <div className="container mx-auto p-8 ">
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
