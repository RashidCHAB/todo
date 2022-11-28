import "./styles.css"
import React, { useState } from "react";
import imagel from "./images/слева.png"
import imager from "./images/справа.png"
import Head from "./components/Head";
import Form from "./components/Form";
import List from "./components/List";

function App() {

  const [text, setText] = useState("")
  const [array, setTasks] = useState(
    [
      { text: "Задание из массива ", priority: "white" },
      { text: "Задание из массива 2", priority: "red" },
      { text: "Задание из массива 3", priority: "white" }
    ])
  const adder = (e) => {
    e.preventDefault()

    setTasks([...array, { text: text, priority: "white" }])
    setText("")
  }
  return (
    <div className="body">
      <img src={imagel} alt="1" className="leftimg" />

      <div className='main'>
        <Head />
        <Form adder={adder} text={text} setText={setText} />
        {array.map((task => <List text={task.text} priority={task.priority} />))}
      </div>

      <img src={imager} alt="1" className="rigthimg" />
    </div>
  )
}

export default App;
