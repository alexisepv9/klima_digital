import { useState, useRef } from "react";
import { MotionConfig } from "motion/react";
import WhatsAppButton from "./components/WhatsAppButton";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function App() {
  const [message, setMessage] = useState("");
  const previous = useRef("");
  // Cambia la sugerencia de plan sin sobrescribir un mensaje personalizado.
  function selectPlan(name) {
    const next = "Me interesa " + name + ". ";
    if (!message || message === previous.current) {
      setMessage(next);
      previous.current = next;
    }
  }
  return (
    <MotionConfig reducedMotion="user">
      <a className="sr-only focus:not-sr-only" href="#inicio">
        Saltar al contenido
      </a>
      <Header />
      <Hero />
      <About />
      <Services onSelect={selectPlan} />
      <Contact message={message} onMessage={setMessage} />
      <Footer />
      <WhatsAppButton />
    </MotionConfig>
  );
}

