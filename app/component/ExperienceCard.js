
const ExperienceCard = ({experience}) => {
    return (
        <div className="flex flex-col mb-20 gap-2">
            <h1 className="text-2xl font-bold"> {experience.company} </h1>
            <h2 className="text-indigo-400 font-bold text-xl text-gradient"> {experience.role}</h2>
            <p className="text-neutral-400"> {experience.time} </p>
            <p className="text-lg font-semibold"> {experience.description }</p>
            
            <ul className="ml-8 space-y-2">
                
            {experience.tasks.map((task) => {
                return <li className="relative pl-6 text-md" key={task}> 
                <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-indigo-500 "></span>
      {task}
                 </li>
            })}
            </ul>
            

        </div>
    )

}
export default ExperienceCard;