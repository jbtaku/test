import React from 'react'

type Props = {
    className?: string;
}

function Notes({className}:Props) {
  return (
    <div className={className + ' text-white flex flex-col justify-center'} >
        <p>※連続値であり、今後修正される可能性があります。</p>
        <p>※「***」は、測定機器等の調整中であることを表しています。</p>
        <p>※「---」は、現在測定を行なっていない項目であることを表しています。</p>
    </div>
  )
}

export default Notes