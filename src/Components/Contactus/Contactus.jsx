import React from 'react'
import { MdAccountCircle } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

import { MdAttachEmail } from "react-icons/md";

import { MdOutlineTimer } from "react-icons/md";







const Contactus = () => {
  return (
    <div className='max-w-[1240px] '>
        <div className='max-w-[1200px] m-auto py-10'>
            <div className='md:grid grid-cols-3 px-10 gap-8'>
                <div className='col-span-2'>
                    <div>
                        <h1 className='font-semibold text-4xl py-10 px-5'>Get In Touch</h1>
                    </div>

                    <div className='md:flex justify-evenly '>


                        <div className='pb-10'>
                        <div className='flex justify-between items-center  '>
                    
                    <input className='p-5 border-2 border-gray-400 rounded-md w-[330px]  relative' type="text" placeholder='Your name' />
                    <MdAccountCircle className='absolute text-[#104BCA] size-[25px] ml-[270px]' />
                </div>


                        </div>

                        <div className='pb-10'>

                        <div className='flex justify-between items-center  '>
                        <input className='p-5 border-2 border-gray-400 rounded-md w-[330px]  relative' type="email" placeholder='Your email' />
                        <MdMarkEmailUnread  className='absolute text-[#104BCA] size-[25px] ml-[270px]' />
                         </div>
                        </div>


                 
                    


                    </div>



                    <div className='md:flex justify-evenly'>


                        <div className='pb-10'>
                        <div className='flex justify-between items-center  '>
                        <input className='p-5 border-2 border-gray-400 rounded-md w-[330px]  relative' type="tel" placeholder='Your phone number' />
                        <FaPhone  className='absolute text-[#104BCA] size-[25px] ml-[270px]' />
                    </div>

                        </div>

                        <div>
                        <div className='flex justify-between items-center  '>
                        <input className='p-5 border-2 border-gray-400 rounded-md w-[330px]  relative' type="link" placeholder='Your website' />
                        <FaLink   className='absolute text-[#104BCA] size-[25px] ml-[270px]' />
                    </div>

                        </div>
                    

                   


                    </div>

                    <div className='mt-[-10px]'>
                    <div className='flex justify-between   pt-10 md:px-6'>
                        {/* <input className=' border-2 border-gray-400 rounded-md w-[630px] h-[160px]  relative' type="text" placeholder='Let us know what you need.' /> */}
                        
                        <textarea className=' p-8 border-2 border-gray-400 rounded-md w-[683px] h-[160px]  relative' type="text" placeholder='Let us know what you need.' id=""></textarea>
                        <FaPencilAlt    className='absolute text-[#104BCA] size-[25px]  ml-[280px] md:ml-[580px] mt-[25px]' />
                    </div>
                    </div>

                    <div className='px-5 py-9'>
                        <button className='py-4 px-6 bg-[#104BCA] rounded-md text-white hover:bg-[#1D2C38]'>Send Message</button>
                    </div>

                    

                </div>
                <div className='col-span-1'>
                    <div className='py-10 transition ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-200'>
                    <div className='bg-gradient-to-t from-blue-600 to-blue-800 h-[555px] w-full relative '>
                    <div className='h-[555px] w-full object-cover absolute mix-blend-overlay bg-[url("./assets/contact.jpg")] bg-cover bg-no-repeat py-8 '>
                        
                        
                    

                     </div>

                     <h2 className='font-semibold text-white  text-3xl py-16 px-10'>Don't hesitate to contact us</h2>

                     <div className='flex items-center px-10 gap-5'>
                        <div>
                        <MdContactPhone className='font-semibold text-[blue] bg-slate-50 p-2 rounded-full text-[45px]  ' />

                        </div>
                        <div>
                            <h5 className='font-medium text-gray-300 text-2xl'>Call us</h5>
                            <h2 className='text-2xl font-semibold text-white'> +012-345-6789</h2>

                        </div>
                     </div>

                     <div className='flex items-center px-10 gap-5 py-5'>
                        <div>
                        <MdAttachEmail  className='font-semibold text-[blue] bg-slate-50 p-2 rounded-full text-[45px]  ' />

                        </div>
                        <div>
                            <h5 className='font-medium text-gray-300 text-2xl'>Mail to us</h5>
                            <h2 className='text-2xl font-semibold text-white'> xyc12@gmail.com</h2>

                        </div>
                     </div>

                     <div className='flex items-center px-10 gap-5'>
                        <div>
                        <MdOutlineTimer className='font-semibold text-[blue] bg-slate-50 p-2 rounded-full text-[45px]  ' />

                        </div>
                        <div>
                            <h5 className='font-medium text-gray-300 text-2xl'>Office hours</h5>
                            <h2 className='text-2xl font-semibold text-white'>Mon-Sat 9:00 - 7:00</h2>

                        </div>
                     </div>


                    </div>

                    </div>
                   
                 

                </div>

            </div>
        </div>

    </div>
  )
}

export default Contactus