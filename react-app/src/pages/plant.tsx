import React from 'react'
import { Header, Map } from '../components'
import { airPollutants2 } from '../utils/vars'
import Legend2 from '../components/Legend2'
import Area2 from '../components/Area2'
import Notes from '../components/Notes'

function Plant() {
  return (
    <body className="bg-blue-400 px-14 py-9 min-h-screen">
      <Header airPollutants={airPollutants2} />
      <div className='grid-container2'>
        <Legend2 className='item-a m-1' />
        <Map className='item-b m-1' img="plant.png" />
        <Area2 className='item-c flex flex-col justify-center m-1 p-1' name='煙源①' />
        <Area2 className='item-d flex flex-col justify-center m-1 p-1' name='煙源②' />
        <Notes className='item-e m-1'/>
      </div>
    </body>
  )
}

export default Plant