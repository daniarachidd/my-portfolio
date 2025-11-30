import LineBreak from "../LineBreak";
import SkillCard from "../SkillCard";
import skills from "@/app/data/skills.json"
const Skills = () => {


    return (
        <section id="skills" className="max-w-5xl px-10 mx-auto my-20">
            <div className="mb-12">
                <h2 className="text-3xl text-neutral-100 font-bold mb-2 text-center md:text-left ">Technical Skills</h2>
                <LineBreak />
            </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>

        </section>
    );
}
export default Skills;