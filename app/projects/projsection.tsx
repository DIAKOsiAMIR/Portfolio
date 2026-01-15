import Image from "next/image"
import { allProjects } from "./proj"
import Link from "next/link"

export default function ProjectSection() {
    return(
        <div className="grid grid-cols-1 font-poppins">
            {[...allProjects].map((proj,index) => (
                <div key={index} className="lg:flex grid bg-[#F5F5F5] lg:w-full mx-auto lg:mx-0 w-[300px] p-4 rounded-xl">
                    <Image key={proj.img} alt="Project Photo" height={1080} width={1920} src={proj.img} className="pointer-events-auto lg:w-155 lg:h-65 h-30 w-full my-auto hover:shadow-2xl cursor-pointer transition-all transform"></Image>
                    <Link href={"https://greensync.garden/"} target="_blank" className="absolute lg:w-145 w-[268px] lg:h-65 h-30 cursor-pointer pointer-events-auto hover:shadow-2xl z-5 transition-all"></Link>
                    <div className="flex-col p-4 space-y-2">
                         <h1 key={proj.title} className=" font-bold font-poppins">{proj.title}</h1>
                        <p className="text-sm py-4">{proj.description}</p>
                        <Link target="_blank" href={"https://greensync.garden/"} key={proj.link} className=" pointer-events-auto px-4 rounded-full py-2 text-white bg-black/50 hover:bg-gray-700 cursor-pointer">Visit Site</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}