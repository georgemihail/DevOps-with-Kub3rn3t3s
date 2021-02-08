import React from 'react'
import path from './image/day.jpg'

const App = () => {
  return(
    <div>
      <div style={{"textAlign":"center"}}>
        <h2>
          To do
        </h2>
        <img src={path} alt="day" width={300} />  
      </div>
    </div>
  )
}

export default App;
