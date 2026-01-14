import Image from "next/image"
export default function pSection() {
    return(
        <main className="flex">
            <div className="lg:min-h-[350px] lg:w-[280px] h-[400px] w-[300px] animate-photo ">
                <Image alt="Photo" width={3020} height={2000} src={'/maangas.jpg'} className="w-[250px] pt-[12px] mx-auto transition-all transform hover:scale-110"/>
            </div>
        </main>
    )
}