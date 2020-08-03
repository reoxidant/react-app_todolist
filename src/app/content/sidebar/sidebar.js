import React from "react";
import './sidebar.css';
import NavMenu from "./nav-menu/nav-menu";
import SidebarProjectBar from "./projects-list/projects-list";

const Sidebar = ({tasks}) => {
    return (
        <div className="sidebar">
            <NavMenu tasks={tasks}/>
            <SidebarProjectBar showListProjects tasks={tasks}/>
        </div>
    )
}

export default Sidebar;