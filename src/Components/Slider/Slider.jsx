import React from 'react'
import clientlogo1 from '../../assets/clientlogo1.png'
import clientlogo2 from '../../assets/clientlogo2.png'
import clientlogo3 from '../../assets/clientlogo3.png'
import clientlogo4 from '../../assets/clientlogo4.png'
import clientlogo5 from '../../assets/clientlogo5.png'

const Slider = () => {
  return (
    <div className='max-w-[1240px] px-24 py-10 z-50 '>
     <div className='shadow-2xl border-2 bg-slate-50  overflow-hidden mt-[-130px] '>
     
         <div className='flex  md:grid grid-cols-5  py-12 animate-loop-scroll   '>

           
            <div className='col-span-1 flex justify-center'>
                <img src={clientlogo1} alt="" />
            </div>
            <div className='col-span-1 flex justify-center'>
                <img src={clientlogo2} alt="" />
            </div>
            <div className='col-span-1 flex justify-center'>
            <img src={clientlogo3} alt="" />
            </div>
            <div className='col-span-1 flex justify-center'>
            <img src={clientlogo4} alt="" />
            </div>
            <div className='col-span-1 flex justify-center'>
            <img src={clientlogo5} alt="" />
            </div>

          

            </div>

            

 


           
        

        </div>
    </div>
  )
}

export default Slider