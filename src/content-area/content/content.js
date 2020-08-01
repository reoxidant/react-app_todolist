import React from "react";
import './content.css';
import SidebarApp from './../../sidebar-area/sidebar/sidebar';
import ContentTodoList from "../todo-list/todo-list";

const Content = () => {
    return (
        <div className="content-app">
            <SidebarApp/>
            <ContentTodoList/>
        </div>
    )
}

export default Content;