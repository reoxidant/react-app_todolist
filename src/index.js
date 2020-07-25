//TODO: show Hello world on the page

import React from 'react';
import ReactDOM from 'react-dom';
import logo from "./logo.png";
import './index.css';

//TODO: show carkas app on the page

ReactDOM.render(
    (
        <div>
            <header>
                <div className="logo">
                    <img src={logo} alt="logotype"/>
                    <span>Todolist</span>
                </div>
                <div className="actions-bar">
                    <div className="field-search">
                        <input id="search" type="text"/>
                        <label htmlFor="search" className="fa fa-search input-icon"></label>
                    </div>
                    <button id="add-button">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </div>
            </header>
            <div className="content-app">
                <div className="sidebar-todo">
                    <input type="radio" id="todo1" name="todo" value="td"/>
                    <label htmlFor="todo1">Today</label>

                    <input type="radio" id="todo2" name="todo" value="cmp"/>
                    <label htmlFor="todo2">Complete</label>

                    <input type="radio" id="todo3" name="todo" value="ntd"/>
                    <label htmlFor="todo3">Need to do</label>
                </div>
                {<div className="nav-wrapper">
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
                </div>}
            </div>
        </div>
    )
    , document.getElementById('root'));