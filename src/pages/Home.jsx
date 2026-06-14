import Navbar from "../components/Navbar";
import Hero from "../components/Hero"; 
import Footer from "../components/Footer";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
function Home(){
    return(
        <>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        </>
    )
}

export default Home;