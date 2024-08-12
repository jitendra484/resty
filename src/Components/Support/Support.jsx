import React from 'react'
import service1 from '../../assets/service1.jpg'
import service2 from '../../assets/service2.jpg'
import service3 from '../../assets/service3.jpg'

import serviceicon from '../../assets/serviceicon.png'

const Support = () => {
  return (
    <div className='max-w-[1240px] bg-slate-100 pb-28'>
        <div className='md:grid grid-cols-2 py-16 px-7 items-center'>
            <div className='col-span-1  '>
                <h2 className='text-[#104CBA] text-2xl py-4 md:font-semibold md:py-2'>IT SUPPORT FOR BUSINESS</h2>
                <h1 className='  py-4 md:font-bold text-4xl'>Preparing for your success trusted source in IT services.</h1>

            </div>
            <div className='col-span-1'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

            </div>

        </div>

        <div className=' md:grid grid-cols-3 py-8 gap-5 px-7'>
            <div className='pb-4'>
            <div className=' md:col-span-1 border rounded-lg px-7  bg-white'>
                <img className='py-5 rounded-lg transition ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200' src={service1} alt="" />

                <div className='flex justify-between items-center'>
                    <div className='py-5'>
                    <h2 className='text-[#104CBA] font-semibold py-2'>Web Development</h2>
                    <h4 className="text-2xl">Design Review</h4>

                    </div>

              

                    <div >
                        
                        
                        <img className='size-14 font-semibold' src={serviceicon} alt="" />
                    </div>
                    
                </div>

            </div>

            </div>
         

            
                <div className='pb-4'>

                <div className='  md:col-span-1 border rounded-lg px-7  bg-white'>
                {/* <img className='w-100 py-5 rounded-lg' src={service2} alt="" /> */}
                <img className='py-5 rounded-lg transition ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200' src={service2} alt="" />

                <div className='flex justify-between items-center'>
                    <div className='py-5'>
                    <h2 className='text-[#104CBA] font-semibold py-2'>Data Analytics</h2>
                    <h4 className="text-2xl">Cloud Services</h4>

                    </div>

              

                    <div >
                        
                        
                        <img className='size-14 font-semibold' src={serviceicon} alt="" />
                    </div>
                    
                </div>

            </div>

                </div>


                <div className='pb-4'>

                <div className='col-span-1 border rounded-lg px-7  bg-white'>
                
                <img className='py-5 rounded-md transition ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200' src={service3} alt="" />

                <div className='flex justify-between items-center'>
                    <div className='py-5'>
                    <h2 className='text-[#104CBA] font-semibold py-2'>App Devlpoment</h2>
                    <h4 className="text-2xl">Machine Learning</h4>

                    </div>

              

                    <div >
                        
                        
                        <img className='size-14 font-semibold' src={serviceicon} alt="" />
                    </div>
                    
                </div>

            </div>

                </div>

              

            

          


        </div>


    </div>
  )
}

export default Support