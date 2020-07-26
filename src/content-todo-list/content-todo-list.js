import React from "react";
import './contend-todo-list.css';

const ContentTodoList = () => {
    return (
        <div className="nav-items-content">
            <div className="nav-header">
                <h2>Today</h2>
            </div>
            <div className="nav-items">
                <div className="nav-item-1 nav-item">
                    <input type="checkbox" id="task-1" name="task-1" value="ok"/>
                    <label htmlFor="task-1">Task 1</label>
                </div>
            </div>
        </div>
    )
}

export default ContentTodoList;