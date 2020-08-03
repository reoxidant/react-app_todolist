import React from "react";
import './nav-menu.css';

const NavMenu = () => {
    return (
        <div className="sidebar-nav-menu">
            <input type="radio" id="todo1" name="todo" value="td"/>
            <label htmlFor="todo1">Today</label>

            <input type="radio" id="todo2" name="todo" value="cmp"/>
            <label htmlFor="todo2">Complete</label>

            <input type="radio" id="todo3" name="todo" value="ntd"/>
            <label htmlFor="todo3">Need to do</label>
        </div>
    )
}

export default NavMenu;