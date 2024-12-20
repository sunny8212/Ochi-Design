import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-["Neue_Montreal"] text-6xl leading-[3vw] text-[3.5vw] tracking-tighter'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prodducts, explain complex ideas, and hire great people.</h1>

      {/* our approach */}
      <div className="w-full flex gap-5 border-t-[1px] mt-20 pt-10 border-[#738146]">
        <div className="w-1/2 ">
          <h1 className='text-[4vw]'>Our approach: </h1>
          <button className=" uppercase flex gap-10 items-center px-10 mt-10 py-6 bg-zinc-900 rounded-full text-white">Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] rounded-3xl bg-red-600"><img className="w-full h-full object-cover rounded-3xl" src="\src\assets\bg.jpg" alt="bg" /></div>
      </div>
    </div>
  )
}

export default About