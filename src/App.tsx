import EventList from "./components/Events/EventPage";
import { Footer } from "./components/Footer/Footer";
import Hero from "./components/HeroSection/Hero";
import CustomNavbar from "./components/Navbar/CustomNavbar";


function App() {


  return (
    <>
      <CustomNavbar/>
      <Hero/>
      <EventList gender={"Male"}/>
      <Footer/>
    </>
  );
}

export default App
