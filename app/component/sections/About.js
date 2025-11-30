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
                        I started my journey with Flutter and naturally moved into React and web development. I enjoy building apps that feel simple for users, even when the logic behind them is complex.
                    </p>

                    <p className="text-lg md:text-xl text-center md:text-left text-neutral-300 font-light font-mono leading-relaxed mb-4">
                        Most of my experience comes from hands-on work—internships, production apps, and maintaining features that real people use every day. I learn fast, think practically, and enjoy solving real-world problems.
                    </p>

                    <p className="text-lg md:text-xl text-center md:text-left text-neutral-300 font-light font-mono leading-relaxed">
                        I’m passionate about creating products that combine clean design with efficient functionality, and I enjoy exploring new technologies to make development more effective.
                    </p>
                </div>


                <div className="flex-1 flex justify-center">
                    <StackedQuoteCards />
                </div>
            </div>
        </section>
    )
}
export default About;