import { AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-background my-8">
            <div className="socials flex flex-row gap-8">
                <a href="" title="Github" target="_blank">
                    <AiFillGithub size={40} className="text-secondary hover:text-secondaryLight cursor-pointer" onClick={() => window.open('https://github.com/viswajit1024')} />
                </a>
                <a href="" title="LinkedIn"target="_blank">
                    <AiFillLinkedin size={40} className="text-secondary hover:text-secondaryLight cursor-pointer" onClick={() => window.open('https://in.linkedin.com/in/viswajit-kumar-singh-769785249')} />
                </a>
            </div>
            <div className="contact-me mt-6">
                <h1 className="getintouch text-secondary font-mono text-2xl font-semibold">
                    Get in touch at <a style={{color: "#2563eb", textDecoration: "underline"}} title="email me" href="mailto:vishwajeetkumarsingh1024@gmail.com" className="hover:text-secondaryLight">Gmail Account</a>
                </h1>
            </div>
            <div className="separator">
                <hr className="border-primary w-[100%] my-8" />
            </div>
            <div className="navigation-items text-primary flex flex-col md:flex-row items-center justify-center gap-6">
                <Link to="/" className="nav-item hover:text-accent hover:font-semibold">HOME</Link>
                <Link to="/about" className="nav-item hover:text-accent hover:font-semibold ">ABOUT</Link>
                <Link to="/projects" className="nav-item hover:text-accent hover:font-semibold">PROJECTS</Link>
                <a href="link to resume" className="nav-item hover:text-accent hover:font-semibold">RESUME</a>
            </div>
        </footer>
    );
}

export default Footer;