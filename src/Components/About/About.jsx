import React from 'react'
import about from '../../assets/about.png'
import { TiTick } from "react-icons/ti";

const About = () => {
  return (
    <div className='max-w-[1240px] py-20'>
        <div className='md:grid grid-cols-2 py-14 px-5 gap-5'>
            <div className='col-span-1'>
                <img className='transition ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200' src={about} alt="" />
            </div>

            <div className='py-6'> 

                <h2 className='text-[#104CBA] font-bold py-6 text-2xl'>It Support For Business</h2>
                <h1 className='font-medium text-4xl text-[#1D2C38] pb-6'>
                Preparing for your success trusted source in IT services.
                </h1>

                <p className='text-[#4A5660] pb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore

                 </p>

                 

                 <div className='pb-12'>
                    <ul>
                        <li className='flex gap-2 items-center'><TiTick className='text-[#104CBA] text-4xl' />which means as the company ramps</li>
                        <li className='flex gap-2 items-center'><TiTick className='text-[#104CBA] text-4xl' />Available in 14.1-in. and 16-in. versions.</li>
                        <li className='flex gap-2 items-center'><TiTick className='text-[#104CBA] text-4xl' />The potential loss of the Touch Bar.</li>
                        <li className='flex gap-2 items-center'><TiTick className='text-[#104CBA] text-4xl' /> High-speed USB 4.0.</li>
                        <li className='flex gap-2 items-center'><TiTick className='text-[#104CBA] text-4xl' />which means as the company ramps</li>


                       
                    </ul>

                 </div>

                 <button className=' font-semibold hover:text-[white] text-[#104CBA] py-4 px-8 bg-[#E7EDF8] rounded-lg hover:bg-[#1D2C38]'>View Details</button>

            </div>

        </div>

    </div>
  )
}

export default About