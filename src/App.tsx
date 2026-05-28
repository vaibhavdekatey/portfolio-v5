import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./Landing/Hero";
import Landing from "./Landing/Landing";
import Projects from "./Landing/Projects";
import About from "./Landing/About";
import Experience from "./Experience";
import StackedCards from "./components/StackedCards";
import NewExp from "./newExp";

function App() {
  return (
    <>
      <div className="bg-[#0f0f0f] flex flex-col flex-1 h-full max-w-[100vw]  overflow-x-hidden">
        <Navbar />
        <Landing />
        {/* <NewExp /> */}
        <Hero />
        {/* <StackedCards /> */}
        <Projects />
        <Experience />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
