import React from "react";
import './sidebar-project-bar.css';

const SidebarProjectBar = () => {
    return (
        <div className="sidebar-todo-projects">
            <div className="header-todo-projects">
                <h3>Projects</h3>
                <button id="add-button">
                    <i className="fa fa-plus" aria-hidden="true"/>
                </button>
            </div>
            <hr/>
            <div className="nav-projects-menu">
                <div className="project-item">
                    <div className="nav-project-header">
                        <div className="nav-icon">
                            <i className="fa fa-angle-down" aria-hidden="true"/>
                        </div>
                        <div className="nav-name">
                            <span>Work</span>
                        </div>
                    </div>
                    <div className="nav-project-items">
                        <ul>
                            <li>New Brand</li>
                            <li>Web update</li>
                            <li>Product Road Map</li>
                            <li>Meeting Agenda</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarProjectBar;