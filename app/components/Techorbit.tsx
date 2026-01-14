"use client"
import { SiGithub, SiTailwindcss, SiReact, SiNextdotjs, SiPrisma, SiPostgresql } from "react-icons/si";

export default function TechOrbit() {
    return(
    <div className="relative w-40 h-40 lg:h-70 lg:w-70 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-dashed border-gray-400 animate-spin-slow"></div>

        <div className="relative w-20 h-20  lg:h-40 lg:w-40 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-dashed border-gray-400 animate-spin-slow"></div>
            <div className="absolute -inset-3 animate-spin-slow">
                <SiGithub className="absolute top-0 left-1/2 -translate-x-1/2 text-4xl" />
                <SiNextdotjs className="absolute bottom-0 left-1/2 -translate-x-1/2 text-4xl" />
            </div>
            
        </div>

        <div className="absolute -inset-3 animate-spin-reverse-slower">
            <SiTailwindcss className="absolute top-0 left-1/2 -translate-x-1/2 text-4xl" />
            <SiPostgresql className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl" />
            <SiPrisma className="absolute bottom-0 left-1/2 -translate-x-1/2 text-4xl" />
            <SiReact className="absolute right-0 top-1/2  text-4xl"/>
        </div>
    </div>
    );
}