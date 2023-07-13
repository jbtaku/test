import React from 'react'
import { airPollutants2 } from '../utils/vars'
import Details from './Details'

type Props = {
    className?: string;
    name: string
}

function Area2({ className, name }: Props) {
    return (
        <div className={className + ' bg-blue-500 rounded-md md:py-1'}>
            <div className='flex items-center justify-center md:my-auto'>
                <p className='text-white text-2xl font-bold my-1'>{name}</p>
            </div>
            <div className='flex w-full'>
                {airPollutants2.map((item) => {
                    return (
                        <div className='bg-gray-100 m-1 flex items-center justify-center flex-col w-0 flex-grow rounded'>
                            <p className='text-yellow-500 font-serif text-2xl mx-4' key={item["symbol"]}>{item["symbol"]}</p>
                            <p className='text-2xl font-serif'>data</p>
                            <p>{item["symbol"] == "SPM" ? "mg/m³" : "ppm"}</p>
                        </div>
                    )
                })}
            </div>
            <Details className='mt-1 md:my-auto' />
            <p className='text-white text-center my-1 md:my-auto'>排ガス温度：data 発電量：data</p>
        </div>
    )
}

export default Area2