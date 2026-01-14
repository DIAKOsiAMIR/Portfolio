import ProjectSection from "./projsection";

export default function Projects() {
    return(
        <div className="lg:mx-auto lg:w-[50%]">
            <div className="w-full flex justify-center items-center pt-20 pb-5">
                <h2 className="text-3xl font-poppins font-extrabold">Projects</h2>
            </div>
            <div className="">
                <ProjectSection></ProjectSection>
            </div>
        </div>
    );
}