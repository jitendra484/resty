import React from 'react'
import team5 from '../../assets/team5.jpg'
import team6 from '../../assets/team6.jpg'
import team7 from '../../assets/team7.jpg'
import team8 from '../../assets/team8.jpg'

const Team = () => {
  return (
    <div className='max-w-[1240px]'>
        <div className='min-h-[700px] bg-cover bg-no-repeat bg-[url("./assets/teambg.jpg")]'>
        <div className='text-center text-white py-7'>
            <h2 className='text-lg py-4'>Team Members</h2>
            <h1 className='text-4xl font-semibold'>This Is Why Industry Our Team Is So <br /> Famous!</h1>
        </div>

        <div className=' md:grid grid-cols-4 px-10 py-10 gap-5'>
            <div className=' pb-20  col-span-1 '>
                <img className=' rounded-md  relative transition ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200' src={team5} alt="" />
              <div className='  px-16 md:px-8 mt-[-35px] absolute transition ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200 '>
              <div className='text-white     border rounded-md w-52 h-24  flex items-center justify-center bg-[#1D2C38] hover:bg-[#104BCA]'>
                   <div className='text-center'>
                   <h4 className='font-semibold text-2xl'>Harry Steve</h4>
                   <h4 className=''>Web Designer</h4>
                   </div>

                </div>


              </div>

                

            </div>

            <div className='pb-20 col-span-1 '>
                <img className=' rounded-md  relative transition ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200' src={team8} alt="" />
              <div className=' px-16 md:px-8 mt-[-35px] absolute transition ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200 '>
              <div className='text-white     border rounded-md w-52 h-24  flex items-center justify-center bg-[#1D2C38] hover:bg-[#104BCA]'>
                   <div className='text-center'>
                   <h4 className='font-semibold text-2xl'>Jullia Siger</h4>
                   <h4 className=''>App Developer</h4>
                   </div>

                </div>


              </div>

                

            </div>

            <div className='pb-20 col-span-1 '>
                <img className=' rounded-md  relative transition ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200' src={team6} alt="" />
              <div className=' px-16 md:px-8 mt-[-35px] absolute transition ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200'>
              <div className='text-white     border rounded-md w-52 h-24  flex items-center justify-center bg-[#1D2C38] hover:bg-[#104BCA]'>
                   <div className='text-center'>
                   <h4 className='font-semibold text-2xl'>Makhaia Antitni</h4>
                   <h4 className=''>UI/UX Designer </h4>
                   </div>

                </div>


              </div>

                

            </div>

            <div className='pb-16 col-span-1 '>
                <img className=' rounded-md  relative transition ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200' src={team7} alt="" />
              <div className=' px-16 md:px-8 mt-[-35px] absolute transition ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200'>
              <div className='text-white     border rounded-md w-52 h-24  flex items-center justify-center bg-[#1D2C38] hover:bg-[#104BCA]'>
                   <div className='text-center'>
                   <h4 className='font-semibold text-2xl'>Hima Steve</h4>
                   <h4 className=''>Web Designer</h4>
                   </div>

                </div>


              </div>

                

            </div>

        </div>
        
        
        </div>

    </div>
  )
}

export default Team