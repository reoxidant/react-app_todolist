import React from "react";
import './todo-list.css';
import TodoListItem from "./todo-list-item/todo-list-item";

const TodoList = ({tasks, statusIndex}) => {

    const taskItem = tasks.filter(item => {
        return item.status === statusIndex;
    })
        .map((item, index) => {
            return <TodoListItem {... item} index={index}/>;
        });

    return (
        <div className="nav-items">
            {taskItem}
        </div>
    )
}

export default TodoList;