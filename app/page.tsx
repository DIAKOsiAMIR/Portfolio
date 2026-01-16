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
        <div className="absolute inset-0 z-0 grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(100px,1fr))] pointer-events-auto group">
          {Array.from({ length: 133 }).map((_,i) => (
            <div key={i} className="border border-black/5  hover:scale-150 group-hover:scale-100 hover:bg-black/50 transform  duration-700 ease-out transition-all" style={{ pointerEvents: "auto"}}></div>

          ))}
        </div>
        <div className="relative z-10 w-full mx-auto pointer-events-none">
          <Projects></Projects>
        </div>
        <div className=" pointer-events-auto flex justify-center absolute mx-auto bottom-0 w-full p-4 bg-linear-to-t from-gray-400 to-transparent rounded-t-[10000px] -mb-190 lg:-mb-160 h-[900px]"> 
          <h2 className="py-20 animate-pulse text-3xl font-poppins font-bold">More Coming Soon...</h2>
        </div>
      </section>
      <section id="contact">
        <Home></Home>
      </section>
   </main>
  );
}
