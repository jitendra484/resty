import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { AiOutlineMenuFold } from "react-icons/ai";
import { GiCrossMark } from "react-icons/gi";

import { Route, Routes } from 'react-router-dom';
import About from '../About/About';
import Contactus from '../Contactus/Contactus';
import News from '../News&Article/News';
import Services from '../Services/Services';
import Team from '../Team/Team';
import { IoMdArrowDropdown } from "react-icons/io";
import Home from '../Home/Home';






const Header = () => {
  
  // const [toggle, setToggle]= useState(false);
  const [toggle,setToggle]= useState(true);
  return (
    <>
    <div className='  w-full text-black '>
    <div className='max-w-[1240px] p-4 border-b border-white bg-slate-100  '>
     <div className='px-14 flex justify-between items-center '>
      <div className='   flex items-center gap-44 '>
        
        <h1 className=' text-3xl text-black md:text-5xl font-bold  cursor-pointer '>RESTY</h1>

        {
          toggle ?

          
          <GiCrossMark onClick={()=> setToggle(!toggle)} className='text-2xl md:hidden block text-black' />
          :
          <AiOutlineMenuFold onClick ={() => setToggle(!toggle)} className='text-2xl md:hidden block text-black'/>

          

          

        }
       
        

      </div>

      <div className='hidden md:block '>
      <nav className='flex  gap-6 items-center   '>
        <ul className='flex gap-6 font-semibold text-m '>
        
          <li className='hover:text-[#0a3f6a] transition-all cursor-pointer'> <Link to='/'>Home</Link></li>
          <li className='hover:text-[#0a3f6a] transition-all cursor-pointer'> <Link to ='/About'>About Us</Link></li>
          <li className='hover:text-[#0a3f6a] transition-all cursor-pointer'> <Link to='/Services' >Services</Link></li>

          <div className='relative group'>

          <div className='flex items-center hover:text-[#0a3f6a] transition-all cursor-pointer'>
          <li className='hover:text-[#0a3f6a] transition-all cursor-pointer'>
          Page</li>
          <IoMdArrowDropdown className='text-xl' />

          </div>

          <ul className='absolute hidden w-28 group-hover:block bg-white border border-gray-300 rounded-lg p-5'>
            <li  className="text-dark py-1 hover:text-blue-500 transition-all cursor-pointer">Page 1</li>
            <li  className="text-dark py-1 hover:text-blue-500 transition-all cursor-pointer">Page 2</li>
            <li  className="text-dark py-1 hover:text-blue-500 transition-all cursor-pointer">Page 3</li>
            <li  className="text-dark py-1 hover:text-blue-500 transition-all cursor-pointer">Page 4</li>
            <li  className="text-dark py-1 hover:text-blue-500 transition-all cursor-pointer">Page 5</li>
            <li  className="text-dark py-1 hover:text-blue-500 transition-all cursor-pointer">Page 6</li>
           
          </ul>

          </div>
         
         
          <li className='hover:text-[#0a3f6a] transition-all cursor-pointer'> <Link to='/Team'>Team</Link></li>
          <li className='hover:text-[#0a3f6a] transition-all cursor-pointer'> <Link to='/News'>Blog</Link> </li>
          <li className='hover:text-[#0a3f6a] transition-all cursor-pointer'> <Link to='/Contactus'>Contact</Link></li>
        </ul>
        <button className='bg-[#104CBA] hover:bg-[#1D2C38] p-3 px-7  rounded-lg text-white'>Meet With Us</button>
      </nav>


     


      </div>

      </div>
       
        {/* responsive menu */}
        <div className=' '>
      

       

        <ul className={`md:hidden  block  text-center w-full h-full  fixed font-semibold text-3xl py-4 text-[#104CBA] bg-black
          
          ${toggle ? 'left-[0%]' : 'left-[100%]'}
           `}>
        
        <li className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'>Home</li>
        <li className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'>About Us</li>
        <li className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'>Services</li>
        <li className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'>Page</li>
        <li className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'>Element</li>
        <li className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'> Blog</li>
        <li className='hover:text-[#0a3f6a] transition-all cursor-pointer p-2'>Contact</li>
        <button className=' md:hidden block w-full  bg-[#104CBA] hover:bg-[#1D2C38] p-3 px-5  rounded-lg text-white'>Meet With Us</button>
      </ul>

      </div>
      
    
    

     </div>
        
    
    </div>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path= "/About" element={<About/>}/>
      <Route path='/Contactus' element={<Contactus/>}/>
      <Route path='/News' element={<News/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Team' element={<Team/>}/>

    </Routes>
    </>
  )
}

export default Header

