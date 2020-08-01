import React from "react";
import './sidebar.css';
import NavMenu from "../nav-menu/nav-menu";
import SidebarProjectBar from "./../projects-list/projects-list";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <NavMenu/>
            <SidebarProjectBar showListProjects/>
        </div>
    )
}

export default Sidebar;