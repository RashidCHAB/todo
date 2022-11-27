import React from 'react';
import Form from './Form';
import Head from './Head';
import List from './List';
import tasks  from './tasks';
const Main = () => {
    
    return (
        <div className='main'>
            <Head />
            <Form />
            {tasks.map((task => <List text={task.text} priority={task.priority}/>))}
        </div>
    );
};

export default Main;