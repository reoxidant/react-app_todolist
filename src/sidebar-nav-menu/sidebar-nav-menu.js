import React from "react";
import './sidebar-nav-menu.css';

const SidebarNavMenu = () => {
    return (
        <div className="nav-todo-menu">
            <input type="radio" id="todo1" name="todo" value="td"/>
            <label htmlFor="todo1">Today</label>

            <input type="radio" id="todo2" name="todo" value="cmp"/>
            <label htmlFor="todo2">Complete</label>

            <input type="radio" id="todo3" name="todo" value="ntd"/>
            <label htmlFor="todo3">Need to do</label>
        </div>
    )
}

export default SidebarNavMenu;