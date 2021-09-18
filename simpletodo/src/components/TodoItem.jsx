import React from "react";

export default function TodoItem ({event}) {
    return (
        <div className="item">{event.title}</div>
    )
}