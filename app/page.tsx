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
      <section id="project" className="relative overflow-hidden min-h-[900px]">
        <div className="absolute inset-0 z-0 grid grid-cols-[repeat(auto-fill,100px)] pointer-events-none group">
          {Array.from({ length: 133 }).map((_,i) => (
            <div key={i} className="border border-black/5  hover:scale-150 group-hover:scale-100 hover:bg-black/50 transform  duration-700 ease-out transition-all" style={{ pointerEvents: "auto"}}></div>

          ))}
        </div>
        <div className="relative z-10 w-full mx-auto pointer-events-auto">
          <Projects></Projects>
        </div>
      </section>
      <section id="contact">
        <Home></Home>
      </section>
   </main>
  );
}
