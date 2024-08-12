import React from 'react'
import {useState} from 'react'


import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import tes from '../../assets/tes.png'
import test1 from '../../assets/test1.png'
import { RiDoubleQuotesR } from "react-icons/ri";

const Counter = () => {
    const [counterState, setCounterState]= useState(false)
  return (
    <div className='max-w-[1240px] bg-[#E7EDF8] py-20'>
        <div className='text-center'>
            <h2 className='text-[#104CBA] font-bold py-6 text-2xl'>Testimonial</h2>
            <h1 className='text-4xl font-semibold'>This Is Why Industry Feedback Is <br />So Famous!</h1>
            


        </div>

        <ScrollTrigger 
         onEnter={()=>setCounterState(true)} 
        onExit={()=>setCounterState(false)}>

        <div className='md:grid grid-cols-3 py-14 gap-5'>
            <div className='col-span-1 text-center'>
                
                    <h1 className='font-semibold text-7xl text-[#104BCA]'>
                  { counterState &&
                      <CountUp 
                      start={0} 
                      end={35}> 
                      duration={3}
  
                      </CountUp>
                  }+
                    </h1>
                    <h2 className='py-7 font-medium text-2xl'>Awards Won</h2>
                
            </div>

            <div className='col-span-1 text-center'>
                
                <h1 className='font-semibold text-7xl text-[#104BCA]'>
                { counterState &&
                      <CountUp 
                      start={0} 
                      end={24}> 
                      duration={3}
  
                      </CountUp>
                  }+
                </h1>
                <h2 className='py-7 font-medium text-2xl'>Years Experience</h2>
            
        </div>

        <div className='col-span-1 text-center'>
                
                <h1 className='font-semibold text-7xl text-[#104BCA]'>
                { counterState &&
                      <CountUp 
                      start={0} 
                      end={430}> 
                      duration={3}
  
                      </CountUp>
                  }+
                </h1>
                <h2 className='py-7 font-medium text-2xl'>Happy Client</h2>
            
        </div>

        </div>

        </ScrollTrigger>


        <div className='md:grid grid-cols-2 px-8 gap-8'>
            <div className='pb-14 col-span-1'>
            <div className=' bg-white border rounded-md p-10'>

                <div className='flex justify-between'>

                <div className='flex items-center gap-3'>

                    <img src={tes} alt="" />

                     <div>
                        <h2 className='font-semibold'>John Legend</h2>
                      <h5 className='text-gray-600'>Web Design</h5>

                        </div>





                           </div>
                        <RiDoubleQuotesR className='font-semibold text-6xl text-[#104BCA]' />
                </div>

                <p className='px-5 text-start py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere officia culpa quas sint amet? Non, earum consequuntur suscipit delectus sint!</p>
                


            </div>
            </div>

            <div className='pb-10 col-span-1'>

                <div className=' bg-white border rounded-md p-10'>

                

                <div className='flex justify-between'>

                <div className='flex items-center gap-3'>

                    <img src={test1} alt="" />

                     <div>
                        <h2 className='font-semibold'>Vyamo Rz</h2>
                      <h5 className='text-gray-600'>UI/UX Designier</h5>

                        </div>





                           </div>
                        <RiDoubleQuotesR className='font-semibold text-6xl text-[#104BCA]' />
                </div>

                <p className='px-5 text-start py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere officia culpa quas sint amet? Non, earum consequuntur suscipit delectus sint!</p>
                


            </div>
            </div>

        </div>

    </div>
  )
}

export default Counter