import { Techs } from "./tech"
import { Icon } from "@iconify/react"

export default function TechStack() {
    return(
        <div className="flex-1 w-full justify-center mt-10">
            
            <div className="flex-col justify-center overflow-x-hidden">
                
                <div className="w-full text-center lg:flex justify-between space-x-5 animate-scroll-left shrink-0">
                    {[...Techs,...Techs,...Techs].map((techs, index) => (
                        <div key={index} className="flex-col  p-2 rounded-full w-[140px] lg:w-60 lg:m-0 lg:mx-5 m-2 lg:-ml-[30px]">
                            <Icon key={techs.icon} icon={techs.icon} className="mx-auto size-5"></Icon>
                            <span key={techs.name}>{techs.name} </span>
                        </div>
                    ))}
                </div>

                <div className="text-center lg:flex justify-between space-x-5 animate-scroll-right shrink-0">
                    {[...Techs,...Techs,...Techs].map((techs, index) => (
                        <div key={index} className="flex-col p-2 rounded-full w-[100px] lg:w-60 lg:m-0 lg:mx-5 m-2 lg:-ml-[30px]">
                            <Icon key={techs.icon} icon={techs.icon} className="mx-auto size-5"></Icon>
                            <span key={techs.name}>{techs.name} </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}