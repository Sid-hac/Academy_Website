import Image from 'next/image'
import logo from '../images/logo.png'
import pic from '../images/pic.jpg'

function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center w-full px-10 py-3 bg-navbg">
       <div className="flex flex-row justify-center items-center gap-2">
           <Image src={logo} alt='logo' width={54} height={54} className='bg-transparent '/>
           <div className='text-white font-semibold uppercase'>
            <span className='text-yellow-600 font-bold uppercase text-3xl'>IAS</span>
            {' '}
            SATHI
           </div>
       </div>
       <div className='flex flex-row justify-center items-center gap-2'>
           <button type='button' className='w-24 h-9 bg-yellow-500 rounded-lg '>
             Sign up
           </button>
           <Image src={pic} alt='image' width={30} height={30} className='bg-transparent' /> 
       </div>
    </nav>
  )
}

export default Navbar