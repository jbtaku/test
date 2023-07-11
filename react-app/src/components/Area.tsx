import React from 'react'
import { airPollutants } from '../utils/vars'

type Props = {
  name: string
}

function Area({ name }: Props) {
  return (
    <div className='bg-blue-500 rounded-md my-2 p-2'>
      <div className='flex items-center justify-center'>
        <p className='text-white text-2xl font-bold my-1'>{name}</p>
      </div>
      <div className='flex w-full'>
        {airPollutants.map((item) => {
          return (
            <div className='bg-gray-100 m-1 flex items-center justify-center flex-col w-0 flex-grow rounded'>
              <p className='text-yellow-500 font-serif text-2xl mx-4'>{item["symbol"]}</p>
              <p className='text-2xl font-serif'>data</p>
              <p>{item["symbol"] == "SPM" ? "mg/m³" : "ppm"}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Area