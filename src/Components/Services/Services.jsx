import React from 'react'
import mark from '../../assets/mark.png'
import web from '../../assets/web.png'
import app from '../../assets/app.png'
import { FaLongArrowAltRight } from "react-icons/fa";


const Services = () => {
  return (
    <div className='max-w-[1240px] h-full '>
        <div className=' min-h-[450px]  bg-[#140CBA]  bg-[url("./assets/progress.png")] bg-cover bg-no-repeat'>

        
        
        <div className='md:grid grid-cols-3 py-20 px-12 gap-10'> 
             
             <div className='  pb-5 '>


             <div className='col-span-1 text-white text-center  '>
                
                <img className='bg-slate-50 p-3 rounded-full mx-auto hover:bg-[#1D2C38]' src={web} alt="" />

                <h1 className='font-bold text-[28px] py-4'>Website  <br />Development</h1>

                <h4 className='font-small text-lg'>We’ve been a strategy thought leader for nearly five decades and we bring</h4>

                
                <div className='flex items-center gap-1 justify-center mx-auto hover:text-black'>
                <button className=' py-2'>Read More</button>
                <FaLongArrowAltRight />

                </div>
                

                

            </div>

             </div>
            
            


            <div className=' pb-5'>

            <div className='col-span-1 text-white text-center'>
                
                <img className='bg-slate-50 p-3 rounded-full mx-auto hover:bg-[#1D2C38]' src={mark} alt="" />

                <h1 className='font-bold text-[28px] py-4'>Advertising and Marketing</h1>

                <h4 className='font-small text-lg'>We’ve been a strategy thought leader for nearly five decades and we bring</h4>

                
                <div className='flex items-center gap-1 justify-center mx-auto hover:text-black'>
                <button className=' py-2'>Read More</button>
                <FaLongArrowAltRight />

                </div>
                

                

            </div>

             </div>
         
           


            <div className='pb-5'>
            <div className='col-span-1 text-white text-center'>
                
                <img className='bg-slate-50 p-3 rounded-full mx-auto hover:bg-[#1D2C38]' src={app} alt="" />

                <h1 className='font-bold text-[28px] py-4'>Mobile App Developmeent</h1>

                <h4 className='font-small text-lg'>We’ve been a strategy thought leader for nearly five decades and we bring</h4>

                
                <div className='flex items-center gap-1 justify-center mx-auto hover:text-black'>
                <button className=' py-2'>Read More</button>
                <FaLongArrowAltRight />

                </div>
                

                

            </div>

             </div>

           

        </div>
        </div>

    </div>
  )
}

export default Services