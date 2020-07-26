import React from "react";
import './sidebar.css';
import SidebarNavMenu from "./../sidebar-nav-menu/sidebar-nav-menu";
import SidebarProjectBar from "./../sidebar-project-bar/sidebar-projects-bar";

const Sidebar = () => {
    return (
        <div class="sidebar">
            <SidebarNavMenu/>
            <SidebarProjectBar/>
        </div>
    )
}

export default Sidebar;