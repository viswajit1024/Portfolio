import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import hack from '../../assets/Spacehack.webp';//certs like grid and iit
import evm from '../../assets/uba.webp';//management side like uba society

const AboutMe = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 mt-4 md:mt-8 lg:mt-0 md:gap-20 items-center'>
            <div className="about-text font-sans lg:tracking-wide text-left text-primary">
                <h1 className="text-3xl font-normal font-mono mb-5">
                    About Me
                </h1>
                <p className='text-xl !leading-loose mb-2 md:mb-5'>
                    <span className='font-bold'>TLDR; </span>I'm a dynamic and enthusiastic young engineer, driven by a passion
                    for innovation at the intersection of <span className='font-bold'>intuitive design, scalable and sustainable engineering </span>, and the application
                    of <span className='font-bold'>AI</span> to address real-world challenges.
                </p>
                <p className='text-xl !leading-loose mb-2 md:mb-5'>
                    I enjoy developing and participating in collaborative projects. Participating in the <span className='font-bold'>SpaceHacks at IIIT Delhi In Place</span> was a particularly rewarding experience.                
                </p>
                <p className='text-xl !leading-loose mb-5'>
                    My mission is to make a significant impact by creating strategic solutions that push boundaries and benefit communities. 🏘️
                </p>
            </div>
            <div className="img-container flex lg:h-screen items-center justify-end">
                <img src={hack} alt="hackathon cert" className='object-scale-down max-h-full md:py-10' />
            </div>
        </div >
    )
}
const AboutMe2 = () => {
    return (
        <div className='grid md:grid-cols-2 mt-10 lg:mt-0 grid-cols-1 md:gap-20 items-center'>
            <div className="about-text font-sans lg:tracking-wide text-left text-primary md:order-last">
                <p className='text-xl !leading-loose mb-5'>
                    I strengthened my technical foundation by earning multiple <span className='italic font-bold'>AWS Educate certifications</span>, building solid skills in cloud fundamentals and modern IT tools.
                </p>
                <p className='text-xl !leading-loose mb-5'>
                    Alongside this, I contributed to community initiatives through <span className='italic font-bold'>UBA and NSS</span>, where I handled event management responsibilities. I helped organise impactful activities such as a <span className='italic font-bold'>World Earth Day plantation drive</span> and a <span className='italic font-bold'>cloth donation camp for underprivileged children</span>, gaining hands-on experience in coordination, teamwork, and social service.
                </p>
                 <p className='text-xl !leading-loose mb-5'>
                    You can check my aws certifications and badges <a style={{ color: "#2563eb", textDecoration: "underline" }} href="https://www.credly.com/users/viswajit-kumar-singh" target="_blank" rel="noopener noreferrer">here</a>.
                </p>
                <p className='text-xl !leading-loose mb-5'>
                    You can checkout my blog website too.
                </p>
            </div>
            <div className="img-container flex items-center justify-start">
                <img src={evm} alt="uba evm certificate" className='object-scale-down max-h-full md:py-10' />
            </div>
        </div >
    )
}


const About = () => {
    return (
        <div className='app-wrapper px-[24px] lg:px-[126px]'>
            <div className="bg-background ">
                <Navbar />
                <AboutMe />
                <AboutMe2 />
                <Footer />
            </div>
        </div>
    )
}

export default About