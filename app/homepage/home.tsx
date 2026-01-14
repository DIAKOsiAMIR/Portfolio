"use client"

import Typetext from "../components/typingtext";
import TechOrbit from "../components/Techorbit";
import { FaGithub,FaLinkedin,FaFacebook  } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
    return (
        <div className="font-poppins lg:min-h-[850px] min-h-[900px]">
            <div>
                <div className="m-auto max-w-[1015px] pl-5 py-[50px] lg:py-[220px] grid grid-cols-1 lg:grid-cols-2">
                    <div>
                        <p className="font-semibold text-gray-500 pb-2.5 pt-10">Welcome to my world</p>
                        <h1 className="font-poppins text-4xl font-bold text-black">Hi, I'm Amir Perez</h1> 
                        <p className="max-w-[500px] pt-3 lg:pr-0 pr-5 text-justify text-sm">
                        I am a passionate developer with an interest with
                        </p>
                            <Typetext></Typetext>
                        <div>
                            <ul className="flex space-x-2 -ml-2 my-5">
                                <Link href={"https://github.com/DIAKOsiAMIR"} target="_blank" className="flex text-center gap-1 bg-black/50 cursor-pointer w-[90px] text-sm rounded-full  text-white p-3 hover:bg-gray-700"><span className="my-auto"><FaGithub/></span> Github</Link>
                                <Link href={"https://www.linkedin.com/in/amir-jazen-perez-01ba5a220/"}  target="_blank" className="flex text-center gap-1 bg-black/50 cursor-pointer w-[100px] text-sm rounded-full text-white p-3 hover:bg-gray-700"><span className="my-auto"><FaLinkedin /></span> LinkedIn</Link>
                                <Link href={"https://www.facebook.com/DIAKOsiAMIR/"} target="_blank" className="flex text-center gap-1 bg-black/50 cursor-pointer w-[110px] text-sm rounded-full text-white p-3 hover:bg-gray-700"><span className="my-auto"><FaFacebook /></span>Facebook</Link>
                            </ul>
                        </div>
                    </div>
                    <div className="appear-animate mx-auto lg:pl-[150] lg:py-0 py-8">
                        <TechOrbit></TechOrbit>
                    </div>
                </div>
            </div>
        </div>
    )
}