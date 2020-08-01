import React from "react";
import './content-app.css';
import SidebarApp from './../sidebar-app/sidebar-app';
import ContentTodoList from "./../content-todo-list/content-todo-list";

const ContentApp = () => {
    return (
        <div className="content-app">
            <SidebarApp/>
            <ContentTodoList/>
        </div>
    )
}

export default ContentApp;