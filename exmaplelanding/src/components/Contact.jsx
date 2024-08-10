import React from 'react'
import { useState, useRef } from 'react'
// import { Link } from 'react-scroll';
import { FaInstagram } from "react-icons/fa";
import { BsFacebook } from 'react-icons/bs'
import { FaLinkedinIn } from "react-icons/fa";
import { rooms } from './About';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { PiWaveformThin } from "react-icons/pi";

export const socials = [
  { 
      icon: <BsFacebook />,
      link: 'https://www.facebook.com/profile.php?id=100009894456441'
  },
  { 
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/k0ntek_/'
  },
  { 
      icon: <FaLinkedinIn />,
      link: 'https://www.linkedin.com/in/jakub-kontek-33909b2a1/'
  },
]

const Contact = ({option, price}) => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) =>{
      e.preventDefault();
    }

    const responsive = {
        mobile: {
          breakpoint: { max: 3000, min: 0 },
          items: 1
        }
      };

  return (
   <div className="w-full bg-white">
    <div className=' max-w-[1500px] px-6 mx-auto'>
     <div className=' grid lg:grid-cols-[35%_65%] py-10 gap-5 ' id='contact'>

     <div className=' max-w-[700px] bg-[#f7f7f7] lg:w-full mx-auto  text-black rounded-3xl'>
            <div className=' mx-auto max-w-[700px]'>
            <div className=' space-y-3 font-montserrat font-[500] mx-auto'>
                <div className="grid">
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlaySpeed={5000}
                        autoPlay={true}
                        arrows={false}
                        className="">
                            {rooms.map((roomElement, i) => {
                                    return (
                                            <div className=' project group rounded-3xl relative overflow-hidden transition-all duration-500'>
                                                <div className=' overflow-hidden'>
                                                    <div style={{
                                                            background: `url(${roomElement.image})`,
                                                            aspectRatio: '2/1',
                                                            backgroundRepeat: 'no-repeat',
                                                            backgroundSize: 'cover',
                                                            backgroundPositionY:'50%',
                                                        }} className=""></div>
                                                </div>

                                                        <div className=" bg-black/20 w-full h-full z-40 transition-all absolute top-0 left-0">
    {/* 
                                                            <div className=" absolute bottom-2 left-6">
                                                                    <h2 className="text-xl font-montserrat font-[400] tracking-wide text-[rgb(255,255,255)]">{roomElement.room}</h2>
                                                            </div>

                                                            <div className=" absolute top-2 left-6">
                                                                    <h2 className="text-xl font-montserrat font-[400] tracking-wide text-[rgb(255,255,255)]">{roomElement.size}</h2>
                                                            </div> */}

                                                            <PiWaveformThin className=" absolute top-2 right-2 text-white text-5xl"/>
                                                        </div>
                                            </div>
                                    )
                                })}
                        </Carousel>
                </div>
                
                    <div className=' p-4'>
                        <div>
                            <h1 className=' font-montserrat text-3xl font-[500] text-[rgb(0,0,0)]'>Contact with us</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, blanditiis?</p>
                        </div>

                            <div>
                                <div className="flex space-x-2 ">
                                    {/* <MdEmail className=' mt-2 text-xl rounded-full text-[rgb(126,206,255)]'/> */}
                                    <p className='text-xl mt-1'>Email us</p>
                                </div>
                                <p className=' ml-3'>examplemail@gmail.com</p>
                            </div>
                            
                        <div>
                                <div className="flex space-x-2">
                                    {/* <FaPhoneAlt className=' mt-2 text-xl rounded-full text-[rgb(126,206,255)]'/> */}
                                    <p className='text-xl mt-1'>Call us</p>
                                </div>
                                <p className=' ml-3'> +48 123 456 789</p>
                        </div>

                        <div>
                                <div className="flex space-x-2">
                                    {/* <TiPin className=' mt-2 text-xl rounded-full text-[rgb(126,206,255)]'/> */}
                                    <p className='text-xl mt-1'>Find that house </p>
                                </div>
                                <p className=' ml-3'> example street 0/0 - city</p>
                        </div>

                        <div>
                                <div className="flex space-x-2">
                                    {/* <FaClock className=' mt-2 text-xl rounded-full text-[rgb(126,206,255)]'/> */}
                                    <p className='text-xl mt-1'>Visit us</p>
                                </div>
                                <p className=' ml-3'> everyday!</p>
                        </div>

                        <div className="flex gap-3 pt-3">
                                {socials.map((socialElement, i)=>{
                                return(
                                    <div key={i}>
                                    <a href={socialElement.link}  className=' text-2xl text-black hover:text-[rgb(126,206,255)] transition-all duration-150'> {socialElement.icon}</a>
                                    </div>
                                )
                                })}
                            </div>
                    </div>

                </div>
            </div>
            </div>

            <div className="w-full mx-auto">
            <div className=' bg-[#f7f7f7] relative rounded-[40px] p-5 sm:pt-10 pb-[70px] max-w-[700px] lg:max-w-full mx-auto'>
                <div className=''>
                    <div className=" mb-6">
                    {/* <h2 className=' font-montserrat text-xl font-[600] tracking-tight
                                            text-[rgb(126,206,255)]'>CONTACT</h2> */}
                    <h1 className=' text-4xl font-montserrat font-[500] text-black'>Want to get in touch?</h1>
                    <p className=' font-montserrat font-[500]'>Leave us your message and we'll respond within 24 hours!</p>
                    </div>

                    <div className=' text-black'>
                        <form onSubmit={handleSubmit} className='space-y-5'>

                        <div className="grid sm:grid-cols-2 gap-5">
                        <div className=''>
                            <h1 className=' font-fig font-[600] text-[14px] ml-10'> name</h1>
                            <input type="text" onChange={(e)=> setName(e.target.value)} id="name" required className=' bg-[#eee] w-full p-2 rounded-2xl focus:outline-none' value={name}/><br />
                        </div>
                        <div className=''>
                            <h1 className=' font-fig font-[600] text-[14px] ml-10'>surname</h1>
                            <input type="text" onChange={(e)=> setSurname(e.target.value)} id="name" required className=' bg-[#eee] w-full p-2 rounded-2xl focus:outline-none' value={surname}/><br />
                        </div>
                        </div>
                        
                        <div className=''>
                            <h1 className=' font-fig font-[600] text-[14px] ml-10'>e-mail</h1>
                            <input type="email" onChange={(e)=> setEmail(e.target.value)} id="email" required className=' bg-[#eee] w-full p-2 rounded-2xl focus:outline-none' value={email}/><br />
                        </div>

                        <div className=''>
                            <h1 className=' font-fig font-[600] text-[14px] ml-10'>message</h1>
                            <textarea onChange={(e)=> setMessage(e.target.value)} id="message" required cols="30" rows="10" className=' bg-[#eee] p-2 w-full rounded-2xl focus:outline-none' value={message}></textarea><br />
                        </div>

                        <div className=' absolute right-5 bottom-5'>
                            <button type='submit' className=' bg-zinc-950 text-white px-5 py-2 font-[600] rounded-full hover:tracking-wider transition-all duration-200 '> SUBMIT</button></div>
                        </form>
                    </div>
                </div>
            </div>
            </div>

    </div>
   </div>
   </div>
  )
}

export default Contact