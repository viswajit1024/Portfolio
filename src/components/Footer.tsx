import { AiFillGithub, AiFillLinkedin} from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-background">
            <div className="mt-8 socials flex flex-row gap-8">
                <a href="" target="_blank">
                    <AiFillGithub size={40} className="text-secondary hover:text-secondaryLight cursor-pointer" onClick={() => window.open('https://github.com/viswajit1024')} />
                </a>
                <a href="" target="_blank">
                    <AiFillLinkedin size={40} className="text-secondary hover:text-secondaryLight cursor-pointer" onClick={() => window.open('https://in.linkedin.com/in/viswajit-kumar-singh-769785249')} />
                </a>
            </div>
            <div className="contact-me mt-6">
                <h1 className="getintouch text-secondary font-mono text-2xl font-semibold">
                    Get in touch at <a href="mailto:vishwajeetkumarsingh1024@gmail.com" className="hover:text-secondaryLight">vishwajeetkumarsingh1024@gmail.com</a>
                </h1>
            </div>
            <div className="separator">
                <hr className="border-primary w-[100%] my-8" />
            </div>
            <div className="navigation-items text-primary flex flex-col md:flex-row items-center justify-center gap-6">
                <a href="/" className="nav-item hover:text-accent hover:font-semibold">HOME</a>
                <a href="/about" className="nav-item hover:text-accent hover:font-semibold ">ABOUT</a>
                <a href="link to resume" className="nav-item hover:text-accent hover:font-semibold">RESUME</a>
            </div>
        </footer>
    );
}

export default Footer;