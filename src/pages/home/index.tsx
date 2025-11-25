import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Home = () => {
    return (
         <div className='app-wrapper px-[24px] lg:px-[126px]'>
            <div className="bg-background ">
                <Navbar />
                <p className="text-primary text-5xl font-bold font-mono">
                    Vishu
                </p>
                <Footer />
            </div>
        </div>
    )
}

export default Home