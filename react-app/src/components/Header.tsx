import React from 'react'
import { airPollutant } from '../types';

type Props = { className?: string; airPollutants: airPollutant[]; }

function Header({ className, airPollutants }: Props) {

  const mapAirPollutants = (key: keyof airPollutant) => {
    return (
      airPollutants.map((item)=>{
        return <p className='inline-block m-1' key={item[key]}>{item[key]}</p>
      })
    )
  }

  return (
    <header className={className + " header-grid-container"}>
      <h1 className='item-a text-gray-100 text-3xl sm:text-4xl lg:text-5xl font-bold md:mr-6 mb-1'><span className='inline-block'>七尾市の</span><span className='inline-block'>大気環境状況</span></h1>
      <div className='item-b flex items-center bg-gray-100 rounded-md md:h-2/3 self-center my-2'>
        <p className='mx-2'>data</p>
      </div>
      <div className='item-c text-gray-100 md:text-center'>{mapAirPollutants("name")}</div>
      <div className='item-d text-yellow-500 text-2xl lg:text-3xl font-serif md:text-center'>{mapAirPollutants("symbol")}</div>
      <div className='item-e flex items-center justify-center'>
        <p className='text-4xl text-gray-100'>data</p>
      </div>
    </header>
  )
}

export default Header