import LineBreak from "../LineBreak";
import ProjectCard from "../ProjectCard";
import projects from "@/app/data/projects.json"
const Projects = () => {
    

    return (
        <section id="projects" className="max-w-5xl px-10 mx-auto my-20">
            <div className="mb-12">
                <h2 className="text-3xl text-neutral-100 font-bold mb-2 text-center md:text-left">Projects</h2>
                <LineBreak />
            </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

        </section>
    );
}
export default Projects;