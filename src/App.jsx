import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
