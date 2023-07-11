import React from 'react'
import { airPollutant } from '../types';
import { airPollutants } from '../utils/vars';

function Header() {

  const mapAirPollutants = (key: keyof airPollutant) => {
    return <ul style={{ margin: 0, padding: 0 }}>{airPollutants.map((item) => {
      return <li key={item[key]} style={{ listStyle: "none", display: "inline", margin: "6px" }}>{item[key]}</li>;
    })}</ul>
  }

  return (
    <header>
      <div className='md:flex flex-wrap'>
        <h1 className='text-gray-100 text-5xl font-bold md:mr-6 mb-6'>七尾市の大気環境状況</h1>
        <div className='flex items-center bg-gray-100 flex-grow rounded-md mt-2 mb-8'>
          <p className='mx-2'>data</p>
        </div>
      </div>
      <div className='md:flex'>
        <div>
          <div className='text-gray-100'>{mapAirPollutants("name")}</div>
          <div className='text-yellow-500 text-3xl font-serif'>{mapAirPollutants("symbol")}</div>
        </div>
        <div className='flex-grow flex items-center justify-center'>
          <p className='text-4xl text-gray-100'>data</p>
        </div>
      </div>
    </header>
  )
}

export default Header