import React from "react";
import './sidebar-app.css';
import SidebarNavMenu from "./../sidebar-nav-menu/sidebar-nav-menu";
import SidebarProjectBar from "./../sidebar-project-bar/sidebar-projects-bar";
const SidebarApp = () => {
    return (
        <div className="sidebar">
            <SidebarNavMenu/>
            <SidebarProjectBar showListProjects/>
        </div>
    )
}

export default SidebarApp;