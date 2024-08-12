import React from 'react'
import project1 from '../../assets/project1.jpg'
import project2 from '../../assets/project2.jpg'
import project4 from '../../assets/project4.jpg'

const Project = () => {
  return (
    <div className='max-w-[1240px] bg-[#E7EDF8]'>
        <div className='md:grid grid-cols-3 gap-5 py-24 px-12'>
            <div className='pb-12 col-span-1'>
                <img className=' w-[90%] relative border-2 rounded-lg ' src={project1} alt="" />
                <div className='absolute px-10 mt-[-66px] hover:-translate-y-2 delay-150 '>
                    <div className='w-64 h-12 border-2 hover:bg-[#104BCA]  hover:text-white  bg-slate-50 rounded-lg flex justify-center items-center   '>
                        <h5 className='font-medium'>Cyber Security Advice</h5>
                    </div>
                </div>



            </div>

            <div className='pb-12 col-span-1'>
                <img className=' w-[90%] relative border-2 rounded-lg ' src={project2} alt="" />
                <div className='absolute px-10 mt-[-66px] hover:-translate-y-2 delay-150 '>
                    <div className='w-64 h-12 border-2 hover:bg-[#104BCA]  hover:text-white  bg-slate-50 rounded-lg flex justify-center items-center   '>
                        <h5 className='font-medium'>Robert Security Advice</h5>
                    </div>
                </div>



            </div>

            <div className='col-span-1'>
                <img className=' w-[90%] relative border-2 rounded-lg ' src={project4} alt="" />
                <div className='absolute px-10 mt-[-66px] hover:-translate-y-2 delay-150 '>
                    <div className='w-64 h-12 border-2 hover:bg-[#104BCA]  hover:text-white  bg-slate-50 rounded-lg flex justify-center items-center   '>
                        <h5 className='font-medium'>AI Security Advice</h5>
                    </div>
                </div>



            </div>

        </div>

    </div>
  )
}

export default Project