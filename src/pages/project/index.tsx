import { Link } from "react-router-dom";
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import stock from '../../assets/Signalist.webp';
import resumind from '../../assets/ResumeAnalyser.webp';
import bolt from '../../assets/Bolt.webp';
import codesync from '../../assets/CodeSync.webp';
import payu from '../../assets/payu.webp';
import payu2 from '../../assets/PayU2.webp';
import typetest from '../../assets/typingtest.webp';

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  demo?: string;
  repo?: string;
  image?: string;
};

const projects: Project[] = [
  {
    id: "1",
    title: "Signalist",
    description:
      "Signalist — a Full-Stack PWA for AI-driven stock analysis and portfolio tracking. It provides real-time charts, watchlists, price alerts and company insights to support better trading decisions.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN", "MongoDB"],
    demo: "https://stock-sentinel-pi.vercel.app",
    repo: "https://github.com/viswajit1024/Stock-Sentinel",
    image: stock,
  },
  {
    id: "2",
    title: "Resumind",
    description:
      "Resumind — an AI-powered resume analyzer that scores CVs, identifies skill gaps and suggests improvements to boost ATS compatibility and recruiter appeal.",
    tech: ["React-router", "TypeScript", "Tailwind CSS", "Node.js", "Express"],
    repo: "https://github.com/viswajit1024/AI-Resume-Analyser",
    demo: "https://ai-resume-analyser-dun-eta.vercel.app/",
    image: resumind,
  },
 {
    id: "3",
    title: "Typing Test",
    description:
      "A responsive typing speed testing website, measures WPM, Speed, Errors, and Accuracy as well as comes with difficulty selection",
    tech: ["Vite", "TypeScript", "Tailwind CSS","Express","React.js"],
    repo: "https://github.com/viswajit1024/Typing-Test",
    image: typetest,
  },
  {
    id: "4",
    title: "Bolt",
    description:
      "A responsive website builder, Where you can generate a folder with code with just a prompt",
    tech: ["React.js", "TypeScript", "Tailwind CSS","Webcontainer API","Axios","Monaco Editor","Anthropic AI SDK"],
    //demo: "https://example.com",
    repo: "https://github.com/viswajit1024/Boltdev",
    image: bolt,
  },
  /*{
    id: "5",
    title: "Ai image generator",
    description:
      "A Next.js showcasing projects",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://example.com",
    repo: "https://github.com/yourname/portfolio",
    image: stock,
  },*/
  {
    id: "6",
    title: "PayU",
    description:
      "A responsive payment website with dashboard, transaction, and login functionalities where the authentication is done by jwt and the input validation is done by zod",
    tech: ["React.js", "PostCSS", "Tailwind CSS", "Express.js"],
    repo: "https://github.com/viswajit1024/PayU",
    image: payu,
  },
  {
    id: "7",
    title: "PayU Ver2",
    description:
      "The second version of PayU website with additional functionaliies of merchant and user as well as webhook implementation demonstrating the simulation of the real banking website",
    tech: ["Next.js", "Tailwind CSS"],
    repo: "https://github.com/viswajit1024/PayU-version-2",
    image: payu2,
  },
  {
    id: "8",
    title: "Code Sync",
    description:
      "A responsive code editor, with multiuser and realtime execution functionalities",
    tech: ["React.js", "TypeScript", "Tailwind CSS","Websockets","Prism.js"],
    repo: "https://github.com/viswajit1024/Code-Sync",
    image: codesync,
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      {project.image && (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full rounded-md mb-4 object-cover"
        />
      )}
      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-700 mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs bg-gray-100 px-2 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-3 py-2 rounded text-sm"
          >
            Live demo
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 px-3 py-2 rounded text-sm text-gray-900"
          >
            Repo
          </a>
        )}
      </div>
    </article>
  );
};

const ProjectsPage = () => {
  return (
    <>
      <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8 max-w-[1100px] mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl text-primary sm:text-3xl font-mono mb-4">Projects</h1>
          <p className="text-primary">Selected work, experiments and open source.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4 mt-10">
          <nav>
            <Link to="/">
              <a className="text-blue-600 underline">← Back to home</a>
            </Link>
          </nav>
          <nav>
            <a
              href="https://github.com/viswajit1024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              See all projects on GitHub
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <div className="app-wrapper px-4 lg:px-32 bg-background">
      <Navbar />
      <ProjectsPage />
      <Footer />
    </div>
  );
};

export default Projects;
