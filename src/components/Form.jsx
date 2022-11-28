import React from 'react';
import { useState } from 'react';


const Form = (props) => {
    const [array, setArray] = useState()

    
    return (
        <div className='form' onSubmit={props.adder}>
            <form>
                <input type="text" placeholder='Текст задания' className='input' value={props.text} onChange={(e) => props.setText(e.target.value)}/>
                <button type="submit" className='accbtn'>ПОДТВЕРДИТЬ</button>
            </form>

        </div>
    );
};

export default Form;