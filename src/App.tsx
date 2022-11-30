import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {json} from "stream/consumers";

type PropsType = {
    body: string
    id: number
    title: string
    userId: number
}




function App() {
    const [state, setState] = useState<PropsType[]>([])
    const addHandler = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setState(json))
    }
    const deleteHandler = () => {
        setState([])
    }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setState(json))
    }, [])
    return (
        <div className="App">
            <button onClick={addHandler}>Show posts</button>
            <button onClick={deleteHandler}>Delete</button>
            <ul>
                {state.map((el) => {
                    return (
                        <li key={el.id}>
                         <span>{el.id}</span>
                         <span>{el.userId}</span>
                         <span>{el.title}</span>

                        </li>

                    )
                })}
            </ul>
        </div>
    );
}

export default App;
