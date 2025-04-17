import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Skills from "../../components/Skills"
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <head>
        <title>Sameer's Portfolio</title>
      </head>
      <Header/>
      <section id="Hero" className="snap-center">
         <Hero/>
      </section>
      <section id="About" className="snap-center">
        <About/>
      </section>
      <section id="Experience" className="snap-center">
        <Experience/>
      </section>
      <section id="Skills" className="snap-center">
        <Skills/>
      </section>
      <section id="Projects" className="snap-center">
        <Projects/>
      </section>
      <section id="Contact" className="snap-center">
        <Contact/>
      </section>
      
    </div>
  );
}
