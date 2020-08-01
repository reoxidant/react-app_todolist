import React from "react";
import './sidebar-project-bar.css';

const SidebarProjectBar = ({showListProjects}) => {

    const showProjectsList = (showListProjects) ? "project-bar__item show" : "project-bar__item";

    return (
        <div className="sidebar__projects-bar">
            <div className="projects-bar__header">
                <h3>Projects</h3>
                <button id="projects-bar__add-new-item-button">
                    <i className="fa fa-plus" aria-hidden="true"/>
                </button>
            </div>
            <hr/>
            <div className="project-bar__content">
                <div className={showProjectsList}>
                    <div className="item__header">
                        <div className="item__header-icon">
                            <i className="fa fa-angle-down" aria-hidden="true"/>
                        </div>
                        <div className="item__header-name">
                            <span>Work</span>
                        </div>
                    </div>
                    <div className="item-tasks__list scale-up-ver-top">
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