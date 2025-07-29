import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Landing from "./components/Landing";

function App() {
  return (
    <>
      <div className="bg-[#0f0f0f] flex flex-col flex-1 h-full ">
        <Navbar />
        <Landing />
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default App;
