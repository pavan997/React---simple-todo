import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList ({todosList}) {
    return (
    <div>
     {todosList.map(event => 
           <TodoItem event={event} />)}
    </div>
    )
};