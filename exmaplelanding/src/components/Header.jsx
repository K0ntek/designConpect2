import React, { useEffect } from 'react'
import { FaStarOfLife } from "react-icons/fa6";
import { PiApproximateEqualsBold } from "react-icons/pi";
import { rooms } from './About';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { PiWaveformThin } from "react-icons/pi";
import gsap from 'gsap';

const Header = () => {
  
    const pros = [
        {
            prosElement: 'House area',
            prosNumber: '220m2'
        },
        {
            prosElement: 'Rooms',
            prosNumber: '10 rooms'
        },
        {
            prosElement: 'Garage',
            prosNumber: ' 2 quarters'
        },
    ]

    const responsive = {
        mobile: {
          breakpoint: { max: 3000, min: 0 },
          items: 1
        }
      };

      useEffect(()=>{
        gsap.fromTo('.headingTitle', {x: -200, opacity:0}, {x:0, opacity:1, delay:.2, duration:.8, stagger:.1})
        gsap.fromTo('.headingContent', {y: 200, opacity:0}, {y:0, opacity:1, delay:.2, duration:.8, stagger:.3})
        gsap.fromTo('.headingContentElement', {opacity:0}, { opacity:1, delay:.8, duration:.2, stagger:.2})
      },[])

    return (
    <div className=' pt-[100px] relative '>
        <div className="grid lg:grid-cols-[3fr_2fr] mb-5 gap-4">

                <div className=' space-y-4 relative'>
                    <h1 className=' text-5xl md:text-8xl font-mont font-[700] text-center lg:text-start lg:ml-10 z-[98] headingTitle'>PEAK OF <span className='text-[rgb(232,208,205)]'>LUXURY</span></h1>

                        {/* <PiApproximateEqualsBold className=' text-4xl absolute right-[10%] top-[15%] z-[-1] text-[rgb(255,110,58)]'/>
                        <PiApproximateEqualsBold className=' text-4xl absolute right-[20%] bottom-[20%] z-[-1] text-[rgb(219,219,219)]'/> */}

                        <div>
                            <div className=' px-6 sm:w-3/4 mx-auto lg:mx-0'>
                                <p className='text-start text-md ml-6 font-fig font-[800] headingTitle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsa porro iure nihil rem tenetur vitae deserunt placeat! Quos, sequi.</p>
                                {/* text-[rgb(255,110,58)] */}
                            </div>
                        </div>
                </div>

            <div className='headingContent bg-white rounded-[40px] p-6 shadow-[0px_0px_10px_0px] shadow-black/20'>
                    <div className="relative top-[50%] translate-y-[-50%]">
                        <div className=' grid sm:grid-cols-2 gap-4'>
                            <div>
                                <div className=' relative top-[50%] translate-y-[-50%]'>
                                    <PiApproximateEqualsBold className=' text-4xl headingContentElement'/>
                                    <h1 className=' font-fig font-[600] text-3xl headingContentElement'>LUXURY INTERIOR</h1>
                                    <div className=' bg-[rgb(238,238,238)] shadow-[0px_0px_10px_0px] shadow-black/20 p-3 rounded-3xl mt-4'>
                                        {pros.map((element, i)=>(
                                            <div className=' flex justify-between'>
                                                <p className=' font-fig font-[300] headingContentElement'>{element.prosElement}</p>
                                                <p className=' font-fig font-[600] headingContentElement'>{element.prosNumber}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className=' relative'>
                            {/* <div className="absolute right-5 bottom-3 z-[99]">
                                    <button className=' font-fig font-[600] z-[99] bg-[rgb(255,110,58)] text-[12px] rounded-full py-1 px-2 text-white'> see more</button>
                            </div> */}
                            <div className="grid relative top-[50%] translate-y-[-50%]">
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      autoPlaySpeed={5000}
                      autoPlay={true}
                      arrows={false}
                      className=" relative">
                        {rooms.map((roomElement, i) => {
                                return (
                                        <div className='headingContentElement project group rounded-3xl relative overflow-hidden transition-all duration-500'>
                                               <div className=' overflow-hidden'>
                                                <div style={{
                                                        background: `url(${roomElement.image})`,
                                                        aspectRatio: '1/1',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundSize: 'cover',
                                                        backgroundPositionY:'50%'
                                                    }} className=""></div>
                                               </div>

                                                    <div className=" bg-black/20 w-full h-full z-40 transition-all absolute top-0 left-0">

                                                        <div className=" absolute bottom-2 left-2">
                                                                <h2 className="text-lg font-montserrat font-[300] tracking-wide text-[rgb(255,255,255)]">{roomElement.room}</h2>
                                                        </div>

                                                        <div className=" absolute top-2 left-2">
                                                                <h2 className="text-md font-montserrat font-[300] tracking-wide text-[rgb(255,255,255)]">{roomElement.size}</h2>
                                                        </div>

                                                        <PiWaveformThin className=" absolute top-2 right-2 text-white text-4xl"/>
                                                        <div className="absolute right-5 bottom-3 z-[99]">
                                                                <button className=' font-fig font-[600] z-[99] bg-zinc-950 text-[12px] rounded-full py-1 px-2 text-white'> see more</button>
                                                        </div>

                                                    </div>
                                        </div>
                                )
                            })}
                    </Carousel>
                    </div>
                            </div>
                        </div>
                    </div>
            </div>

        </div>

        <div className="grid lg:grid-cols-[5fr_2fr] gap-2 md:gap-5">
            <div className='headingContent overflow-y-hidden rounded-[40px] md:rounded-[60px] max-h-[630px] shadow-[0px_0px_10px_0px] shadow-black/20'>
                <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="headerImage" className=' aspect-square sm:aspect-video xl:aspect-auto h-full w-full object-cover relative top-[50%] translate-y-[-50%] '/>
            </div>

            <div className='sm:grid-cols-2 lg:grid-cols-1 grid gap-2 md:gap-5 h-full '>
                    <div className='headingContent bg-[rgb(238,238,238)] rounded-[40px] p-6 min-h-[300px]'>
                                <FaStarOfLife className='my-2 text-xl '/>
                                {/* <h1 className=' font-mont font-[700] text-3xl'>Lorem, ipsum dolor.</h1> */}
                                <div>
                                    <div className=''>
                                        <p className=' font-fig font-[700] text-[22px] xl:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <button className=' font-fig font-[600] z-[99] bg-black text-white text-xl rounded-full py-1 px-2 mt-4'> see more</button>
                                    </div>
                                </div>   
                    </div>

                    <div className='headingContent bg-[#0a0a0a] text-white rounded-[40px] p-6 min-h-[300px]'>
                        <FaStarOfLife className='my-2 text-xl'/>
                        {/* <h1 className=' font-mont font-[700] text-3xl upp'>Lorem, ipsum dolor.</h1> */}
                        <p className=' font-fig font-[700] text-[22px] xl:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, odit?</p>
                        <button className=' font-fig font-[600] z-[99] bg-white text-xl rounded-full py-1 px-2 text-black mt-4'> see more</button>
                    </div>
            </div>

        </div>

    </div>
  )
}

export default Header