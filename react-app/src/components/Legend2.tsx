import React from 'react'
import { airPollutants2 } from '../utils/vars'
import LegendItem from './LegendItem'

type Props = {
    className?: string;
}

function Legend2({ className }: Props) {
    return (
        <div className={className + ' bg-blue-200 rounded-md flex flex-col items-center justify-center'}>
            <h2 className='my-auto'>表示凡例</h2>
            <div className='sm:flex md:block lg:block'>
                <table className='sm:m-1 md:m-0'>
                    <tr className='border-y'>
                        <td rowSpan={2} className='border-r px-3'>{airPollutants2[0]["symbol"]}</td>
                        <td className='border-b border-r'>煙源①</td>
                        <td className='flex flex-col px-2 py-1'>
                            <LegendItem bg="bg-gray-100" text="：80ppm以下" />
                            <LegendItem bg="bg-yellow-200" text="：80ppm超" />
                        </td>
                    </tr>
                    <tr>
                        <td className='border-r'>煙源②</td>
                        <td className='flex flex-col px-2 py-1'>
                            <LegendItem bg="bg-gray-100" text="：50ppm以下" />
                            <LegendItem bg="bg-yellow-200" text="：50ppm超" />
                        </td>
                    </tr>
                </table>
                <table className='border-y sm:m-1 md:m-0'>
                    <tr className='border-b'>
                        <td rowSpan={2} className='border-r px-3'>{airPollutants2[1]["symbol"]}</td>
                        <td className='border-b border-r'>煙源①</td>
                        <td className='flex flex-col px-2 py-1'>
                            <LegendItem bg="bg-gray-100" text="：60ppm以下" />
                            <LegendItem bg="bg-yellow-200" text="：60ppm超" />
                        </td>
                    </tr>
                    <tr className=''>
                        <td className='border-r'>煙源②</td>
                        <td className='flex flex-col px-2 py-1'>
                            <LegendItem bg="bg-gray-100" text="：45ppm以下" />
                            <LegendItem bg="bg-yellow-200" text="：45ppm超" />
                        </td>
                    </tr>
                </table>
            </div>
            <div className='flex items-center justify-center my-auto'>
                <p>data ----- 風向（地上、16方位）</p>
            </div>
        </div>
    )
}

export default Legend2