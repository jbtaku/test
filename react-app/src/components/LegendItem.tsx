import React from 'react'

type Props = {
    bg: string
    text: string
}

function LegendItem(props:Props) {
    return (
        <div className='flex items-center'>
            <div className= {props.bg + ' p-2 m-1'}></div><p>{props.text}</p>
        </div>
    )
}

export default LegendItem