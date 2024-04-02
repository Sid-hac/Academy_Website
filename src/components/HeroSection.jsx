
import Image from 'next/image'
import Hero from '../images/hero.png'

const HeroSection = () => {
  return (
     <div className='flex flex-1 flex-col sm:flex-row justify-center items-center w-full px-20 mt-20'>
         <div className='flex flex-col justify-center items-start gap-4  ' >
              <div >
                 <button type='button' className='bg-blue-900 text-white font-normal text-sm rounded-xl w-36 h-6'>
                     Crack your exams
                 </button>
              </div>
              <div className='mt-5 text-blue-900 max-w-[900px] text-xl md:text-3xl sm:text-2xl xl:text-4xl font-bold'>
                Unlock your <span className='text-shadeYellow uppercase '>UPSC</span>  success  with <span className='text-shadeYellow'>IAS sathi</span> , Your ultimate <span className='text-shadeYellow'>upsc companion</span>
              </div>
              <div className='mt-3 text-xl font-bold text-navbg'>
                 Your one stop destination for civil service exams
              </div>
              <div className='flex flex-row justify-center items-center gap-4'>
                  
                  <div>
                     <button type='button' className='bg-yellow-400 text-white font-normal text-sm rounded-2xl w-32 h-9'>
                         Enroll Now
                     </button>
                  </div>
                  <div>
                     <button type='button' className='bg-white text-black font-semibold text-sm rounded-2xl w-32 h-9 border-2 border-black'>
                         Try AI
                     </button>
                  </div>
              </div>
         </div>
         <div className='object-contain w-full'>
           <Image src={Hero} alt='hero_image' width="auto" height="auto" className=' object-center w-full' /> 
         </div>
     </div>
  )
}

export default HeroSection