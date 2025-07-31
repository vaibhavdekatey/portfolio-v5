import Footer from "./Footer";
import Navbar from "./components/Navbar";
import Hero from "./Hero";
import Landing from "./Landing";
import Projects from "./Projects";

function App() {
  return (
    <>
      <div className="bg-[#0f0f0f] flex flex-col flex-1 h-full ">
        <Navbar />
        <Landing />
        <Hero />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
