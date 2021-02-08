import React, { useState } from 'react'
import imgPath from './image/day.jpg'

const App = () => {
  const [tasks, setTask] = useState([])

  const submitHandler = (event) => {
    event.preventDefault()
    let task = event.target.task.value
    setTask(tasks.concat({
      text: task,
      done: false
    }))
    event.target.task.value = ''
  }

  const switchDone = (id) => {
    let taskCopy = [...tasks][id]
    taskCopy = {...taskCopy, done: !taskCopy.done}
    setTask(
      tasks.map((t, i) => i === id ? taskCopy : t)
    )
  }
  
  return(
    <div style={{"textAlign": "center"}}>
      <div>
        <h2>
          To do
        </h2>
        <img src={imgPath} alt="welcome" width="400"/>
      </div>

      <form onSubmit={submitHandler}>
        <input name="task" />
        <button> Create TODO </button>
      </form>
      <div style={{"marginTop": "20px"}}>
        {tasks.map((task, id) => (
          <div key={id}>
            <li>
              { task.text }
              <button
                onClick={() => switchDone(id)}
              >
                { 
                task.done ? "Mark done" : "Mark undone"
                }
            </button>  
            </li>

          </div>
        ))}
      </div>
    </div>
  )
}
export default App;
