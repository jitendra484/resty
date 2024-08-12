import React from 'react'
import blog1 from '../../assets/blog1.jpg'
import blog2 from '../../assets/blog2.jpg'
import blog3 from '../../assets/blog3.jpg'
import blogicon from '../../assets/blogicon.png'

import { CgCalendarDates } from "react-icons/cg";



const News = () => {
  return (
    <div className='max-w-[1240px]  mt-[-220px]'>

        <div className='text-center pt-60 pb-16 bg-white'>
            <h2 className='font-medium text-lg text-[#104BCA] '>Recent Articles</h2>
            <h4 className='font-semibold text-4xl py-6'>Latest News from Us</h4>
        
        
        </div>

        <div className='max-w-[1240px] min-h-[600px] bg-slate-200   bg-[url("./assets/blogsbd.jpg")] bg-no-repeat  '>
            <div className='md:grid grid-cols-3 px-8 gap-10'>
                <div className='pb-64 col-span-1'>
                    <div className='relative transition ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200'>
                    <img className='rounded-t-lg' src={blog1} alt="" />

                    </div>

                    <div className='bg-white w-[345px] rounded-lg absolute mt-[-30px] '>
                    <div className='px-5 absolute mt-[-20px] '>
                        <img className='rounded-full w-[40%]' src={blogicon} alt="" />

                    </div>

                    <div className='pb-6 pt-9 flex gap-14 px-6  '>
                        <p> By Resty</p>
                        <div className='flex items-center'>
                        <CgCalendarDates className='text-[#104BCA] text-lg' />
                        <h5 className='hover:text-[#104BCA]'>April 10, 2024</h5>

                        </div>
                      


                    </div>

                    <div className='px-6 pb-6'>
                        <h2 className='font-semibold text-2xl pb-4 hover:text-[#104BCA]'>
                        Keep Your Business Safe Ensure High Availability.
                        
                        </h2>
                        <p className='text-[#454545]'>We’ve been a strategy thought leader for nearly five decades and…</p>

                    </div>


                </div>
                    
                </div>

                <div className='pb-64 col-span-1'>
                    <div className='relative transition ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200'>
                    <img className='rounded-t-lg' src={blog2} alt="" />

                    </div>

                    <div className='bg-white w-[345px] rounded-lg absolute mt-[-30px] '>
                    <div className='px-5 absolute mt-[-20px] '>
                        <img className='rounded-full w-[40%]' src={blogicon} alt="" />

                    </div>

                    <div className='pb-6 pt-9 flex gap-14 px-6 '>
                        <p> By Resty</p>
                        <div className='flex items-center'>
                        <CgCalendarDates className='text-[#104BCA] text-lg' />
                        <h5 className='hover:text-[#104BCA]'>April 10, 2024</h5>

                        </div>
                      


                    </div>

                    <div className='px-6 pb-6'>
                        <h2 className='font-semibold text-2xl pb-4 hover:text-[#104BCA]'>
                        What’s the Holding Back the It Solution…
                        
                        </h2>
                        <p className='text-[#454545]'>We’ve been a strategy thought leader for nearly five decades and…</p>

                    </div>


                </div>
                    
                </div>

                <div className='pb-64 col-span-1'>
                    <div className='relative transition ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200'>
                    <img className='rounded-t-lg' src={blog3} alt="" />

                    </div>

                    <div className='bg-white w-[345px] rounded-lg absolute mt-[-30px] '>
                    <div className='px-5 absolute mt-[-20px] '>
                        <img className='rounded-full w-[40%]' src={blogicon} alt="" />

                    </div>

                    <div className='pb-6 pt-9 flex gap-14 px-6 '>
                        <p> By Resty</p>
                        <div className='flex items-center'>
                        <CgCalendarDates className='text-[#104BCA] text-lg' />
                        <h5 className='hover:text-[#104BCA]'>April 10, 2024</h5>

                        </div>
                      


                    </div>

                    <div className='px-6 pb-6'>
                        <h2 className='font-semibold text-2xl pb-4 hover:text-[#104BCA]'>
                        This Week’s Top Stories About It Solution
                        
                        </h2>
                        <p className='text-[#454545]'>We’ve been a strategy thought leader for nearly five decades and…</p>

                    </div>


                </div>
                    
                </div>
                

            </div>

        </div>

    </div>
  )
}

export default News