import React from "react";
import './contend-todo-list.css';

const ContentTodoList = () => {
    return (
        <div className="nav-wrapper">
            <div className="nav-header">
                <h2>Today</h2>
            </div>
            <div className="nav-item-1 nav-item">
                <input type="checkbox" id="task-1" name="task-1" value="ok"/>
                <label htmlFor="task-1">Task 1</label>
            </div>
            <div className="nav-item-2 nav-item">
                <input type="checkbox" id="task-2" name="task-2" value="off"/>
                <label htmlFor="task-2">Task 2</label>
            </div>
            <div className="nav-item-3 nav-item">
                <input type="checkbox" id="task-3" name="task-3" value="ok"/>
                <label htmlFor="task-3">Task 3</label>
            </div>
            <div className="nav-item-4 nav-item">
                <input type="checkbox" id="task-4" name="task-4" value="ok"/>
                <label htmlFor="task-4">Task 4</label>
            </div>
            <div className="nav-item-5 nav-item">
                <input type="checkbox" id="task-5" name="task-5" value="ok"/>
                <label htmlFor="task-5">Task 5</label>
            </div>
        </div>
    )
}

export default ContentTodoList;