import React from 'react'
import './Home.css'
import RandomContent from '../../components/RadomContent/RandomContent'

const Home = () => {
  return (
    <div className="Home">
      <div className="Container">
        <h1>Welcome to ...</h1>
        <RandomContent length={43} />
      </div>
    </div>
  )
}

export default Home