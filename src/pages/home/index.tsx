import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import hero from '../../assets/hero2.png';


const Hero = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row w-full justify-between md:items-center h-fit'>
            <div className="hero-bio md:mr-12 mt-12 md:mt-0 md:py-24 flex flex-col justify-center h-full w-full md:w-2/3">
                <h1 className="text-primary text-3xl md:text-6xl tracking-wider font-bold !leading-tight font-mono mb-5">
                    Hi, I'm Viswajit Kumar Singh
                </h1>
                <p className='text-primary text-xl md:text-2xl !leading-8 md:tracking-wide font-sans !text-left mb-5 pr-2'>
                    Software Developer with a solid foundation in building interactive and scalable web applications. Skilled in React, Node.js, Express, and MongoDB . Committed to delivering high-quality code.
                </p>
            </div>
            <div className="hero-image w-32 h-auto md:w-52 md:h-72 left-0 overflow-clip align-middle md:mb-0">
                <img className='rounded-t-[150px]' src={hero} alt="Hero Image" />
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <div className='app-wrapper px-[24px] lg:px-[126px]'>
            <div className="bg-background ">
                <Navbar />
                <Hero />
                <Footer />
            </div>
        </div>
    )
}

export default Home;