
import DevTeam from "./components/Dev Team/DevTeam";
import { FAQ } from "./components/Faq/Faq";
import { Footer } from "./components/Footer/Footer";
import Hero from "./components/HeroSection/Hero";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import Home from "./components/Home/Home";
import Events from "./components/Events/EventsList";
import Time from "./components/Timer/Time";


function App() {


  return (
    <>
      <CustomNavbar/>
      <Home />
      <Hero/>
      <Events />
      <Time />
      <DevTeam/>
      <FAQ/>
      <Footer/>
    </>
  );
}

export default App
