import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";

import { MdAttachEmail } from "react-icons/md";

import { MdOutlineTimer } from "react-icons/md";

import { BsSendFill } from "react-icons/bs";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='max-w-[1240px] bg-[#091D3E] '>
        <div className='min-h-[600px] bg-cover bg-no-repeat w-full bg-[url("./assets/ftbg2.png")]'>

        <div className='md:grid grid-cols-4 gap-20 px-24 py-20'>
            <div className='col-span-1'>
                <div>
                <h2 className='font-semibold text-3xl py-8 text-white'>Company</h2>
                <h5 className='text-[#B6BCC5] font-medium text-lg'>
                At TechPros Solutions, we are about technology and dedicated to providing IT solutions for businesses of all sizes.
                </h5>
                <div className='flex py-6 gap-6'>
                <FaLocationDot className='text-[#B6BCC5] text-[35px]'/>

                    <p className='text-[#B6BCC5] text-lg'>1791 Yorkshire Circle Kitty Hawk, NC 279499</p>
                    

                

                </div>

                


                </div>
              

            </div>

            <div className='col-span-1'>
                <div>
                <h2 className='font-semibold text-3xl py-8 text-white'>Page Links</h2>
                <div>
                    <ul className='text-[#B6BCC5] font-medium text-lg'>
                        <li className='pb-5'>Service</li>
                        <li  className='pb-5'>Portfolio</li>
                        <li className='pb-5' >Contact us</li>
                        <li className='pb-5'>Blog Us</li>
                        
                        <li className='pb-5'>About Us</li>
                        




                    </ul>
                </div>
               
               

                


                </div>
              

            </div>


            <div className='col-span-1'>
                <div>
                <h2 className='font-semibold text-3xl py-5 text-white'>Contacts</h2>
                <div>
                <div className='flex py-5 gap-6'>
                <FaLocationDot className='text-[#B6BCC5] text-[35px]'/>

                    <p className='text-[#B6BCC5] text-lg'>1791 Yorkshire Circle Kitty Hawk, NC 279499</p>
                    

                

                </div>

                <div className='flex  pb-5 gap-6'>
                        <div>
                        <MdContactPhone className='text-[#B6BCC5] text-[25px] ' />

                        </div>
                        <div>
                            
                            <h2 className='text-[#B6BCC5] text-lg'> +012-345-6789</h2>

                        </div>
                     </div>

                     <div className='flex  pb-5 gap-6'>
                        <div>
                        <MdAttachEmail  className='text-[#B6BCC5] text-lg ' />

                        </div>
                        <div>
                           
                            <h2 className='text-[#B6BCC5] text-lg'> xyc12@gmail.com</h2>

                        </div>
                     </div>

                     <div className='flex  pb-5 gap-6'>
                        <div>
                        <MdOutlineTimer className='text-[#B6BCC5] text-lg  ' />

                        </div>
                        <div>
                            
                            <h2 className='text-[#B6BCC5] text-lg'>Mon-Sat 9:00 - 7:00</h2>

                        </div>
                     </div>

                
                </div>
               
               

                


                </div>
              

            </div>

            <div className='col-span-1'>
                <div>
                    <h2 className='font-semibold text-3xl py-5 text-white'>Suscribe</h2>
                    <p className='text-[#B6BCC5] text-lg'>Are you interested in follow to a particular website</p>
                </div>

                <div className='py-6 flex items-center '>
                    <input className='bg-black bg-opacity-0 backdrop-blur-lg text-white  border-2 border-blue-500 rounded-2xl p-3 relative' type="text" placeholder='Your email address.....' />

                    <BsSendFill className='text-[#B6BCC5] text-lg absolute ml-[190px]' />
                </div>

            </div>
            
        </div>


        <div className='md:grid grid-cols-1 mt-[-60px] '>
            <div className='border-2 border-y-gray-700 p-5 flex justify-between'>
            <div className='flex  items-center '>
                

                <div className='text-white px-14'>
                    <ul className='flex items-center gap-3   '>
                        <li className='hover:text-[#1D2C38]'><FaFacebookF /></li>
                        <li className='hover:text-[#1D2C38]'><FaTwitter /></li>
                        <li className='hover:text-[#1D2C38]'><AiFillInstagram /></li>
                        <li className='hover:text-[#1D2C38]'><FaLinkedinIn /></li>
                    </ul>
                </div>
                
              

                </div>

                <div>
                    <h5 className='text-white font-medium text-lg'>© Copyright 2021 Restly All Rights Reserved Themepul</h5>
                </div>
            </div>

        </div>

        

        </div>

     

    </div>
  )
}

export default Footer