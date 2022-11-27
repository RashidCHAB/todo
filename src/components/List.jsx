import React from 'react';
import white from "../images/white.png"
import red from "../images/red.png"
import dltimg from '../images/dlt.png'
import { useState } from 'react';
const List = (props) => {
    const [image, setImage] = useState(props.priority)
    const handlePriority = () => {
        if (image === "white") setImage("red") 
        if (image === "red") setImage("white")
    }
    const dlt = (e) => {
        e.target.parentElement.parentElement.remove()
    }
    return (
        <div className='list'>
            <div className='task'>

                <button onClick={handlePriority} className='prio'>
                    {image === "white" ? <img src={white} className="white" /> : <img src={red} className="red" />}
                </button>
                {image === "white" ? <p className='txt'>{props.text}</p> : <p className='redtxt'>{props.text}</p>}
                <button className='dltbtn' onClick={dlt}><img src={dltimg}  className="dltimg"/></button>

            </div>

        </div>
    );
};

export default List;