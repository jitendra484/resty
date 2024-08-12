import React from 'react'

const Suscribe = () => {
  return (
    <div className='max-w-[1240px]  bg-[#104CBA]'>
        <div className='md:grid grid-cols-2 px-22 py-24 gap-8'>
            <div className='col-span-1 flex items-center '>
                <h1 className='text-white   font-semibold text-2xl  px-12 md:text-3xl'>Sign up for latest IT resources news from Restly</h1>

            </div>
            <div className=' py-8 px-8 col-span-1'>
              <div className='   bg-[#104BCA] px-2'>
              <input className='p-5 relative w-[330px] md:w-[430px] text-white md:text-xl border-2 border-[#88A6DD] rounded-md  bg-[#104CBA]' type="text" placeholder='Your email address....' />

              <button className='absolute ml-[-120px] mt-[8px] font-medium border rounded-md py-3 px-4 bg-slate-200 hover:bg-[#1D2C38] hover:text-[white]'>Subscribe</button>

              </div>
               

            </div>

        </div>

    </div>
  )
}

export default Suscribe