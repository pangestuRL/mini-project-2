import HeroSection from "../../components/hero";
import Navbar from "../../components/navbar";
import Services from "../../components/service";
import TestiCard from "../../components/testiCard";

function Home () {
    
    return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Services/>
        <TestiCard/>
    </div>
    );
}

export default Home;