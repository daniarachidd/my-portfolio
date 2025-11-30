'use client'
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/cv/Dania_Rachid_CV.pdf' // file in public folder
    link.download = 'Dania_Rachid_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
    return (
        <section id="home">
            <div className="mx-auto text-center md:text-left max-w-5xl w-full px-5 sm:px-10 py-5 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between rounded-2xl bg-white/10">
                {/* Left Column */}
                <div className="flex-1 max-w-xl items-center justify-between mx-auto">
                    <div className="pb-6">
                        <h1 className="text-5xl md:text-6xl text-gradient font-bold"> Hi, I'm Dania </h1>


                        <h2 className="text-indigo-400 text-2xl md:text-4xl font-bold font-mono text-gradient">
                            <Typewriter
                                words={['React Developer', 'Flutter Developer']}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </h2>




                    </div>

                    <p className="text-base text-neutral-300 font-mono font-light leading-relaxed bg-white/10 rounded-xl max-w-xl p-4">
                        I build modern mobile and web applications with clean UI and strong performance.
                        I started with Flutter and expanded into React, and I enjoy building smooth,
                        practical digital experiences.
                    </p>
                    <button className="bg-linear-to-r from-indigo-500 to-orange-800 via-purple-500 p-3 px-5 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg uppercase font-mono font-bold my-4 text-neutral-300"
                    // onClick={handleDownload}
                    >
                         <Link href="/cv/Dania_Rachid_CV.pdf" download> 
                            Download Resume
                        </Link>
                    </button>
                </div>
                {/* Right Column */}


                {/* option 2: code snippet with animation using motion frame */}
                <div className="hidden md:flex flex-1 justify-end items-end">
                    <div className="w-64 h-64 bg-linear-to-br from-indigo-500 via-purple-500 to-pink-400 rounded-3xl animate-blob opacity-70 shadow-xl"></div>
                </div>


            </div>
        </section>
    );
}
export default Hero;