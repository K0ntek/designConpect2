import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { PiWaveformThin } from "react-icons/pi";

const AboutCarousel = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
      const rooms = [
        {
          image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          room: 'bedroom',
          size: '20m2'
        },
        {
          image: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          room: 'living room',
          size: '50m2'
        },
        {
          image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          room: 'kitchen',
          size: '20m2'
        },
        {
          image: 'https://images.unsplash.com/photo-1604014237744-2f4ab6bfbcc2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          room: 'bathroom',
          size: '10m2'
        },
    
      ]

  return (
   <div className=' grid'>
    <Carousel
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={5000}
        autoPlay={true}
        arrows={true}
        className=" relative">
      {rooms.map((roomElement, i) => {
              return (
                      <div className=' project group rounded-3xl relative overflow-hidden mx-2 transition-all duration-500'>
                              <div style={{
                                  background: `url(${roomElement.image})`,
                                  aspectRatio: '16/9',
                                  backgroundRepeat: 'no-repeat',
                                  backgroundSize: 'cover',
                                  backgroundPositionY:'50%'
                              }} className=""></div>

                                  <div className=" bg-black/20 w-full h-full z-40 transition-all absolute top-0 left-0">

                                      <div className=" absolute bottom-2 left-2">
                                              <h2 className="text-lg font-montserrat font-[300] tracking-wide text-[rgb(255,255,255)]">{roomElement.room}</h2>
                                      </div>

                                      <div className=" absolute top-2 left-2">
                                              <h2 className="text-md font-montserrat font-[300] tracking-wide text-[rgb(255,255,255)]">{roomElement.size}</h2>
                                      </div>

                                      <PiWaveformThin className=" absolute top-2 right-2 text-white text-xl"/>

                                  </div>
                      </div>
              )
          })}
    </Carousel>
   </div>
  )
}

export default AboutCarousel