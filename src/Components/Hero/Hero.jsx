import React from 'react'
import { ReactTyped} from 'react-typed'
import { MdOutlinePlayCircle } from "react-icons/md"






const Hero = () => {
 
  
  return (
    <div className='max-w-[1240px]'>
        <div className='hidden md:block min-h-screen  lg:px-32 px-5 bg-[url("./assets/hero.jpg")] bg-cover bg-no-repeat'>
            <div className='grid grid-cols-3 gap-4    '>
              <div className='col-span-2 py-[150px]'>
                <h2 className='text-white text-xl py-2'>EMPOWER YOUR BUSINESS</h2>
                <h1 className='text-white text-[48px] pb-2'>Excellent IT services for your success !</h1>
                <div className='text-white text-[48px] pb-5 '>
                  We Do
                  <ReactTyped

                  className='pl-3  font-semibold'
                  strings={['Web development','Data Analysis', 'App Develpoment', 'Ethical Hacking']}
                  typeSpeed={150} 
                  backSpeed={70}
                  loop={true} />
                 </div>

                 <div className='flex items-center gap-4'>
                 <button className='bg-[#104CBA] hover:bg-[#1D2C38] p-3 px-7  rounded-lg text-white'>Meet With Us</button>
                 <button className=' '>
                 <MdOutlinePlayCircle className='bg-white text-5xl rounded-full text-[#104BCA]'/>

                  
                 </button>
                

                 

                 </div>

                

              </div>
              

              <div className='col-span-1'>

              
              </div>

            </div>
        </div>
        {/* <div className='hidden md:block'>
          <img className='min-h-screen bg-no-repeat bg-center bg-cover space-y-5' src={hero} alt="" /> */}

        

        </div>

    
  )
}

export default Hero