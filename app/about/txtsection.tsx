"use client"

import { useEffect, useRef, useState } from "react"

export default function TxtSection() {
    const text =" A dedicated 4th-year BSIT student with hands-on experience in programming and web development. Have experience in Prisma, JavaScript, and Java, and worked with modern frameworks such as ReactJS, Next.js, and TailwindCSS. Passionate about solving problems building efficient websites, and learning new technologies. Known for being hardworking,adaptable, and eager to grow in a professional IT environment. Actively looking for an opportunity to contribute to meaningful tech projects while expanding my skills as part of a collaborative development team"
    const [typing, setTyping] = useState("");
    const textRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        if (!textRef.current) return

        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return

            text.split("").forEach((_,index) => setTimeout(() => 
                    setTyping(text.slice(0, index + 1)), index * 10
                )
            )
            observer.disconnect()
        })

        observer.observe(textRef.current)
        return() => observer.disconnect()
    }, [])

    return( 
        <div className="flex-col w-full lg:px-0 px-[50px]">
            <span ref={textRef} className="my-3 w-full lg:p-0 lg:w-auto text-justify">
               {typing}
            </span>
            <div className="w-full flex justify-center">
                <button className="border px-4 py-2 rounded-full text-center flex justify-center bg-black/50 text-white hover:bg-gray-700 cursor-pointer">Download CV</button>
            </div>
        </div>
    )
}