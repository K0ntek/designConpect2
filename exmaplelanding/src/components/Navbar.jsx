import React, {useState} from 'react'
import { FaStarOfLife } from "react-icons/fa6";
import { Link } from 'react-scroll';

export const navElements = [
    {
        link: 'header',
        name: 'Home'
    },
    {
        link: 'interior',
        name: 'Interior'
    },
    {
        link: 'about',
        name: 'About'
    },
    {
        link: 'contact',
        name: 'Contact'
    },
]

const Navbar = () => {

    const [activeNavbar, setActiveNavbar] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (activeNavbar === "navbarMenu") {
            setActiveNavbar("navbarMenu navbarActive");
        } else setActiveNavbar("navbarMenu");

        // Icon Toggler
        if (icon === "navbarToggler") {
        setIcon("navbarToggler toggledIcon");
        } else setIcon("navbarToggler");
    };

  return (
    <div className=' w-full h-[60px] bg-white fixed top-0 z-[99]'>
        <div className=' max-w-[1500px] sm:px-6 mx-auto relative top-[50%] translate-y-[-50%] flex z-[98] sm:z-[99] bg-white'>

        <div className={` fixed top-0 right-4 z-[99] text-2xl space-y-[4px] cursor-pointer group p-2 sm:hidden ${icon}`} onClick={navToggle}>
            <div className=" line line1 w-7 h-[3px] bg-black transition-all duration-200"></div>
            <div className=" line line2 w-7 h-[3px] bg-black transition-all duration-200"></div>
            <div className=" line line3 w-7 h-[3px] bg-black transition-all duration-200 group-hover:w-4 group-hover:ml-3"></div>
        </div>

                <div className=' justify-center mx-auto sm:mx-0 sm:justify-start'>
                    <Link to='header' spy={true} smooth={true}>
                    <FaStarOfLife className=' text-4xl z-[99] cursor-pointer'/>
                    </Link>
                </div>

               <div className={`${activeNavbar} fixed sm:top-0 sm:absolute sm:right-6 bg-white gap-3 w-full sm:w-fit z-[-1]`}>
                    <ul className=' grid sm:flex gap-3  w-fit mx-auto sm:mx-0 p-6 sm:p-0 mt-2'>
                        {navElements.map((element, i)=>{
                            return(
                                <li className='navElement font-mont font-[700] hover:text-[rgb(255,149,73)] cursor-pointer transition-all duration-150'>
                                    <Link to={element.link} spy={true} smooth={true}>
                                        <p className=''>{element.name}</p>
                                    </Link>
                                </li>
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