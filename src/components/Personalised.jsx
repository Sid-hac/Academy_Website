
import person from "../images/person.png"
import Image from "next/image"

const Personalised = () => {
  return (
    <div className=" px-6 sm:px-20 mt-12 flex flex-col justify-center items-start gap-4">
         <div className=" text-blue-900 max-w-[700px] text-xl md:text-3xl sm:text-2xl xl:text-4xl font-bold">
            Your <span className="text-shadeYellow">Personalized</span> UPSC Guide Available <span className="text-shadeYellow">24/7</span> 
         </div>

         <div className="xl:ml-20 w-[250px] h-[250px] md:w-[500px] md:h-[300px] xl:w-[800px] xl:h-[500px] 2xl:w-[1200px] 2xl:h-[900px] mt-7  flex justify-center items-center">
             <Image src={person} alt="person_image" width="auto" height="auto" className=" inset-0 w-full  object-contain md:ml-36 sm:ml-10 ml-2"/>
         </div>
    </div>
  )
}

export default Personalised