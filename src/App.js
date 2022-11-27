import styles from "./styles.css"
import React from "react";
import imagel from "./images/слева.png"
import imager from "./images/справа.png"
import Main from "./components/Main";

function App() {
  return (
    <div className="body">
    <img src={imagel} alt="1" className="leftimg"/>
    <Main />
    <img src={imager} alt="1" className="rigthimg"/>
    </div>
  )
}

export default App;
