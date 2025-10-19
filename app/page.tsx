"use client";

import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Loading from "./loading";
import { useEffect, useState } from "react";
import { Button } from "@heroui/button";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Espera a que la página esté completamente cargada
    const timer = setTimeout(() => setLoading(false), 800); // opcional: pequeño delay para suavizar
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <Button color="primary" />
      {/* <Loading /> */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
