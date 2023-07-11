import React from 'react'

type Props = {
  img: string;
}

function Map({img}: Props) {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/" + img} alt="七尾市の地図" />
    </div>
  )
}

export default Map