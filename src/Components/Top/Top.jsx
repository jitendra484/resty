import React from 'react'
import { FaClock } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Top = () => {
  return (
    <div className=''>
        <div className='max-w-[1240px] px-5 md:px-11 bg-[#104CBA] p-3 '>
            <div className='flex justify-between text-white'>
              <div className='hidden md:block'>
                <ul className='text-white flex gap-5 px-5'>
                    <li>Call Us: 548978478</li>
                    <li> Email us: demo@example.com</li>
                </ul>
              </div>


              <div>
              <div className='flex justify-evenly '>
                <div className='flex  items-center gap-2 text-white '>
                <span><FaClock /></span>
                <h4>08:00 am - 06:00 pm</h4>
                </div>

                <div>
                    <ul className='flex items-center gap-3   '>
                        <li className='hover:text-[#1D2C38]'><FaFacebookF /></li>
                        <li className='hover:text-[#1D2C38]'><FaTwitter /></li>
                        <li className='hover:text-[#1D2C38]'><AiFillInstagram /></li>
                        <li className='hover:text-[#1D2C38]'><FaLinkedinIn /></li>
                    </ul>
                </div>
                

                </div>

              </div>
             
            </div>
           

        </div>

    </div>
  )
}

export default Top