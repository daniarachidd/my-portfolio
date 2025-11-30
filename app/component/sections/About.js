'use client'
import LineBreak from "../LineBreak";
import RotatingQuoteCard from "../RotatingQuoteCard";
import StackedQuoteCards from "../StackedQuoteCards";
const About = () => {
    return (
        <section id="about" className="max-w-5xl px-10 mx-auto my-20">
            <div className="mb-12">
                <h2 className="text-3xl text-neutral-100 font-bold mb-2 text-center md:text-left ">About Me</h2>
                <LineBreak />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-12">
            
                {/* Left Text */}
                <div className="flex-1 max-w-xl p-2">
                    
                    <p className="text-lg md:text-xl text-center md:text-left text-neutral-300 font-light font-mono leading-relaxed mb-4">
                        I'm a developer who started with Flutter and naturally grew into React and web development.
                        I like building apps that feel simple for users, even if the logic behind them is complex.
                    </p>

                    <p className="text-lg md:text-xl text-center md:text-left text-neutral-300 font-light font-mono leading-relaxed mb-4">
                        Most of my experience comes from real work—internships, production apps, and maintaining
                        features used by actual customers. I'm practical, fast-learning, and I enjoy solving
                        real problems.
                    </p>

                    <p className="text-lg md:text-xl text-center md:text-left text-neutral-300 font-light font-mono leading-relaxed">
                        I'm currently looking for a role where I can grow as a full-stack product builder
                        and contribute to meaningful projects.
                    </p>
                </div>

                {/* Right Visual */}
                {/* <div className="flex-1 flex justify-center">
                    <div className="bg-black/40 border border-white/10 rounded-xl p-5 w-72 font-mono text-md md:text-lg shadow-lg">
                        <p className="text-green-400 ">const developer = "Dania";</p>
                        <p className="text-blue-400">function build() {"{"}</p>
                        <p className="ml-4 text-neutral-200">return "clean UI & clean logic";</p>
                        <p className="text-blue-400">{"}"}</p>
                    </div>
                </div> */}

                <div className="flex-1 flex justify-center">
    <StackedQuoteCards />
</div>
            </div>
        </section>
    )
}
export default About;