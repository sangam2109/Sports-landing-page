import EventList from "./components/Events/EventPage";
import { FAQ } from "./components/Faq/Faq";
import { Footer } from "./components/Footer/Footer";
import Hero from "./components/HeroSection/Hero";
import CustomNavbar from "./components/Navbar/CustomNavbar";


function App() {


  return (
    <>
      <CustomNavbar/>
      <Hero/>
      <EventList gender={"Male"}/>
      <FAQ/>
      <Footer/>
    </>
  );
}

export default App
