import Footer from "./Footer";
import Navbar from "./components/Navbar";
import Hero from "./Hero";
import Landing from "./Landing";
import Projects from "./Projects";
import About from "./About";
import Experience from "./Experience";

function App() {
  return (
    <>
      <div className="bg-[#0f0f0f] flex flex-col flex-1 h-full overflow-x-hidden">
        <Navbar />
        <Landing />
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
