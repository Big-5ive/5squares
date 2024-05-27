import React from 'react'
import { BsFillLightningChargeFill } from "react-icons/bs";

const HeroLoginText = () => {
  return (
    <div className='w-[50%] flex flex-col space-y-8 '>
        <div className="flex items-center space-x-3 text-white text-3xl font-semibold"><BsFillLightningChargeFill /> <span>Super Savers</span></div>
        <div className="text-white text-4xl font-semibold">5quares guarantees you swift shopping</div>
        <div className="text-white text-2xl font-semibold">* Updates Weekly</div>
        <button className='h-8 w-36 bg-white rounded-full flex-center text-[#333333] font-medium text-lg '>Shop now</button>
    </div>
  )
}

export default HeroLoginText
