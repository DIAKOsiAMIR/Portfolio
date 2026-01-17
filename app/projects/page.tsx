import ProjectSection from "./projsection";
import { IoSettingsOutline } from "react-icons/io5";
import ComingSoon from "./comingsoon";
export default function Projects() {
    return(
        <div className="lg:mx-auto lg:w-[50%]">
            <div className="w-full flex justify-around items-center pt-20 pb-5 mb-20">
                <div className="mr-5 h-fit w-fit">
                    <IoSettingsOutline size={50} className="animate-spin-slow" />
                </div>
                <h2 className="text-4xl lg:text-7xl  bg-linear-to-r from-gray-800 via-gray-600 to-gray-500 inline-block text-transparent bg-clip-text py-5 font-poppins font-extrabold">Projects</h2>
                <div className="mr-5 animate-spin-slow">
                    <IoSettingsOutline size={50} />
                </div>
            </div>
            <div className="">
                <ProjectSection></ProjectSection>
            </div>

        </div>
    );
}