import React from "react";
import './content.css';
import TodoList from "./todo-list/todo-list";

const Content = ({todoList, statusList}) => {

    const statusPage = statusList.find(item => item.select);

    const statusPageIndex = statusList.findIndex(
        item => item.select);

    const projects = todoList.map((project) => {
        return <TodoList tasks={project.tasks} statusIndex={statusPageIndex}/>
    });

    return (
        <div className="content-app">
            <div className="nav-items-content">
                <div className="nav-header">
                    <h2>{statusPage.name}</h2>
                </div>
                {/*<SidebarApp todoList={todoList}/>*/}
                {projects}
            </div>
        </div>
    )
}

export default Content;