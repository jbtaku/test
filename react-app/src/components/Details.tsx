import React from 'react'
import { detailColItems, detailRowItems } from '../utils/vars'

type Props = {
  className?: string;
}

function Details({ className }: Props) {
  return (
    <div className={className}>
      <table className='[&_td]:text-center'>
        <tr className='border bg-blue-300'>
          <th></th>
          {detailColItems.map((item) => {
            return <th className='border w-1/4 text-cente' key={item}>{item}</th>;
          })}
        </tr>
        <tr>
          <th className='border bg-blue-300 whitespace-nowrap'>
            <p className='mx-3 lg:mx-[2px]'>{detailRowItems[0]}<span className='font-light text-sm ml-1'>{detailRowItems[1]}</span></p>
          </th>
          <td className='text-white border'>data</td>
          <td className='text-white border'>data</td>
          <td className='text-white border'>data</td>
          <td className='text-white border'>data</td>
        </tr>
        <tr>
          <th className='border bg-blue-300 whitespace-nowrap'>
            <p className='mx-3 lg:mx-[2px]'>{detailRowItems[2]}<span className='font-light text-sm ml-1'>{detailRowItems[3]}</span></p>
          </th>
          <td className='text-white border'>data</td>
          <td className='text-white border'>data</td>
          <td className='text-white border'>data</td>
          <td className='text-white border'>data</td>
        </tr>
        <tr>
          <th className='border bg-blue-300 whitespace-nowrap'>
            <p className='mx-3 lg:mx-[2px]'>{detailRowItems[4]}<span className='font-light text-sm ml-1'>{detailRowItems[5]}</span></p>
          </th>
          <td className='text-white border'>data</td>
          <td className='text-white border'>data</td>
          <td className='text-white border'>data</td>
          <td className='text-white border'>data</td>
        </tr>
      </table>
    </div>
  )
}

export default Details