import React from "react";

const TodoListItem = ({taskItem, index}) => {

    const classNameField = `nav-item-${index} nav-item`;
    const idName = `task-${index}`;

    return (
        <div className={classNameField}>
            <input type="checkbox" id={idName} name={idName} value="ok"/>
            <label htmlFor={idName}>{taskItem.label}</label>
        </div>
    )
}

export default TodoListItem;