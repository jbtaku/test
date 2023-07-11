import React from 'react'
import { airPollutants } from '../utils/vars'
import LegendItem from './LegendItem'

function Legend() {
  return (
    <div className='bg-blue-200 rounded-md p-4'>
      <table className=''>
        <th colSpan={2}>表示凡例</th>
        <tr className='border'>
          <td className='border p-3'>{airPollutants[0]["symbol"]}</td>
          <td className='flex flex-col p-3'>
            <LegendItem bg="bg-gray-100" text="：0.04ppm以下" />
            <LegendItem bg="bg-yellow-300" text="：0.04ppm越〜0.100ppm以下" />
            <LegendItem bg="bg-red-500" text="：0.100ppm超" />
          </td>
        </tr>
        <tr className='border'>
          <td className='border p-3'>{airPollutants[1]["symbol"]}<br />
            {airPollutants[2]["symbol"]}</td>
          <td className='flex flex-col p-3'>
            <LegendItem bg="bg-gray-100" text="：0.04ppm以下" />
            <LegendItem bg="bg-yellow-300" text="：0.04ppm越〜0.100ppm以下" />
            <LegendItem bg="bg-red-500" text="：0.100ppm超" />
          </td>
        </tr>
        <tr className='border'>
          <td className='border p-3'>{airPollutants[3]["symbol"]}</td>
          <td className='flex flex-col p-3'>
            <LegendItem bg="bg-gray-100" text="：0.04ppm以下" />
            <LegendItem bg="bg-yellow-300" text="：0.04ppm越〜0.100ppm以下" />
            <LegendItem bg="bg-red-500" text="：0.100ppm超" />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Legend