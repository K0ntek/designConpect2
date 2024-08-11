import React, { useEffect } from 'react'
import { rooms } from './About'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { PiWaveformThin } from "react-icons/pi";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const RoomsCarousel = () => {
  
    const responsive = {
        mobile: {
          breakpoint: { max: 3000, min: 0 },
          items: 1
        }
      };
  
      useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo('.interiorCarousel', {y: 200, opacity:0}, {y:0, opacity:1, duration:.5, stagger:.2,
            scrollTrigger:{trigger:'.interiorCarouselWrapper', start: 'top 60%'}})
      },[])

    return (
    <div className='w-full'>

        <div className="max-w-[1500px] mx-auto mt-10 ">
                        <Carousel
                        responsive={responsive}
                        infinite={true}
                        arrows={false}
                        swipeable={true}
                        draggable={true}
                        className=" relative ">
                            {rooms.map((roomElement, i)=>(
                                <div key={i} className=' rounded-[40px] project group relative transition-all duration-500'
                                     style={{
                                    background: `url(${roomElement.image})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPositionY:'70%',
                                    backgroundPositionX:'50%'}} 
                                    >
                                    <h1 className=' absolute bottom-6 right-6 font-fig font-[600] text-white z-[99] '>swipe left/right</h1>

                                    <div className="p-[16px] relative z-[99]">
                                    <div className=' bg-zinc-950/70 w-full sm:w-2/3 lg:w-2/5 h-full rounded-3xl '>
                                            <div className=' text-center mx-auto p-5 space-y-3'>
                                                <h1 className=' font-mont font-[300] text-white text-3xl uppercase tracking-tight '>{roomElement.room}</h1>
                                                <Carousel
                                                    responsive={responsive}
                                                    infinite={true}
                                                    arrows={false}
                                                    swipeable={true}
                                                    draggable={true}
                                                    autoPlay={true}
                                                    autoPlaySpeed={5000}
                                                    className=" relative ">
                                                        {/* {rooms[images].map((roomElement, i)=>(
                                                             <img src={roomElement.image} alt="image" className=' object-cover w-2/3 rounded-3xl mx-auto aspect-square' style={{pointerEvents: 'none'}} />
                                                        ))} */}
                                                        {roomElement.images.map((image, i)=>(
                                                            <img src={image.image} alt="image" className=' object-cover w-2/3 rounded-3xl mx-auto aspect-square' style={{pointerEvents: 'none'}} />
                                                        ))}
                                                    </Carousel>
                                                {/* <img src={roomElement.image} alt="image" className=' object-cover w-2/3 rounded-3xl mx-auto aspect-square' style={{pointerEvents: 'none'}} /> */}
                                                <p className=' font-fig font-thin text-white text-lg w-4/5 mx-auto text-justify '>{roomElement.desc}</p>
                                            </div>
                                    </div>
                                    </div>

                                </div>
                            ))}
                        </Carousel>
        </div>
    </div>
  )
}

export default RoomsCarousel