"use client"

import Home from "./homepage/home";
import Header from "./components/header";
import About from "./about/page";
import Projects from "./projects/page";

export default function App() {
  return (
   <main>
      <div className="sticky bg-white/50 top-0 z-20">
        <Header></Header>
      </div>
      <div className="grid-bg min-h-[900px]">
        <section id="home" className="animate-fade-out">
          <Home></Home>
        </section>
      </div>
      <section id="about">
        <About></About>
      </section>
      <section id="project" className="grid-bg-two">
        <Projects></Projects>
      </section>
      <section id="contact">
        <Home></Home>
      </section>
   </main>
  );
}
