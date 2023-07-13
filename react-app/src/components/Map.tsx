import React from 'react'

type Props = {
  className?: string;
  img: string;
}

function Map({ img, className}: Props) {
  return (
    <div className={className + " flex justify-center"}>
      <img className='rounded-md w-full h-full max-h-[500px]' src={process.env.PUBLIC_URL + "/img/" + img} alt="地図" />
    </div>
  )
}

export default Map