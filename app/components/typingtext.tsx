"use client"

import { useState, useEffect } from "react";


export default function Typetext() {
    const texts = ["Frontend Developer", "Backend Developer", "Fullstack Developer", "Software Developer"];

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = texts[index];
        const timeout = setTimeout(() => {
            if (!deleting) {
                if (subIndex < current.length) setSubIndex(subIndex + 1)
                else {
                    setTimeout(() => {
                        setDeleting(true)
                    },1000)
                };
            } else {
                if (subIndex > 0) setSubIndex(subIndex - 1)
                else {
                    setDeleting(false)
                    setIndex((index + 1) % texts.length);
                }
            }
        }, deleting ? 40 : 90)
        return () => clearTimeout(timeout);
    }, [subIndex, deleting, index]);

    return(
        <div>
            <p className="font-bold text-gray-600 text-xl">{texts[index].slice(0,subIndex)}|</p>
        </div>
    );
}