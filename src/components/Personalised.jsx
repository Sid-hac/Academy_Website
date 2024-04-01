
import person from "../images/person.png"
import Image from "next/image"

const Personalised = () => {
  return (
    <div className=" px-6 sm:px-20 mt-12 flex flex-col justify-center items-start gap-4">
         <div className=" text-blue-900 max-w-[700px] text-2xl md:text-3xl sm:text-6xl xl:text-5xl font-bold">
            Your <span className="text-shadeYellow">Personalized</span> UPSC Guide Available 24/7 
         </div>
         <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[300px] xl:w-[700px] xl:h-[500px] 2xl:w-[1200px] 2xl:h-[900px] ">
             <Image src={person} alt="person_image" width="auto" height="auto" className="absolute inset-0 right-0 bottom-0 w-full  object-cover md:ml-36 sm:ml-10 ml-2"/>
         </div>
    </div>
  )
}

export default Personalised