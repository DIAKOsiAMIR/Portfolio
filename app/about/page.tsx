import Section from "./psection";
import TxtSection from "./txtsection";
import TechStack from "./techstack";

export default function About() {
    return(
        <div className="font-poppins bg-gray-50 min-h-[850px]">
            <div className="flex justify-center mx-auto max-w-[1015px] lg:pt-[90px]">
                <div className="w-[50%] animate-lines p-0.5 rounded-full lg:mt-8 mt-5 bg-black max-h-px"></div>
                <div className="space-y-4">
                    <div className="flex w-full">
                        <h1 className="font-bold text-5xl lg:text-6xl bg-[#F8F9FA] flex animate-about-show">About <span className="text-[#636364] ml-5"> Me</span></h1>
                    </div>
                </div>
                <div className="w-[50%] animate-lines p-0.5 rounded-full lg:mt-8 mt-5 bg-black max-h-px"></div>
            </div>
            <div className="flex justify-center w-full">
                <p className="font-light text-lg lg:text-xl appear-animate ">ALLOW ME TO INTRODUCE MYSELF</p>
            </div>
            <div className="w-full flex justify-center">
                <div className="lg:flex justify-center items-center lg:w-[50%] w-full py-5">
                    <div className="lg:w-[50%] flex justify-center">
                        <Section></Section>
                    </div>
                    <div className="lg:w-[50%] flex justify-center">
                        <TxtSection></TxtSection>
                    </div>
                </div>
            </div>
            
            <div className="lg:w-[50%] mx-auto">
                <div className="flex justify-center items-center">
                    <h1 className="font-semibold lg:-my-3 text-2xl">My Technologies</h1>
                </div>
                <TechStack></TechStack>
            </div>
        </div>
    );
}