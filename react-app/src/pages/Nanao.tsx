import React from 'react'
import { Area, Header, Legend, Map } from "../components";
import { airPollutants, areas } from '../utils/vars';
import Notes from '../components/Notes';

function Nanao() {
    return (
        <body className="bg-blue-400 px-[10%] py-[4%] min-h-screen">
            <Header airPollutants={airPollutants} />
            <div className='grid-container'>
                <Legend className='item-a pb-0 my-2 md:mx-1' />
                <Map className='item-b m-1' img="nanao.png" />
                {areas.map((item) => {
                    return (
                        <Area className={item.gridItem + " my-1 p-1 md:mx-1"} name={item.name} />
                    )
                })}
                <Notes className='item-i m-1'/>
            </div>
        </body>
    )
}

export default Nanao