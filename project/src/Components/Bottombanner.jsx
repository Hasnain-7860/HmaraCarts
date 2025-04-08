import React from 'react'
import { assets, features } from '../assets/assets'

const Bottombanner = () => {
  return (
    <div className='relative mt-24'>
        <img className='w-full hidden md:block' src={assets.bottom_banner_image} alt="banner" />
        <img className='w-full  md:hidden' src={assets.bottom_banner_image_sm} alt="banner" />
        <div className='absolute inset-0 flex flex-col item-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24'>
          <div>
            <h1 className='text-2xl md:text-3xl font-semibold text-green-500 mb-'>
              Why We Are the Best?
            </h1>
            {features.map((data,index)=>(
              <div className='flex items-center gap-4 mt-2' key={index}>
                <img className=' w-9 md:w-11 ' src={data.icon} alt={data.title} />
                <div>
                <h3 className='text-lg md:text-xl font-semibold'>{data.title}</h3>
                <p className='text-gray-500/70 text-xs md:text-sm'>{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


    </div>
  )
}

export default Bottombanner