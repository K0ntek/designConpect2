import React from 'react'
import { PiWaveformThin } from "react-icons/pi";
import { FaStarOfLife } from "react-icons/fa6";

const SectionTwo = () => {
  return (
    <div className=' w-full bg-[#f3f3f3]'  id='AboutSectionTwo'>
        <div className=' relative p-6 max-w-[1500px] mx-auto'>
                {/* <h1 className=' text-center font-mont font-[600] text-4xl uppercase'>Lorem ipsum dolor sit.</h1> */}

                <div className=' md:w-2/3 mx-auto my-10 grid'>

                    <div className='md:w-3/4 relative mb-5'>
                        <FaStarOfLife className=' text-xl text-[rgba(160,86,42)] absolute'/>
                        <h1 className=' font-mont font-[700] text-5xl mt-10 '>Lorem ipsum dolor sit amet.</h1>
                    </div>

                    <div className=' w-[90%] md:w-3/4 relative left-[10%] md:left-1/4 md:ml-5 text-center'>
                        {/* <PiWaveformThin className=' ml-5 text-5xl text-[rgba(160,86,42)]'/> */}
                        <p className=' font-fig font-[600] text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, mollitia deserunt? Voluptatibus ullam dolores nobis doloribus nostrum, distinctio consectetur minima.</p>
                    </div>


                <div className='  w-[90%] md:w-3/4 text-center pt-10'>
                        <p className=' font-fig font-[600] text-xl text-[#ad5928]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, mollitia deserunt? Voluptatibus ullam dolores nobis doloribus nostrum, distinctio consectetur minima.</p>
                    </div>

                </div>

                <div className="grid grid-cols-2 gap-2 h-fit">

                    <div className="w-full h-full bg-black rounded-2xl md:rounded-[40px] overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image"  className=' h-full object-cover'/>
                    </div>

                    <div className="grid gap-2 h-full">

                            <img src="https://images.unsplash.com/photo-1524061662617-6a29d732e3ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className=' rounded-2xl md:rounded-[40px] h-full aspect-[20/9] object-cover ' />

                            <img src="https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className=' rounded-2xl md:rounded-[40px] h-full aspect-[4/3] object-cover ' />

                    </div>

                </div>

          <div className="flex justify-around text-black w-full">
                        <div className=' flex w-fit mx-auto space-x-[1px] text-[12px] md:text-sm lg:text-md font-mont font-[500]'>
                            <PiWaveformThin className=' relative top-[5px] text-[rgba(160,86,42)]'/>
                            <p>elegance</p>
                        </div>

                        <div className=' flex w-fit mx-auto space-x-[1px] text-[12px] md:text-sm lg:text-md font-mont font-[500]'>
                            <PiWaveformThin className=' relative top-[5px] text-[rgba(160,86,42)]'/>
                            <p>modernity</p>
                        </div>

                        <div className=' flex w-fit mx-auto space-x-[1px] text-[12px] md:text-sm lg:text-md font-mont font-[500]'>
                            <PiWaveformThin className=' relative top-[5px] text-[rgba(160,86,42)]'/>
                            <p>convenience</p>
                        </div>

                        <div className=' flex w-fit mx-auto space-x-[1px] text-[12px] md:text-sm lg:text-md font-mont font-[500]'>
                            <PiWaveformThin className=' relative top-[5px] text-[rgba(160,86,42)]'/>
                            <p>privacy</p>
                        </div>
                    </div>

        </div>
    </div>
  )
}

export default SectionTwo