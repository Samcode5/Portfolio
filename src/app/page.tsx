import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

export default function Home() {
  return (
    <div>
      <head>
        <title>Sameer's Portfolio</title>
      </head>
      <Header/>
      <section id="Hero">
         <Hero/>
      </section>
    </div>
  );
}
