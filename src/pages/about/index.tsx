import Navbar from '../../components/Navbar';

const About = () => {
    return (
        <div className='app-wrapper px-[24px] lg:px-[126px]'>
            <div className="bg-background ">
                <Navbar />
                <p className="text-primary text-5xl font-bold font-mono">
                    About
                </p>
            </div>
        </div>
    )
}

export default About