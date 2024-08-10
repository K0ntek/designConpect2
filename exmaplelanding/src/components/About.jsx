import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { PiWaveformThin } from "react-icons/pi";
import { FaStarOfLife } from "react-icons/fa";

export const rooms = [
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

const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1400, min: 750 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1
    }
  };

  const aboutPros = [
    {
      icon: <PiWaveformThin/>,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consequuntur culpa laboriosam, eum quam perspiciatis?'
    },
    {
      icon: <FaStarOfLife/>,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consequuntur culpa laboriosam, eum quam perspiciatis?'
    },
    {
      icon: <PiWaveformThin/>,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consequuntur culpa laboriosam, eum quam perspiciatis?'
    },
  ]


  return (
    <div id='about' className=' pt-[70px]'>
        <div className='w-full min-h-screen bg-[rgb(238,238,238)]'>
            <div className="max-w-[1500px] px-6 py-10 mx-auto">

              <div className="grid lg:grid-cols-[5fr_3fr] gap-10 ">

              <div className="grid gd-carousel-wrapper">
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      autoPlaySpeed={5000}
                      autoPlay={true}
                      arrows={false}

                      className=" relative gd-carousel">
                        {rooms.map((roomElement, i) => {
                                return (
                                        <div className=' project group rounded-3xl relative overflow-hidden mx-[2px] transition-all duration-500'>
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
                      <div className=' mt-5'>
                      {/* <h2 className='text-[rgba(255,110,58)] font-mont font-[600] text-2xl'>subheading</h2> */}
                          <h1 className=' text-[#000000] w-full sm:w-4/5 lg:w-2/3 font-fig font-[400] text-5xl lg:text-6xl tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                          <div className="flex gap-2 mt-4">

                            <div className=' border-[1px] border-black rounded-full px-5 py-2 cursor-default hover:bg-zinc-950 hover:text-white transition-all duration-150'>
                                <p className=' font-mont font-[500]'>modern</p>
                            </div>

                            <div className=' border-[1px] border-black rounded-full px-5 py-2 cursor-default hover:bg-zinc-950 hover:text-white transition-all duration-150'>
                                <p className=' font-mont font-[500]'>cozy</p>
                            </div>

                            <div className=' border-[1px] border-black rounded-full px-5 py-2 cursor-default hover:bg-zinc-950 hover:text-white transition-all duration-150'>
                                <p className=' font-mont font-[500]'>spacious</p>
                            </div>

                          </div>
                      </div>
                    </div>


                  <div className=''>
                      <div className=' relative top-[50%] translate-y-[-50%] md:w-1/2 lg:w-3/4 lg:left-1/4 xl:w-4/5 xl:left-1/5'>
                          <p className=' text-start font-fig font-[600] text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repudiandae culpa, voluptatem harum quasi enim dicta! Perspiciatis error sequi minima, aut eius, fugiat explicabo soluta, quam veniam autem obcaecati.</p>
                      
                            <h1 className=' font-fig font-[600] text-5xl mt-2'>Lorem, ipsum dolor.</h1>

                          <div className=' mt-5'>
                          <div className="flex mt-6">
                            {rooms.map((littleImage, i)=>(
                              <div className=' relative'>
                                <div className=' absolute left-0 top-0 w-[50px]' style={{left: `calc(40px * ${i})`}}>
                                  <img src={littleImage.image} alt="littleImage" className='w-full aspect-square object-cover rounded-full border-[2px] border-[rgb(238,238,238)]' />
                                </div>
                              </div>
                            ))}
                            <p className=' relative top-[10px] font-mont font-[600]' style={{marginLeft: `calc(45px*${rooms.length})`}}>all rooms in a view</p>
                          </div>
                      </div>

                      </div>
                  </div>

              </div>


              <div className=' sm:w-3/4 lg:w-2/3 mt-[60px] mx-auto'>
              <h1 className=' text-center font-fig font-[700] text-4xl mb-10 mt-[100px]'>Lorem ipsum dolor sit amet.</h1>

               <div className=' space-y-6 md:space-y-0'>
                  <h1 className=' font-mont tracking-tight font-[700] text-5xl lg:text-6xl md:w-1/2 relative md:top-3'>Lorem ipsum dolor sit amet</h1>
                  <div className='md:w-1/2 relative md:left-1/2 md:-top-10'>
                        <div>
                          <FaStarOfLife className='text-[rgb(126,206,255)] text-xl'/>
                        </div>
                    <p className=' font-fig font-[500] text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita distinctio accusantium maxime, voluptatem nemo reprehenderit inventore aut corporis temporibus aliquam?</p>
                  </div>
                </div>

                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="aboutImage" className=' shadow-[0px_0px_20px_0px] shadow-black/10 mt-6 md:mt-0 rounded-[40px] lg:rounded-[60px]'/>

                <div className="grid lg:grid-cols-3 gap-4 mt-4">
                  {aboutPros.map((prosElement, i)=>(
                    <div className=' justify-center space-y-2 text-center'>
                      <div className=' mx-auto justify-center text-center w-fit'>
                        <h1 className=' mx-auto text-center text-4xl justify-center'>{prosElement.icon}</h1>
                      </div>

                      <p className=' mx-auto w-5/6 justify-center text-start text-md font-mont font-[600]'>{prosElement.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
        </div>

    </div>
  )
}

export default About