import DevTeam from "./components/Dev Team/DevTeam";
import { FAQ } from "./components/Faq/Faq";
import { Footer } from "./components/Footer/Footer";
import Hero from "./components/HeroSection/Hero";
import CustomNavbar from "./components/Navbar/CustomNavbar"
import Home from "./components/Home/Home";
import Events from "./components/Events/EventsList";
import { useState } from "react";
import EventPage from "./components/Events/EventPage";

function App() {
  const [SelectedCARD, setSelectedCard] = useState();

  return (
    <>
      <CustomNavbar setSelectedCard={setSelectedCard}/>
      <Home />
      <Hero />
      <Events SelectedCARD={SelectedCARD}/>
      <EventPage />
      <DevTeam />
      <FAQ />
      <Footer setSelectedCard={setSelectedCard} />
    </>
  );
}

export default App;
