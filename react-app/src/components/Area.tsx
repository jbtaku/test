import React from 'react'
import { airPollutants } from '../utils/vars'

type Props = {
  className?: string;
  name: string
}

function Area({ className, name }: Props) {
  return (
    <div className={className + ' bg-[#74b0fc] rounded-md flex flex-col justify-center'}>
      <div className='flex items-center justify-center xl:my-auto'>
        <p className='text-white text-xl xl:text-3xl font-bold my-[2px]'>{name}</p>
      </div>
      <div className='flex w-full'>
        {airPollutants.map((item) => {
          return (
            <div className='bg-gray-100 m-1 flex items-center justify-center flex-col w-0 flex-grow rounded'>
              <p className='text-[#ed8a36] font-serif text-2xl mx-4' key={item["symbol"]}>{item["symbol"]}</p>
              <p className='text-2xl font-serif font-medium scale-y-125 -my-1'>0.020</p>
              <p>{item["symbol"] == "SPM" ? "mg/m³" : "ppm"}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Area