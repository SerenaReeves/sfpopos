import React from 'react';
import POPOSSpace from './POPOSSpace.js';
import './POPOSList.css';
import data from './sfpopos-data.json'

function POPOSlist() {

  const spaces = data.map(( { title, address, images, hours }, i) => {
    return (
      <POPOSSpace
        id={ i }
        key={title}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
    )
  })

  return(
    <div className="POPOSlist">
      { spaces }
    </div>
  )
}

export default POPOSlist
