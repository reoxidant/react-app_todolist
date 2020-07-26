import React from "react";
import Sidebar from './../sidebar/sidebar';
import ContentTodoList from "./../content-todo-list/content-todo-list";
import './content-app.css';

const ContentApp = () => {
    return (
        <div className="content-app">
            <Sidebar/>
            <ContentTodoList/>
        </div>
    )
}

export default ContentApp;