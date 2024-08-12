import React from 'react'
import { PiWaveformThin } from "react-icons/pi";

const SectionOne = () => {
  return (
    <div className=' w-full min-h-screen bg-zinc-950 text-white' id='AboutSectionOne'>
        <div className="max-w-[1500px] px-6 mx-auto py-[100px] ">
            <div className="w-full md:w-4/5 mx-auto space-y-10">
                    <h1 className=' text-center font-mont font-[600] text-5xl w-3/4 mx-auto'>Lorem ipsum dolor sit amet <span className=' text-[silver]'>consectetur</span>.</h1>
                    <img src="https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className='w-full shadow-[0px_0px_10px_0px] shadow-[rgba(160,86,42,.2)] mx-auto aspect-square sm:aspect-[18/9] object-cover rounded-[40px]' />
                
                    <div className="flex justify-around">
                        <div className=' flex w-fit mx-auto space-x-[1px] text-[12px] md:text-sm lg:text-md font-mont font-[300] -mt-10'>
                            <PiWaveformThin className=' relative top-[5px] text-[rgba(160,86,42)]'/>
                            <p>elegance</p>
                        </div>

                        <div className=' flex w-fit mx-auto space-x-[1px] text-[12px] md:text-sm lg:text-md font-mont font-[300] -mt-10'>
                            <PiWaveformThin className=' relative top-[5px] text-[rgba(160,86,42)]'/>
                            <p>modernity</p>
                        </div>

                        <div className=' flex w-fit mx-auto space-x-[1px] text-[12px] md:text-sm lg:text-md font-mont font-[300] -mt-10'>
                            <PiWaveformThin className=' relative top-[5px] text-[rgba(160,86,42)]'/>
                            <p>convenience</p>
                        </div>

                        <div className=' flex w-fit mx-auto space-x-[1px] text-[12px] md:text-sm lg:text-md font-mont font-[300] -mt-10'>
                            <PiWaveformThin className=' relative top-[5px] text-[rgba(160,86,42)]'/>
                            <p>privacy</p>
                        </div>
                    </div>
                    
                    <div className=''>
                        <div className=' text-center sm:w-3/4 lg:w-1/2 font-mont font-[600] text-xl text-[silver]'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vitae similique asperiores eos, placeat voluptas est officia laboriosam iusto quibusdam numquam! Nobis magni cumque corrupti, molestias quos similique rerum ut.</p>
                        </div>
                        <div className=' text-center sm:w-3/4 lg:w-1/2 relative sm:left-1/4 mt-4 lg:left-1/2 font-mont font-[600] text-xl'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vitae similique asperiores eos, placeat voluptas est officia laboriosam iusto quibusdam numquam! Nobis magni cumque corrupti, molestias quos similique rerum ut.</p>
                        </div>
                    </div>
                
                <div className="grid lg:grid-cols-2 gap-5 pt-[60px]">

                    <div>
                        <img src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=" image" className=' aspect-square sm:aspect-video lg:aspect-square object-cover rounded-[40px]'/>
                    </div>

                    <div>
                        <div className=' space-y-2 relative top-[50%] translate-y-[-50%] '>
                            <h4 className=' font-mont font-[500] text-xl text-[rgb(209,189,182)]'>Lorem, ipsum dolor.</h4>
                            <h3 className=' font-mont font-[500] text-4xl text-[#f1f1f1]'> Lorem ipsum dolor sit.</h3>
                            <p className=' font-fig font-[600] text-lg mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempore ipsam a modi esse. Sit odit iure velit eum quaerat. Odio pariatur quas impedit et. Quia, maiores! Sint, unde quasi.</p>
                            <div className="ml-5 pt-3">
                                <button className=' bg-white text-black px-3 py-1 rounded-full font-mont font-[600] text-lg hover:tracking-widest transition-all duration-150'>contact me</button>
                            </div>
                        </div>
                    </div>

                </div>
         
            </div>
        </div>

    </div>
  )
}

export default SectionOne