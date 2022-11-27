import React from 'react';
import { useState } from 'react';
import List from './List';
import tasks from './tasks';


const Form = () => {
    const [text, setText] = useState("")
    const [array, setArray] = useState(tasks)

    const adder = (e) => {
        e.preventDefault()
        // ТУТ ДОЛЖНО БЫТЬ ДОБАВЛЕНИЕ
    }
    return (
        <div className='form' onSubmit={adder}>
            <form>
                <input type="text" placeholder='Текст задания' className='input' value={text} onChange={(e) => setText(e.target.value)}/>
                <button type="submit" className='accbtn'>ПОДТВЕРДИТЬ</button>
            </form>

        </div>
    );
};

export default Form;