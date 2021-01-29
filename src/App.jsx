import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import "./styles.css";
import { slides, infoData } from "./data";
import Dropdown from "./components/Dropdown";
import InfoSection from "./components/InfoSection";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Hero slides={slides} />
      <InfoSection infoData={infoData} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
    </>
  );
}
