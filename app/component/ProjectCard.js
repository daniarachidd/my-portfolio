import { FiExternalLink } from 'react-icons/fi';
const ProjectCard = ({ project }) => {
    return (
        <div key={project.name} className="bg-white/10 rounded-xl p-4 shadow-lg w-full ">
            <div className="rounded-lg mb-4 w-full aspect-video overflow-hidden bg-black/20">
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex justify-between">

                <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-neutral-200">
                        {project.name}
                    </h3>

                    {/* STATUS BADGE */}
                    {project.status && (
                        <span className="mt-1 text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-300 w-fit">
                            {project.status}
                        </span>
                    )}
                </div>
                {/* <h3 className="text-xl font-bold text-neutral-200">{project.name}</h3> */}

                <div className="flex gap-1">
                    {project.lang.map((lang) => (
                        <img key={lang.name} src={lang.icon} alt={lang.name} className="w-6 h-6 mb-3" />
                    ))}

                </div>
            </div>          <p className="text-neutral-400 mt-2">{project.description}</p>
            {project.link && (
                <a
                    href={project.link}
                    target="_blank"
                    className="text-indigo-400 mt-2 inline-flex items-center gap-1 hover:underline"
                >
                    <FiExternalLink className="text-fuchsia-400" /> <span className="text-gradient">View Project</span>
                </a>
            )}
        </div>
    );
}
export default ProjectCard;