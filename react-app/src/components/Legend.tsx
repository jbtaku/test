import React from 'react'
import { airPollutants } from '../utils/vars'
import LegendItem from './LegendItem'

type Props = {
  className?: string;
}

function Legend({ className }: Props) {
  return (
    <div className={className + ' bg-blue-200 rounded-md flex flex-col items-center justify-center'}>
      <h2 className='my-auto'>表示凡例</h2>
      <table className=''>
        <tr className='border'>
          <td className='border px-3'>{airPollutants[0]["symbol"]}</td>
          <td className='flex flex-col px-2 py-1'>
            <LegendItem bg="bg-gray-100" text="：0.040ppm以下" />
            <LegendItem bg="bg-yellow-300" text="：0.040ppm越〜0.100ppm以下" />
            <LegendItem bg="bg-red-500" text="：0.100ppm超" />
          </td>
        </tr>
        <tr className='border'>
          <td className='border px-3'>{airPollutants[1]["symbol"]}<br />
            {airPollutants[2]["symbol"]}</td>
          <td className='flex flex-col px-2 py-1'>
            <LegendItem bg="bg-gray-100" text="：0.060ppm以下" />
            <LegendItem bg="bg-yellow-300" text="：0.060ppm越〜0.500ppm以下" />
            <LegendItem bg="bg-red-500" text="：0.500ppm超" />
          </td>
        </tr>
        <tr className='border'>
          <td className='border px-3'>{airPollutants[3]["symbol"]}</td>
          <td className='flex flex-col px-2 py-1'>
            <LegendItem bg="bg-gray-100" text="：0.100mg/m³以下" />
            <LegendItem bg="bg-yellow-300" text="：0.100mg/m³越〜0.200mg/m³以下" />
            <LegendItem bg="bg-red-500" text="：0.200mg/m³超" />
          </td>
        </tr>
      </table>
      <div className='my-auto'></div>
    </div>
  )
}

export default Legend