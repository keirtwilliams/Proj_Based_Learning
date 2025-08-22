import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    img: "../images/myway.png",
    title: "MyWay",
    text: "Find Your Perfect IT Career Path",
    btn: "View More",
    techstack: ["React", "Tailwind", "JavaScript"],
    link: "https://github.com/keirtwilliams/My_Way",
  },
];

function Projects() {
  return (
    <section className="min-h-screen bg-gray-900 py-16 px-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        Projects
      </h1>

       {/* Divider under heading */}
        <div className="flex justify-center mb-14">
          <div className="w-24 h-1 bg-indigo-500 rounded-full"></div>
        </div>


      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            img={project.img}
            title={project.title}
            techstack={project.techstack}
            text={project.text}
            btn={project.btn}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;