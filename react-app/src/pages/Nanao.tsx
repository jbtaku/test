import React from 'react'
import { Area, Header, Legend, Map } from "../components";
import { airPollutants, areas } from '../utils/vars';
import Notes from '../components/Notes';

function Nanao() {
    return (
        <body className="bg-blue-400 px-[10%] py-[4%] min-h-screen">
            <Header airPollutants={airPollutants} />
            <div className='flex'>
                <div className='flex flex-col w-0 flex-grow'>
                    <Legend className='item-a pb-0 my-2 md:mx-1' />
                    <Area className='my-1' name='田鶴浜' />
                    <Area className='my-1' name='鹿島' />
                </div>
                <div className='flex flex-col w-0 flex-grow'>
                    <Map className='item-b m-1' img="nanao.png" />
                    <Notes className='item-i m-1' />
                </div>
                <div className='flex flex-col w-0 flex-grow'>
                    <Area className='my-1' name='能登島' />
                    <Area className='my-1' name='石崎' />
                    <Area className='my-1' name='大田' />
                    <Area className='my-1' name='七尾' />
                </div>
            </div>
        </body>
    )
}

export default Nanao