import { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {

    const [text, setText] = useState("");
    const [todosList, setTodosList] = useState([]);
    const handleChange = (e) => {
        const {value} = e.target

        console.log("input changed",value);
        setText(value);
    }

    const payload = { status: false, title: text };

    const addTodosList = () => {
        setTodosList([...todosList, payload]);
        setText("");
    }    
    return <div className="container">
          <TodoList todosList={todosList} />
        <input className="inp" value={text} onChange={handleChange} type="text" placeholder="Write Something" />
        <button className="btn" onClick={addTodosList}>+</button>
      
    </div>
 };

export { Todo };