import React from "react";
import './content-app.css';
import Sidebar from './../sidebar/sidebar';
import ContentTodoList from "./../content-todo-list/content-todo-list";

const ContentApp = () => {
    return (
        <div className="content-app">
            <Sidebar/>
            <ContentTodoList/>
        </div>
    )
}

export default ContentApp;