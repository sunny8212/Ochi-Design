import React from 'react'

function Features() {
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] pb-20 border-zinc-700'>
        <h1 className='text-7xl tracking-tight'>Featured projects</h1>
      </div>
      <div className='px-20'>
      <div className="cards w-full flex gap-10 mt-10">
        
          <div className="cardcontainer relative w-1/2 h-[75vh] ">
            <h1 className="absolute left-full top-[50%] -translate-x-1/2 -translate-y-1/2 z-[9] text-8xl font-semibold leading-none tracking-tighter text-[#CDEA68]">
              {"VISE".split('').map((item, index) => <span>{item}</span>)}
            </h1>
            <div className="card w-full h-full rounded-xl">
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="bg1" />
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className="absolute rigth-full top-[50%] -translate-x-1/2 -translate-y-1/2 z-[9] text-8xl font-semibold leading-none tracking-tighter text-[#CDEA68]">
              {"VISE".split('').map((item, index) => <span>{item}</span>)}
            </h1>
            <div className="card w-full h-full rounded-xl">
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="bg2" />
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Features