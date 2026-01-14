import Image from "next/image"
import { allProjects } from "./proj"

export default function ProjectSection() {
    return(
        <div className="grid grid-cols-1 font-poppins">
            {[...allProjects].map((proj,index) => (
                <div key={index} className="lg:flex grid bg-gray-500/25 lg:w-full mx-auto lg:mx-0 w-[600px] p-4 rounded-xl">
                    <Image key={proj.img} alt="Project Photo" height={1080} width={1920} src={proj.img} className="lg:w-155 lg:h-65 h-70 w-full my-auto"></Image>
                    <div className="flex-col p-4 space-y-2">
                         <h1 key={proj.title} className=" font-bold font-poppins">{proj.title}</h1>
                        <p>{proj.description}</p>
                        <button key={proj.link} className="border px-4 rounded-full py-2 text-white bg-black/50 hover:bg-gray-700 cursor-pointer">Visit Site</button>
                    </div>
                </div>
            ))}
        </div>
    )
}