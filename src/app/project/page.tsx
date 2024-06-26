import ProjectCard from "../components/project/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Cargo web site",
      description:
        "Effortlessly manage your cargo logistics with our responsive website, accessible from any device. Streamline operations and enhance efficiency with our user-friendly interface.",
      image: "/projects_img/cargoproject.png",
      technologies: ["React", "Tailwind Css"],
      githubLink: "https://github.com/isurudilshan101/cargoweb",
      liveLink: "https://cargohub.netlify.app/",
    },
    {
      title: "ToDo APP",
      description:
        "Efficiently manage tasks with ease through our intuitive interface, enabling seamless addition, deletion, and completion tracking for enhanced productivity.",
      image: "/projects_img/todoproject.png",
      technologies: ["React Js", "TypeScript", "Tailwind Css", "Ant Design"],
      githubLink: "https://github.com/isurudilshan101/todo-app",
      liveLink: "https://easytasker.netlify.app/",
    },
    {
      title: "AI Tech Lab Web Site",
      description:
        "Responsive website, accessible from any device. Streamline operations and enhance efficiency with our user-friendly interface.",
      image: "/projects_img/ailabproject.png",
      technologies: ["React Js", "Tailwind Css"],
      githubLink: "https://github.com/isurudilshan101/react_web_site",
      liveLink: "https://aitechlab.netlify.app/",
    },

    {
      title: "PHAMACY SYSTEM",
      description:
        "User can register and login and Upload prescriptions and admin can view uploaded prescriptions and can prepare quotations for the uploaded prescriptions.",
      image: "/projects_img/phamacproject.png",
      technologies: ["Laravel", "PHP", "Bootstrap", "MySql", "AJAX", "JQUERY"],
      githubLink: "https://github.com/isurudilshan101/pharmacy-web-app",
      liveLink: "#",
    },
    {
      title: "Wheather App",
      description:
        "Explore real-time weather information with our responsive Weather App. Simply input latitude and longitude coordinates to access accurate weather data instantly.",
      image: "/projects_img/weatherappproject.png",
      technologies: ["React Js", "API"],
      githubLink: "https://github.com/isurudilshan101/find_weather",
      liveLink: "https://climatetrackerapp.netlify.app/",
    },
    {
      title: "Currency Converter App",
      description:
        "This is the responsive currency conversion app, where you can effortlessly convert your currencies with ease. Experience seamless currency conversions today!",
      image: "/projects_img/currencyconvertapp.png",
      technologies: ["React Js", "API", "Express", "Tailwind Css"],
      githubLink: "https://github.com/isurudilshan101/currency_convert_app",
      liveLink: "https://convetcurrency.netlify.app/",
    },
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
