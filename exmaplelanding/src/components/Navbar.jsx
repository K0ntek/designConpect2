import React from 'react'
import { FaStarOfLife } from "react-icons/fa6";

export const navElements = [
    {
        link: '',
        name: 'Home'
    },
    {
        link: '',
        name: 'Interior'
    },
    {
        link: '',
        name: 'About'
    },
    {
        link: '',
        name: 'Contact'
    },
]

const Navbar = () => {

  return (
    <div className=' w-full h-[60px] bg-white fixed top-0 z-[99]'>
        <div className=' max-w-[1500px] px-6 mx-auto relative top-[50%] translate-y-[-50%] flex z-[99] bg-white'>

                <div className=' justify-start'>
                    <FaStarOfLife className=' text-4xl'/>
                </div>

               <div className=' absolute right-6 flex gap-3'>
                    <ul className=' flex gap-3 mt-1'>
                        {navElements.map((element, i)=>{
                            return(
                                <li className=' font-mont font-[700] hover:text-[rgb(238,238,238)] cursor-pointer transition-all duration-150'>{element.name}</li>
                            )
                        })}
                    </ul>
                    {/* <button className=' bg-zinc-950 rounded-full text-white font-fig font-[600] py-1 px-3'>Contact</button> */}
               </div>
        </div>
    </div>
  )
}

export default Navbar