import React from 'react'
import './RandomContent.css'

const RandomContent = ({ length = 4 }) => {

  return (
    <ul className="RandomContent">
      {
        [...Array(length).keys()]
          .map((e, index) => <div key={index} className='Box'></div>)
      }
    </ul>
  )
}

export default RandomContent