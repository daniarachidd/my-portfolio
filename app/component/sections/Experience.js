import ExperienceCard from "../ExperienceCard";
import LineBreak from "../LineBreak";
import experience from "@/app/data/experience.json"
const Experience = () => {

    return (
        <section id="experience" className="max-w-5xl px-10 mx-auto my-20">
            <div className="mb-12">
                <h2 className="text-3xl text-neutral-100 font-bold mb-2 text-center md:text-left">Professional Journey </h2>
                <LineBreak />
            </div>
            <div className="">
                {experience.map((exp) => {
                    return <ExperienceCard key={exp.role} experience={exp} />
                })}


            </div>

        </section>
    );}
export default Experience;