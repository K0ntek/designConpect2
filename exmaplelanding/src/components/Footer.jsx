import React from 'react'
import {  BsFacebook, BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from "react-icons/fa";
// import { Link } from 'react-scroll';
import { socials } from './Contact';
import { navElements } from './Navbar';

const Footer = () => {

  return (
   <div className='w-full bg-white'>
        {/* <h1 className=' font-montserrat font-[700] text-2xl tracking-wider ml-10 bg-gradient-to-r from-[#585858] to-[#242424]
                                inline-block text-transparent bg-clip-text'>Lorem ipsum dolor sit amet.</h1> */}
     <div className=' py-5 pb-7 md:flex justify-between space-y-4 md:space-y-0 max-w-[1400px] px-10 mx-auto'>

            <div className=' text-black'>
                <p className=' relative top-1 font-[600] font-montserrat text-black text-[14px] text-center'> © 2024 UI <span className=' font-[700] text-[rgb(126,206,255)]'><a href="https://jakubkontek.onrender.com">JAKUB KONTEK</a></span> - All rights reserved</p>
            </div>

            <div className=''>
                <div className='w-fit mx-auto'>

                <div className=' gap-2 flex flex-wrap mx-auto font-mont font-[500] justify-center relative top-1'>
                    {navElements.map((element, i)=>{
                        return(
                            <p className=' font-mont font-[700] hover:text-[rgb(126,197,241)] cursor-pointer transition-all duration-150'>{element.name}</p>
                        )
                    })}
                </div>
                </div>
            </div>

            <div className=''>
                <div className='w-fit mx-auto'>

                <div className=' flex gap-2 mx-auto justify-center'>
                    {socials.map((socialElement, i)=>{
                        return(
                            <a href={socialElement.link} key={i} className=' text-xl text-black hover:text-[#c2703e] transition-all duration-150'>{socialElement.icon}</a>
                        )
                    })}
                </div>
                </div>
            </div>

    </div>
   </div>
  )
}

export default Footer