import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
const Footer = () => {
    return (
        <footer className="py-10 border-t border-white/10 mt-20">
      <div className="max-w-5xl mx-auto px-10 flex flex-col items-center gap-6">

        <p className="text-lg font-semibold text-white text-center">
          Dania Rachid — React & Flutter Developer
        </p>

        <div className="flex gap-6 text-neutral-400">
          <a href="https://github.com/your-profile" target="_blank">
            <FiGithub className="text-xl hover:text-indigo-500 transition" />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank">
            <FiLinkedin className="text-xl hover:text-indigo-500 transition" />
          </a>
          <a href="mailto:your@mail.com">
            <FiMail className="text-xl hover:text-indigo-500 transition" />
          </a>
        </div>

        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Dania Rachid. Built with Next.js & Tailwind.
        </p>

      </div>
    </footer>
    );
}
export default Footer;