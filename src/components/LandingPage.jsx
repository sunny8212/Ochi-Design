import React from 'react'
import { FaLocationArrow } from "react-icons/fa";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1 '>
      <div className="textstructure mt-52 px-20">
        {["we create", "eye opening", "presentations"].map((item, index) => { return (
          <div key={index} className="masker">
            <div className="w-fit flex items-end overflow-hidden">
              {index===1 && (<div className='mr-[1vw] rounded-md w-[8vw] h-[5.7vw] relative -top-[1vw]  bg-red-500'></div>)}
            <h1 className="flex items-center h-full uppercase text-[7vw] leading-[7vw] tracking-tighter font-['Founders_Grotesk'] font-medium ">
              {item}
            </h1>
            </div>
          </div>
        )})}
      </div>
      <div className="border-t-2 border-zinc-700 mt-20 flex justify-between items-center py-5 px-10">
        {["For public and private companies", "From the forst pitch to IPO"].map((item, index)=> 
        <p key={index} className="text-md font-light tracking-tight leading-none">{item}</p>
        )}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] border-zinc-700 rounded-full font-light text-md uppercase">start the project</div>
          <div className="w-10 h-10 rounded-full border-zinc-400 border-[1px] flex items-center justify-center"><FaLocationArrow/></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
