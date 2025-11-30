"use client";
import {useState} from 'react';
import {HiMenu, HiX} from 'react-icons/hi'
const AppHeader = () => {
      const [open, setOpen] = useState(false);
      const [active, setActive] = useState('#home')
    const links = [
      {name: "Home", href:"#home"},
    {name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Professional Journey", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];
    
    return <nav className="fixed top-0 left-0 w-full shadow-sm z-50 bg-[#17161a]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto md:mx-0 px-6 py-4 flex flex-row items-center justify-between md:justify-center gap-4 md:gap-12">

          {/* Name */}
            <h1 className="text-2xl font-bold text-fuchsia-700 mx-6 text-gradient"> Dania Rachid </h1>

          {/* Desktop Links */}
            <ul className="hidden md:flex space-x-8 font-medium font-mono text-gray-200">
                {links.map((link) => (
                    <li key={link.name}>
                        <a href={link.href} onClick={() => {setActive(link.href)}} 
                        className={` ${active === link.href ? "bg-white/10 text-neutral-200" : ""} rounded-md  font-mono  active:bg-white/10 active:text-neutral-200 hover:bg-white/10 hover:text-neutral-200 transition-all py-2 px-3`}>
                            {link.name}
                        </a>
                    </li>
                ))}

            </ul>

            {/* Mobile Menu Icon */} 
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
        </div>

         {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden  font-mono  shadow-md px-6 py-4 space-y-4 text-neutral-200 ">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-lg active:text-indigo-600"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
}
export default AppHeader;