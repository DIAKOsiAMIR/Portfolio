"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

const section = ["home","about","project"]

export default function Header() {
    const [active, setActive] = useState("home");

    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        section.forEach((id) => {
            const el = document.getElementById(id)
            if (!el) return

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActive(id);
                        history.replaceState(null, `#${id}`)
                    }
                },
                { threshold: 0.6 }
            )
            observer.observe(el)
            observers.push(observer)
        })
        return () => observers.forEach((observers) => {
            observers.disconnect();
        })
    },[])
    return  (
        <div className="font-poppins w-full">
            <div className="flex justify-between items-center p-4 max-w-[1000px] m-auto">
                <Link className="text-lg font-bold cursor-pointer" href={"/"}>&#60;Amir<span className="text-sm">&#x2F;</span>&#62;</Link>
                <nav className="flex space-x-5">
                    {section.map((id) => (
                        <Link
                            key={id}
                            href={`#${id}`}
                            className={`capitalize ${
                            active === id ? "border-b-2 border-black font-bold" : ""
                            }`}
                        >
                            {id}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    )
}