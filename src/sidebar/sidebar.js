import React from "react";
import SidebarNavMenu from "./../sidebar-nav-menu/sidebar-nav-menu";
import SidebarProjectBar from "./../sidebar-project-bar/sidebar-projects-bar";
import './sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar-todo">
            <SidebarNavMenu/>
            <SidebarProjectBar/>
        </div>
    )
}

export default Sidebar;